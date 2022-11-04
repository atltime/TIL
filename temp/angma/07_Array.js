// push():뒤에 삽입, pop():뒤 삭제, unshift():앞에 삽입, shift():앞 삭제
//======== arr.splice(n, m) ========//
// 특정 요소 지움, n부터 시작해서 m개의 개수만큼 지워달라
let arr1 = [1, 2, 3, 4, 5];

let result = arr1.splice(1, 2); //2,3 지운 거임, 이걸 변수에 저장하면 삭제된 요소를 반환해주는 거임
console.log(result);
console.log(arr1); // [1, 4, 5] 이렇게 됨

//======== arr.splice(n, m, x) ========//
// 특정 요소 지우고 추가하기
// 0을 넣으면 아무 것도 안 지우고 그 자리에 추가 가능함
let arr2 = [1, 2, 3, 4, 5];

arr2.splice(1, 3, 100, 200); // 2,3,4 지워짐
console.log(arr2); // [1, 100, 200, 5];

let arr3 = ['나는', '철수', '입니다'];

arr3.splice(1, 0, '대한민국', '소방관'); // 0을 넣으면 지워지는 게 없음
console.log(arr3); // ['나는', '대한민국', '소방관', '철수', '입니다']

//======== arr.slice(n, m) ========//
// n부터 m까지 반환(m 앞까지 반환), m을 쓰지 않으면 끝까지 반환
let arr4 = [1, 2, 3, 4, 5];

arr4.slice(1, 4); //[2, 3, 4]
let result2 = arr4.slice(); //아무것도 쓰지 않으면 배열이 복사 됨.
console.log(result2);

//======== arr.concat(arr2, arr3 ...) ========//
// 합쳐서 새배열 반환
let arr5 = [1, 2];

arr5.concat([3, 4]); // [1, 2, 3, 4]
arr5.concat([3, 4], [7, 8]); // [1, 2, 3, 4, 7, 8]
arr5.concat([3, 4], 7, 8); // [1, 2, 3, 4, 7, 8] // 이렇게도 반환 값이 동일함

//======== arr.forEach(fn) ========//
// for, for of문으로 배열 반복을 했지만 이걸로도 가능하다. 함수를 인자로 받는다.
let users = ['Mike', 'Tom', 'Jane'];

// 문법
// users.forEach((item, index, arr) => {
//  //..item => Mike, Tom, Jane... index => 0, 1,2... arr => users
// });

users.forEach((name, index) => {
 console.log(`${index + 1}. ${name}`);
});

//======== arr.indexOf / arr.lastIndexof ========//
// 문자열의 indexOf와 사용법이 같다. 조건의 인덱스를 반환하고, 없으면 -1 반환
let arr6 = [1, 2, 3, 4, 5, 1, 2, 3];

arr6.indexOf(3); // 중복된 자료 중 첫번째 값의 인덱스를 반환해서 2가 된다.
arr6.indexOf(3, 3); // 이렇게 인수가 두 개면,
//뒤의 인수는 시작점 인덱스 번호이다. 시작점 인덱스부터 탐색함으로 마지막 3의 인덱스를 반환한다.
//따라서 7이 반환된다.

arr6.lastIndexOf(3); // 7, 끝에서부터 탐색하고 싶으면 이 자바스크립트 함수를 쓰면 된다.

//======== arr.includes() ========//
// 인덱스 번호는 필요없고, 포함하는지만 확인할 때 사용
let arr7 = [1, 2, 3];

arr7.includes(2); //false
arr7.includes(9); //true

//======== arr.find(fn) / arr.findIndex(fn) ========//
// indexOf처럼 찾는 거지만, 복잡한 것을 찾을 때 사용
// 첫번째 true 값만 반환하면 끝남, 만약 없으면 undefinded를 반환, findIndex()는 -1 반환
let arr8 = [1, 2, 3, 4, 5];

const result3 = arr8.find((item) => {
 return item % 2 === 0;
});

console.log(result3); // 2만 반환, 4는 하지도 않음.

// 미성년자 찾기
let userList = [
 { name: 'Mike', age: '30' },
 { name: 'Jane', age: '27' },
 { name: 'Tom', age: '10' },
 { name: 'Sophie', age: '17' },
];

const result4 = userList.find((user) => {
 if (user.age < 19) {
  return true;
 }
 return false;
});

const result5 = userList.findIndex((user) => {
 if (user.age < 19) {
  return true;
 }
 return false;
});

console.log(result4); // {name: 'Tom', age: '10'} // 첫 번째 값만 반환
console.log(result5); // 2 // 역시 첫 번째 인덱스만 반환

//======== arr.filter(fn) ========//
// find나 findIndex는 한 개의 값만 찾아줬지만,
// filter는 조건에 만족하는 모든 요소를 찾아 줌
const result6 = userList.filter((user) => {
 if (user.age < 19) {
  return true;
 }
 return false;
});

console.log(result6); //[{…}, {…} => {name: 'Tom', age: '10'} {name: 'Sophie', age: '17'}

//======== arr.reverse() ========//
// 역순으로 재정렬해 줌
// 최근 가입 유저, 최근글 작성한 글 보여줄 때 자주 사용
let arr9 = [1, 2, 3, 4, 5];
let result7 = arr9.reverse();
console.log(result7); //[5, 4, 3, 2, 1]

//======== arr.map(fn) ========//
// 함수를 인자로 받아 특정 기능을 시행하고 새로운 배열을 반환한다.
let userList2 = [
 { name: 'Sophie', age: '17' },
 { name: 'Mike', age: '30' },
 { name: 'Jane', age: '27' },
 { name: 'Brad', age: '48' },
 { name: 'Tom', age: '10' },
];

