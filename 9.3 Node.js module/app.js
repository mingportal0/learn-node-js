// 모듈을 전역 함수 require()를 이용하여 추출한다.
// const circle = require('./circle.js');

// // console.log(`지름이 4인 원의 면적 : ${circle.area(4)}`);
// // console.log(`지름이 4인 원의 둘레 : ${circle.circumference(4)}`);

// const myCircle = circle(4);
// console.log(`지름이 4인 원의 면적 : ${myCircle.area()}`);
// console.log(`지름이 4인 원의 둘레 : ${myCircle.circumference()}`);

// const value = require('./primitive.js');
// console.log(value);

const myModule = require('./module');

const result = myModule.calc.add(1, 2);
console.log(result);

myModule.print.sayHello();