const Student = require('../modals/student.modal');

// Create a new student

const dummyStudent = [
  {
    "name": "Rahul Sharma",
    "age": 16,
    "grade": "10th",
    "class": "A",
    "subjects": "Maths",
    "totalMarks": 450
  },
  {
    "name": "Anjali Verma",
    "age": 15,
    "grade": "9th",
    "class": "B",
    "subjects": "Science",
    "totalMarks": 420
  },
  {
    "name": "Amit Kumar",
    "age": 17,
    "grade": "11th",
    "class": "A",
    "subjects": "English",
    "totalMarks": 470
  },
  {
    "name": "Neha Singh",
    "age": 16,
    "grade": "10th",
    "class": "C",
    "subjects": "History",
    "totalMarks": 410
  },
  {
    "name": "Rohit Patel",
    "age": 14,
    "grade": "8th",
    "class": "A",
    "subjects": "Geography",
    "totalMarks": 390
  },
  {
    "name": "Pooja Gupta",
    "age": 15,
    "grade": "9th",
    "class": "B",
    "subjects": "Maths",
    "totalMarks": 430
  },
  {
    "name": "Vikas Yadav",
    "age": 17,
    "grade": "12th",
    "class": "C",
    "subjects": "Science",
    "totalMarks": 480
  },
  {
    "name": "Sneha Reddy",
    "age": 16,
    "grade": "10th",
    "class": "A",
    "subjects": "English",
    "totalMarks": 440
  },
  {
    "name": "Arjun Mehta",
    "age": 15,
    "grade": "9th",
    "class": "C",
    "subjects": "History",
    "totalMarks": 400
  },
  {
    "name": "Kiran Das",
    "age": 14,
    "grade": "8th",
    "class": "B",
    "subjects": "Geography",
    "totalMarks": 385
  }
]

const createStudent = async (req, res) => {
    try {
        const student = await Student.insertMany(dummyStudent);
        res.status(201).json(student);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    createStudent
};