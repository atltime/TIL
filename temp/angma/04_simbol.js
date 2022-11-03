//Property key:문자형
const obj = {
 1: '1입니다',
 false: '거짓',
};

console.log(Object.keys(obj));
console.log(obj[1]);
console.log(obj[false]);
console.log(obj['1']);
console.log(obj['false']); // 문자형으로도 접근이 가능했음

// property key:심볼형
// Symbol :: new를 붙이지 않음
// 심볼은 유일한 식별자를 만들 때 사용한다.
const a = Symbol();
const b = Symbol();
console.log(a); // Symbol()
console.log(b); // Symbol()
// 둘 다 똑같이 생겼지만 유일한 식별자로 다르게 인식
// 그래서
console.log(a === b); //일치연산자는 당연히 false임
console.log(a == b); //동등연산자도 false임

// 유일성 보장, 전체 코드 중 딱 하나라는 뜻
// Property key:심볼형
const id = Symbol('id'); // 이렇게 이름을 붙일 수 있고, 디버깅할 때 편함
const id2 = Symbol('id'); // 이름이 같아도 다 다른 존재
console.log(`id == id2는 ${id == id2}`);
const user = {
 name: 'Mike',
 age: 30,
 [id]: 'myId',
};

console.log(`user[id]는 ${user[id]}`);
console.log(`Object.keys(user)는 ${Object.keys(user)}`); //['name', 'age']
// key가 심볼인건 건너 뛴다

// Symbol.for() : 전역 심볼
// - 하나의 심볼만 보장받을 수 있다
// - 없으면 만들고, 있으면 가져오기 때문
// - Symbol 함수는 매번 다른 Symbol 값을 생성하지만,
// - Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
const newid = Symbol.for('id');
const newid2 = Symbol.for('id');

console.log(`newid == newid2는 ${newid == newid2}`); // true
console.log(`newid === newid2 역시 ${newid === newid2}\n왜냐면 Symbol.for 메서드를 사용해 동일한 심볼을 공유하기 때문`); // true

//전역심볼의 이름을 알고 싶을 때 Symbol.keyFor()
console.log(`심볼의 이름을 얻고자 한다면 Symbol.keyFor(newid)를 이용해 출력\n${Symbol.keyFor(newid)}`);

//지역심볼의 이름을 알고 싶을 때 변수.description;
const id3 = Symbol('id입니다.');
console.log(`id3.description;을 입력하면 지역심볼의 이름을 알 수 있다.\n${id3.description}`);

// 심볼을 완전히 숨길 수는 없음, 숨겨진 심볼 키 보는 법
//Object.getOwnPropertySymbols()
//Reflect.ownKeys()
const id4 = Symbol('id');
const user4 = {
 name: 'Peter',
 age: 22,
 [id4]: 'PeterId',
};

// 심볼로 기존 작업에 추가하고 싶을 때 이렇게 쓰면 됨
//user4.showName = function () {}; //==> 이건 for in으로 출력이 되지만
const showName = Symbol('show name'); // => 이건 심볼이라 건너 뛴다..
user4[showName] = function () {
 console.log(this.name);
};

user4[showName](); // 이렇게 쓰면 다른 사람이 작업한 결과물에 영향도 주지 않고, 메서드나 프로퍼티가 중복되는 지를 걱정할 필요도 없다

console.log(user4); //{name: 'Peter', age: 22, Symbol(id): 'PeterId'}
console.log(Object.keys(user4)); //['name', 'age']

console.log(Object.getOwnPropertySymbols(user4)); //[Symbol(id)]
console.log(Reflect.ownKeys(user4)); //['name', 'age', Symbol(id)]

for (let key in user4) {
 console.log(`His ${key} is ${user4[key]}.`);
}
