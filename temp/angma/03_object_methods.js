//Computed Property
let g = 'age';

const user = {
 name: 'Mike',
 //   age: 30,
 [g]: 30, //=> 이게 바로 computed property임
 //   [1 + 4]: 5,
 //   ["안녕" + "하세요"]: "Hello", // 식 자제를 넣을 수도 있다
};

// console.log(user);

//객체에서 사용 가능한 methods
//Object.assign() => 객체를 복제
const cloneUser = user; // 참조에 의한 복사일 뿐,같은 객체임

const newUser = Object.assign({}, user);
newUser.name = 'Tom';
// console.log(newUser); // newUser와 user는 다른 객체임

const newUser2 = Object.assign({ name: 'Chris', hobby: 'drawing' }, user); // 이름이 앞에 있어서 바뀐 값이 나오지 않는 거임
// console.log(newUser2);

const info = {
 favoriteColor: 'green',
 favoriteShrimp: 'goldenback',
};

const newUser3 = Object.assign(newUser2, info, { name: 'Bob' }); // 중복된 것은 뒤의 값이 오버라이팅 되니까 뒤에 써야 함
console.log(newUser3);

//Object.keys() => 오브젝트의 키들이 배열로 반환
//Object.values() => 오브젝트의 값을 배열로 반환
//Object.entries() => 오브젝트의 키와 값을 쌍으로 배열로 반환
//Object.fromEntries() => 키와 값 배열을 객체로 반환
console.log(Object.keys(newUser3));
console.log(Object.values(newUser3));
console.log(Object.entries(newUser3));

const newUser4 = Object.entries(newUser3);
console.log(newUser4);

const newUser5 = Object.fromEntries(newUser4);
console.log(newUser5);

//Examples
let n = 'name';
let a = 'age';

const member = {
 [n]: 'Denny',
 [a]: 30,
 [1 + 4]: 5,
};

console.log(member);

// 어떤 게 키가 될지 모를 때 유용함
function makeObj(key, val) {
 return {
  [key]: val,
 };
}

const obj = makeObj('성별', 'male');

console.log(obj);

// 배열을 오브젝트로 만드는 거 유용할 거 같음
let arr = [
 ['mon', '월'],
 ['tue', '화'],
];

const result = Object.fromEntries(arr);

console.log(result);
