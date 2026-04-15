const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    grade: {
        type: String,
        required: true
    },
    class:{
        type: String,
        required: true
    },
    subjects:{
        enum:["Maths", "Science", "History", "Geography", "English"],
        type: String,
        required: true
    },
    totalMarks: {
        type: Number,
        required: true
    }
    
}, { timestamps: true });


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;