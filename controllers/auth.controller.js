const { User } = require('../modals/index')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const { sendToQueue } = require('../rabbitmq')



const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExit = await User.find({ email:email });
        console.log("userExit", userExit)
        if (userExit && userExit.length>0) {
            return res.status(400)
                .json({
                    message: "User alreay Exits."
                })
        }

        const hashedPass = await bcrypt.hash(password, 10);

        const user = await User.create({
            name: name,
            password: hashedPass,
            email: email
        })

        res.status(201).json({
            message: "User created Successfully.",
            data: {
                name: name,
                email: email
            }
        })

    } catch (error) {
        res.status(500).json({
            message: "Something went wrong.",
            error: error
        })
    }
}

const signIn = async (req, res) => {
    const { email, password } = req.body;

    
    const user = await User.findOne({ email:email });
    console.log(user )
    
    if (!user) {
        return res.status(400)
            .json({
                message: "User not found"
            })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({ msg: "Invalid credentials" });
    }
    const token = jwt.sign(
        {
            _id: user._id,
        },
        "secretkeyskehoiewjfkwjerwe",
        { expiresIn: "1d" }
    )

    await sendToQueue('login_queue', {
        userId: user._id,
        email: user.email,
        timestamp: new Date().toISOString(),
        event: 'signin',
    })

    res.json({
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });
}

module.exports = {
    signUp,
    signIn
}