//======== 구조 분해 할당 ========//
//Destructuring assignment
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서 그 값을 변수에 담을 수 있게 하는 표현식
let [x, y] = [1, 2];

console.log(x); //1
console.log(y); //2

//======== 에제 1 ========//
let users = ['Mark', 'Clara', 'Tom', 'Jane', 'Mike'];

let [user1, user2, user3, user4, user5] = users;
// => let usr1 = users[0];
// => let usr2 = users[1];
// => let usr3 = users[2];
// => let usr4 = users[3];
// => let usr5 = users[4];

console.log(user1); // Mark
console.log(user2); // Clara
console.log(user3); // Tom
console.log(user4); // Jane
console.log(user5); // Mike

//======== 예제 2 ========//
let str = 'Mike-Tommy-Hanry';

let [user6, user7, user8] = str.split('-'); //['Mike','Tommy','Hanry']

console.log(user6); //Mike
console.log(user7); //Tommy
console.log(user8); //Hanry

//======== 예제 3 ========//
// 만약 해당 값이 없다면, 기본값을 설정하라
let [a, b, c] = [1, 2];
let [aa = 3, bb = 4, cc = 5] = [1, 2];

console.log(a); //1
console.log(b); //2
console.log(c); //undefined

console.log(aa); //1
console.log(bb); //2
console.log(cc); //5 => 기본값이 나온다~~~

//======== 예제 4 ========//
// 공백과 쉼표를 이용해서 일부 반환값 무시

let [user11, , user12] = ['Zoe', 'Lily', 'Aria', 'Grace'];

console.log(user11); //Zoe
// Lily라는 반환값을 공백으로 무시해서 나오지 않고 있다.
console.log(user12); //Aria
// Grace도 사용하는 것이 없으니 무시 됨

//======== 예제 5 ========//
// 바꿔치기
let aaa = 1;
let bbb = 2;

// a,b의 값을 바꿔치기 하고 싶은데 a = b라고 하면 기존 a 값은 사라지니 안 되고
// let ccc = aaa;// 임시값을 일부러 만들어야 해서 불편했음
// aaa === bbb;
// bbb === ccc;

[aaa, bbb] = [bbb, aaa];
console.log(aaa); //2
console.log(bbb); //1 => 배열 구조 분해로 하면, 쉽게 바꿀 수 있음

//======== 객체 구조 분해 ========//
let userObj = { name: 'Mike', age: 30 };

// let { name, age } = userObj;
// let name = userObj.name;
// let age = userObj.age;

let { age, name } = userObj; //=> 이렇게 순서를 바꿔도 동일하게 동작
let { name: userName, age: userAge } = userObj; //=> 이렇게 새로운 변수 이름으로 할당해도 됨

console.log(name); //Mike
console.log(age); //30
console.log(userName); //Mike
console.log(userAge); //30

//======== 객체 구조 분해 : 기본값 ========//
let userObj2 = { name2: 'Mike', age2: 30 };

let { name2, age2, gender2 } = userObj2;

console.log(name2); //Mike
console.log(age2); //30
console.log(gender2); //undefined

let userObj3 = { name3: 'Mike', age3: 30 };
let { name3, age3, gender3 = 'male' } = userObj3;

console.log(name3); //Mike
console.log(age3); //30
console.log(gender3); //male