let newUserList = userList2.map((user, index) => {
 return Object.assign({}, user, {
  id: index + 1,
  isAdult: user.age > 19,
 });
});

console.log(newUserList);
//{…}, {…}, {…}, {…}, {…}]
// {name: 'Sophie', age: '17', id: 1, isAdult: false}
// {name: 'Mike', age: '30', id: 2, isAdult: true}
// {name: 'Jane', age: '27', id: 3, isAdult: true}
// {name: 'Brad', age: '48', id: 4, isAdult: true}
// {name: 'Tom', age: '10', id: 5, isAdult: false}

//======== arr.join() ========//
// 배열을 사용해서 문자열을 합칠 때 사용
let arr10 = ['안녕', '나는', '철수야'];

let result8 = arr10.join();
console.log(result8); // 안녕,나는,철수야

let result9 = arr10.join(' ');
console.log(result9); //안녕 나는 철수야

//======== arr.split() ========//
// 문자열을 나눠서 배열로 만들어 줌
let str1 = "Hello, My name's Mike.";

let resutl10 = str1.split(' '); // 공백으로 나눔
console.log(resutl10); // ['Hello,', 'My', "name's", 'Mike.']

//======== Array.isArray() ========//
// 배열인지 아닌지 확인할 때 사용
// 자바스크립트에서 배열은 객체로 봄, 일반 객체인지 아닌지 확인이 안 됨
// user2는 일반 객체이고, userList3는 배열임
let user2 = {
 name: 'Mark',
 age: 30,
};

let userList3 = ['Robert', 'Tim', 'Tom', 'Halshy', 'Jane'];

console.log(typeof user2); //object
console.log(typeof userList3); //object

console.log(Array.isArray(user2)); //false
console.log(Array.isArray(userList3)); //true => 이렇게 객체 배열과 일반 배열을 구분해 줌..

//======== arr.sort(fn) ========//
// 배열 재정렬, 배열 자체가 변경되니 주의
// 문자열로 취급하기 때문에 주의 요함
// 인수로 정렬 로직을 담은 함수를 받음
let arr11 = [1, 3, 4, -1, 5];
let arr12 = ['c', 2, 'Z', 'f', 'a'];
let arr13 = [27, 8, 5, 13];

arr11.sort();
arr12.sort();
arr13.sort();
console.log(arr11); // [-1, 1, 3, 4, 5]
console.log(arr12); // [2, 'Z', 'a', 'c', 'f']
console.log(arr13); // [13, 27, 5, 8] ==> 문자열로 취급하기 때문에 13의 첫글자 1, 27의 첫글자 2로 정렬된 거임

function fn(a, b) {
 console.log(a, b);
 return a - b;
}
arr13.sort(fn);
// arr13.sort((a, b) => {
//  return a - b;
// });
// [13, 27, 5, 8] => 두 개를 비교해 음수가 나오면 앞으로 보냄
// 27 13 => [13, 27, 5, 8]
// 5 27 => [13, 5, 27, 8]
// 5 13 => [5, 13, 27, 8]
// 8 13 => [5, 8, 13, 27]
// 8 5 => 변화 없음
console.log(arr13); //[5, 8, 13, 27]

// 보통은 이렇게 함수를 만들어 쓰지 않고..
// Lodash라는 라이브러리를 써서 사용함 _.sortBy(arr);로 쉽게 사용
// 숫자든 문자든 원하는 기준으로 정렬해 줌
// https://loadash.com/

//======== arr.reduce(fn) ========//
// 배열의 모든 수 합치기를 한 번에 해줄 수 있는 함수
// 인수로 함수를 받음
// (누적 계산값, 현재값) => return 계산값

// 배열의 모든 수 합치기 //for, for of, forEach
let arr14 = [1, 2, 3, 4, 5];

let result11 = 0;
arr14.forEach((num) => {
 // result11 = result11 + num;
 result11 += num;
});

console.log(result11); // 15

let result12 = arr14.reduce((prev, cur) => {
 console.log(prev, cur);
 return prev + cur;
}, 0); // 초기값은 0, 안쓰면 처음 값이 그대로, 초기값을 3을 더하면 최종값이 3이 더해져 18이 된다.
// 아래 예시처럼 [] 빈 배열을 초기값으로 쓸 수도 있다.

console.log(result12); // 15

// 성인만 뽑아서 새로운 배열을 만들어 봐라
let userList4 = [
 { name: 'Mike', age: '30' },
 { name: 'Jane', age: '10' },
 { name: 'Steve', age: '27' },
 { name: 'Tom', age: '26' },
 { name: 'Hanrry', age: '42' },
 { name: 'Sophie', age: '60' },
];

let result13 = userList4.reduce((prev, cur) => {
 if (cur.age > 19) {
  prev.push(cur.name);
 }
 return prev;
}, []);

let result14 = userList4.reduce((prev, cur) => {
 return (prev += Number(cur.age));
}, 0);

let rusult15 = userList4.reduce((prev, cur) => {
 if (cur.name.length === 4) {
  prev.push(cur.name);
 }
 return prev;
}, []);

console.log(result13); // ['Mike', 'Steve', 'Tom', 'Hanrry', 'Sophie']
console.log(result14); // 195
console.log(rusult15); // ['Mike', 'Jane']

//========  ========//
// reduceRight()에 대해 따로 알아보자
