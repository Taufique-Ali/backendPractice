const express = require('express');
const routes = require('./routers/index');
require('dotenv').config();
const app = express();
const cors  = require('cors')

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const connectDB = require('./mongoConnect');
const practiceRoom = require('./PracticeRoom/Aggregation');
connectDB();

app.get('/',(req, res) => {
    res.send('Hello World!');
});

// Importing routes
app.use('/api', routes);


//  PracticeRoom:

practiceRoom();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});