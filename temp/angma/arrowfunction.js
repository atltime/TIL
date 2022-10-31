let add = function (num1, num2) {
  return num1 + num2;
};

let add1 = (num1, num2) => {
  // function이 없어지고 화살표가 중간에 딱~
  return num1 + num2;
};

let add2 = (num1, num2) => num1 + num2;
// 리턴문은 중괄호가 아닌 일반괄호로 바꿀 수 있다.

let add3 = (num1, num2) => num1 + num2; // 리턴문이 한 줄이라면 괄호도 생략할 수 있다.

let add4 = (num1, num2) => {
  const result = num1 + num2;
  return result;
}; //이렇게 여러줄일 때도 괄호 생략 안 됨

let sayHello1 = (name) => `Hello, ${name}`; // 인수가 하나라면 괄호 생략 가능

let sayHello2 = () => `say Hello`; // 이렇게 인수가 없다면 생략 불가능
console.log(sayHello2);
