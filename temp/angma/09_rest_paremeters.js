//======== 나머지 매개변수 ========//
// Rest parameters
// ... 점 세 개를 씀(ES6 환경 권장사항)

function showName(name) {
 console.log(name);
}

showName('Mike'); // Mike
showName('Clara', 'Sophie'); // Clara
// 자바스크립트에서 매개변수는 개수 제한이 없다.. 따라서 추가로 매개변수를 넣어도 오류는 나지 않는다.
showName(); //undefined => 이것도 그래서 오류가 아닌 undefined

//======== arguments ========//
// 함수의 인수를 얻는 방법은 arguments를 접근하거나 ( 과거 방법 )
// ...나머지 매개변수를 사용 ( 요즘 추세, 화살표 함수에는 arguments가 없음 )
// 함수로 넘어 온 모든 인수에 접근할 수 있음
// 함수내에서 이용 가능한 지역 변수임
// length / index 가 있어 배열이라고 생각할 수 있지만, array형태의 객체이다.
// 배열의 내장 메서드 없음( forEach, map 같은 거 사용할 수 없다. )
function showName2(name) {
 console.log(arguments.length);
 console.log(arguments[0]);
 console.log(arguments[1]);
}

showName2('Mike', 'Tom'); //2 //Mike //Tom

//======== 나머지 매개 변수 ========//
//정해지지 않은 갯수의 인수를 배열로 나타내 줌
function showName3(...names) {
 console.log(names);
}

showName3(); //[]
showName3('Mike'); //['Mike'] 배열로 나옴
showName3('Brad', 'Smith'); //['Brad', 'Smith'] 배열로 나옴

//======== 예제 1 ========//
// 전달 받은 모든 수를 더해야함 forEach 사용
function add(...numbers) {
 let result = 0;
 numbers.forEach((num) => (result += num));
 console.log(result);
}

add(1, 2, 3);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//======== 예제 2 ========//
// 전달 받은 모든 수를 더해야함 reduce 사용
function add2(...numbers) {
 let result = numbers.reduce((prev, cur) => (prev += cur));
 console.log(result);
}

add2(1, 2, 3);
add2(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

//======== 예제 3 ========//
// user 객체를 만들어 주는 생성자 함수를 만들자
// 주의 사항!!! 나머지 매개변수는 마지막에 넣어줘야 한다

function User(name, age, ...skills) {
 this.name = name;
 this.age = age;
 this.skills = skills;
}

const user1 = new User('Tom', 30, 'html', 'css');
const user2 = new User('Brad', 20, 'JS', 'React');
const user3 = new User('Jane', 10, 'English');

console.log(user1);
// User {name: 'Tom', age: 30, skills: Array(2)}
// skills
// (2) ['html', 'css']
console.log(user2);
// User {name: 'Brad', age: 20, skills: Array(2)}
// skills
// (2) ['JS', 'React']
console.log(user3);
// User {name: 'Jane', age: 10, skills: Array(1)}
// skills
// ['English']
