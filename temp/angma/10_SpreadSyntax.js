//======== 전개구문 ========//
// Spread syntax : 배열
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let result = [...arr1, ...arr2];
let result2 = [0, ...arr1, ...arr2, 7, 8, 9];

console.log(result); // [1, 2, 3, 4, 5, 6]
console.log(result2); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//======== 배열 내장 객체를 사용해서 하면 ========//
// arr.push() / arr.splice() / arr.concat() ... 복잡함

//======== 복제 ========//
// 객체도 가능
let arr3 = [...arr1]; //[1, 2, 3]

let user = { name: 'Mike', age: 30 };
let user2 = { ...user }; // {name: 'Mike', age: 30}

user2.name = 'Tom';
console.log(user.name); //Mike
console.log(user2.name); //Tom

//======== 에제 1 ========//
// arr4을 [4,5,6,1,2,3]으로 만들어라
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];

arr4 = [...arr5, ...arr4];
console.log(arr4); //  [4, 5, 6, 1, 2, 3]

//======== 예제 1 -1 ========//
// arr6을 [4,5,6,1,2,3]으로 만들어라 forEach
// 복잡하징... 전개구문 그래서 쓰는 거임
let arr6 = [1, 2, 3];
let arr7 = [4, 5, 6];

arr7.reverse().forEach((num) => {
 arr6.unshift(num);
});
console.log(arr6); // [4, 5, 6, 1, 2, 3]
// reverse()를 하지 않으면[6, 5, 4, 1, 2, 3]

//======== 예제 2 ========//
// 아래 객체와 배열을 specialUser라는 객체로 통합해봐라 : 전개구문
let user3 = { name: 'Chris' };
let info = { age: 30 };
let fe = ['JS', 'React'];
let lang = ['korean', 'English'];

let specialUser = {
 ...user3,
 ...info,
 skills: [...fe],
 languages: [...lang],
};
console.log(specialUser); //{name: 'Chris', age: 30, skills: Array(2), languages: Array(2)}
// languages
// (2) ['korean', 'English']
// skills
// (2) ['JS', 'React']

//======== 예제 2 - 1 ========//
// 위 객체와 배열을 specialUser라는 객체로 통합해봐라 : 고전방법
let specialUserTest1 = Object.assign({}, user3, info, fe, lang);
console.log(specialUserTest1); //{0: 'korean', 1: 'English', name: 'Chris', age: 30}

let specialUserTest2 = Object.assign(
 {},
 user3,
 info,
 {
  skills: [],
 },
 {
  languages: [],
 }
);

fe.forEach((item) => {
 specialUserTest2.skills.push(item);
});

lang.forEach((item) => {
 specialUserTest2.languages.push(item);
});

console.log(specialUserTest2); //{name: 'Chris', age: 30, skills: Array(2), languages: Array(2)}
// languages
// (2) ['korean', 'English']
// skills
// (2) ['JS', 'React']

//========  ========//
//
