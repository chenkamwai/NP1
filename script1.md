<!-- 1. data type -->
let str = 'dennis'
let age = 20 
let isTutor = true 


// console.log(typeof str);
// console.log(typeof age);
// console.log(typeof isTutor);

<!-- 2. arrays and object -->

let students =['petter', 'john', 'marry']

let petter = { 
    name: 'peter',
    age: 23
}

// console.log(typeof Array.isArray(students));
// console.log(typeof peter);

//exercise: obj -> array -> obj -> array

const peter = {
    name: "Peter",
    age: 50,
    students:[
       { name:"Andy", age:20},
       { name:"Bob", age:23},
       {name: "Charlie", age:25 , exercises:[
           { score: 60 , date: new Date("2019-01-05") }
       ]}
    ]
}

// console.log(peter)
// console.dir(peter, { depth: 5 })
console.log(peter.students);
console.log(peter['students']);

// 3. for loop

// for(let students of peter.students){
//     console.log(students);
//     console.log();
// }

// let students = peter.students
// for (let i = 0; i < students.length; i++){
//     console.log(i);
//     console.log(students[I]);
// }

// let index=0

// // while(index < students.length){
// //     console.log(students[index]);
// //     index++
// }

for(student of students) {
    if(student.exercises){
        for(let exercise of student.exercise){
            console.log(exercise);
        }
    }
} 

let studentFound 

for(let student of students) {
    if(student.name === "Andy") {
        studentFound =  student
    }
}

function findstudent(name) {
    for(let student of students) {
        if(student.name === name) {
            studentFound =  student
        }
    }
}

findstudent("Charlie")
console.log(studentFound);

const Manson = {
    name: "Peter",
    age: 50,
    students:[
       { name:"Andy", age:20, exercises:[
          {score: 60, date: new Date("2018-10-01")}
       ]},
       { name:"Bob", age:23, exercises:[
          {score: 76, date: new Date("2019-01-05")},
          {score: 55, date: new Date("2018-11-05")}
       ]},
       { name:"Charlie", age:25, exercises:[
           {score: 60, date: new Date("2019-01-05") }
       ]}
    ]
}

function getAllExdcries(teacher) { 
    for(let student of teacher.students) {
        for(let exercise of student.exercise){
            exercise.push({ name:student.name, ...exercise})
        }
    }
    return exercises 
}

console.log(getAllExdcries(Manson));

let arr1 = [1, 2, 3]
let arr2 = arr1 

arr2.push('dennis')

console.log(arr1);
console.log(arr2);