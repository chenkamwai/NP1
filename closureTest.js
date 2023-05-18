function accumulator() {
  let sum = 0;
  function calculator(num) {
    sum += num;
    return sum;
  }
  return calculator;
  // this can remove outside the script
  // return (num) => {
  //     sum = sum + num
  //     return sum
  // }
}

const num = accumulator();

num(12);

num(100000000);

console.log(num(13));

function addToZero(number) {
  // sum borns
  let sum = 0;
  return sum + number;
  // sum dies after this line
}

addToZero(1222);

addToZero(333);

console.log(addToZero(1));

function AdvancedAccumulator() {
  let sum = 0;

  return {
    reset: () => {
      sum = 0;
      return sum;
    },
    add: (num) => {
      sum = sum + num;
      return sum;
    },
    result: () => {
      return sum;
    },
  };
}

function extremeAccumulator() {
  let sum = 0;

  let acc = {
    reset: () => {
      sum = 0;
      return acc;
    },
    add: (num) => {
      sum += num;
      return acc;
    },
    // 依到大階下面又細階
    // Minus: (num) => {
    //   sum -= num;
    //   return acc;
    // },
    minus: (num) => {
      sum -= num;
      return acc;
    },
    result: () => {
      return sum;
    },
  };

  return acc;
}

const acc = AdvancedAccumulator();

acc.add(1222);

acc.add(233);

console.log(acc.result());

const extCal = extremeAccumulator();
// minus冇add依個function see above extremeAccumulator function
// console.log(extCal.add(333).minus.add(444).result());
console.log(extCal.add(333).minus(444).result());
