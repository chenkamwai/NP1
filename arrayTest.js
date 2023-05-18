const andrew = {
  name: "andrew",
  age: 50,
  students: [
    {
      name: "Andy",
      age: 20,
      exercises: [{ score: 60, date: new Date("2018-10-01") }],
    },
    {
      name: "Bob",
      age: 23,
      exercises: [
        { score: 76, date: new Date("2019-01-05") },
        { score: 55, date: new Date("2018-11-05") },
      ],
    },
    {
      name: "Charlie",
      age: 25,
      exercises: [{ score: 60, date: new Date("2019-01-05") }],
    },
  ],
};

console.log("dennis is handsome".split("  "));

let str = "abc";

console.log(typeof [["John", "Peter", "Ben", "Andy"].join(",")]);

let numArr = [12, 43, 675, 87];

function callbackfn(value) {
  return value * 100;
}

console.log(numArr.map((value, index) => value * 10));

//1. finalresult = []
//2. for loop original array
//3. call callback function
//4. push ele into finalresult
//5. return back to me

console.log(numArr.map(callbackfn));

numArr.filter((ele) => ele % 2 == 0);

let students = andrew.students;

console.log(students.filter((students) => students.name === "Andy"));

console.log(students);

let studentFound = students.filter((students) => students.name === "Dennis");

console.log(studentFound);

if (studentFound) {
  console.log("i found Dennis");
}

console.log(
  numArr.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
  })
);

// let strArr = ['dennis', 'manson', 'andrew']

// strArr.reduce()

console.log(numArr.map((num) => num * num).filter((num) => num % 2 === 1));
