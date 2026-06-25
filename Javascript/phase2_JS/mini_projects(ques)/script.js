//Student Grade Tracker
//Approach 1
const students = [
    {
        name: "Aarav",
        maths: 45,
        science: 70,
        english: 68,
        hindi: 48,
        computer: 32
    },
    {
        name: "Diya",
        maths: 95,
        science: 89,
        english: 91,
        hindi: 87,
        computer: 94
    },
    {
        name: "Rahul",
        maths: 72,
        science: 80,
        english: 75,
        hindi: 70,
        computer: 82
    },
    {
        name: "Sneha",
        maths: 88,
        science: 92,
        english: 85,
        hindi: 90,
        computer: 89
    },
    {
        name: "Karan",
        maths: 78,
        science: 84,
        english: 81,
        hindi: 76,
        computer: 88
    }
];
students.forEach(function(student){
    //finding total marks
    let total = (student.maths +
               student.science + 
               student.english +
               student.hindi +
               student.computer) ;
    //calculate average
    let average = total / 5;

    //determine grade
    let grade;
    if(average > 90) {
        grade = 'A'
    }
    else if(average >= 80) {
        grade = 'B'
    }
    else if(average >= 60) {
        grade = 'C'
    }
    else {
        grade = "F"
    }

    console.log(`Name: ${student.name}
total: ${total}
average: ${average}
grade: ${grade}`)
}) 

//Approach 2: Add the values to the object itself
const student2 = [
    {
        name: "Aarav",
        maths: 45,
        science: 70,
        english: 68,
        hindi: 48,
        computer: 32
    },
    {
        name: "Diya",
        maths: 95,
        science: 89,
        english: 91,
        hindi: 87,
        computer: 94
    },
    {
        name: "Rahul",
        maths: 72,
        science: 80,
        english: 75,
        hindi: 70,
        computer: 82
    },
    {
        name: "Sneha",
        maths: 88,
        science: 92,
        english: 85,
        hindi: 90,
        computer: 89
    },
    {
        name: "Karan",
        maths: 78,
        science: 84,
        english: 81,
        hindi: 76,
        computer: 88
    }
];
student2.forEach(function(element){
    element.total = (element.maths +
               element.science + 
               element.english +
               element.hindi +
               element.computer) ; 

    element.average = element.total / 5;

    if(element.average> 90) element.grade = "A";
    else if(element.average>= 80) element.grade = "B";
    else if(element.average>= 60) element.grade = "C";
    else element.grade = "F";
    console.log("\n")
})
console.log(student2)  //returns an array
//__________________________________________________________________________________________________



            