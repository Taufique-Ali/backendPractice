const Student = require("../modals/student.modal")

async function practiceRoom() {

    // const data = await Student.aggregate([
    //     {
    //         $facet: {
    //             // Track 1: Calculate the global average
    //             "GlobalStats": [
    //                 {
    //                     $sort: { "$totalMarks": -1 }
    //                 },
    //                 {
    //                     $group: {
    //                         _id: null,
    //                         overallAvg: { $avg: "$totalMarks" },
    //                     },
    //                 },
    //                 {
    //                     $limit: 1
    //                 }
    //             ],
    //             // Track 2: Calculate the count per class
    //             "ClassBreakdown": [
    //                 {
    //                     $group: {
    //                         _id: "$class",
    //                         studentCount: { $sum: 1 }
    //                     }
    //                 },
    //                 { $sort: { _id: 1 } }
    //             ]
    //         }
    //     }
    // ])
    // console.log(JSON.stringify(data))


    // const marksDetails = await Student.aggregate([
    //     {
    //         $match: { totalMarks: { $gt: 400 } }
    //     },
    //     {
    //         $facet: {
    //             "GlobalAverage": [
    //                 { $group: { _id: null, avgMarks: { $avg: "$totalMarks" } } }
    //             ],
    //             "ClassCounts": [
    //                 { $group: { _id: "$class", count: { $sum: 1 } } }
    //             ]
    //         }
    //     }
    // ]);

    // console.log(JSON.stringify(marksDetails))


    // const appliedGrade = await Student.aggregate([
    //     {
    //         $addFields: {
    //             performance: {
    //                 $cond: [
    //                     { $gte: ["$totalMarks", 450] },
    //                     "A",
    //                     {
    //                         $cond: [
    //                             { $gte: ["$totalMarks", 400] },
    //                             "B",
    //                             "C"
    //                         ]
    //                     }
    //                 ]
    //             }
    //         }
    //     }
    // ])

    const allRecords = await Student.find({ class: "A" })
    // console.log(JSON.stringify(allRecords))

    // const grouped = await Student.aggregate([
    //     {
    //         $group: {
    //             _id: {
    //                 subject: "$subjects",
    //                 class: "$class",
    //             },
    //             total: { $sum: 1 },
    //             name: {$push:"$name"},
    //             subjects: { $addToSet: "$subjects" }
    //         },
    //     },

    //     {
    //         $project:{
    //             class: "$_id",
    //             avg_marks: 1,
    //             _id:0
    //         }
    //     },

      
    //     {
    //         $sort: { "_id.subject": -1 , "total": -1}
    //     }
    // ])

    // console.log("O/P:", JSON.stringify(grouped))

    const getTopperFromEveryClass = await Student.aggregate([
        {
            $group:{
                _id: {
                    class: "$class",
                    subject:"$subjects"
                },
                topper: {$max:"$totalMarks"},
                avgMarks: {$avg:"$totalMarks"},
        
            }
        },
        {
            $sort:{"_id.class":1}
        }
    ])

    const studentNameAsperGrade = await Student.aggregate([
        {
            $group:{
                _id: "$grade",
                students: {$addToSet:"$name"}
            }
        }
    ])

    const topperStudent = await Student.aggregate([
       {
        $sort:{class:1},
       },
       {
        $group:{
            _id:"$class",
            topStudent: {$first:"$name"},
            marks: {$first: "$totalMarks"}
        }
       }
    ])

    const student = await Student.find({
        $or:[
            {class:"A"},
            {subjects:"English"}
        ]
    })

    // console.log("getTopperFromEveryClass::", JSON.stringify(student))














}

module.exports = practiceRoom