const router = require('express').Router();

// Importing student controller
const {studentController, authController} = require('../controllers/index')

// Routes for student
router.post('/students', studentController.createStudent);

router.post('/signup', authController.signUp)
router.post('/signin', authController.signIn)


module.exports = router;