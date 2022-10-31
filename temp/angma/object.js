const superman = {
  name: "Clark",
  age: 30,
};

superman.gender = "male";
superman["hairColor"] = "black";
superman["hobby"] = "soccker";

delete superman.hairColor;

const name = "Superman2";
const age = 53;

const superman2 = {
  name,
  age,
  gender: "male",
};

console.log("superman2의 나이는 : " + superman2.age);
console.log(superman.birthDay); // undefined를 반환한다.

// 프로퍼티 존재 확인
"birthDay" in superman; // false
"age" in superman; // true

for (let key in superman) {
  console.log(key);
  console.log(superman[key]);
}

function makeObject(name, age) {
  return {
    name,
    age,
    hobby: "football",
  };
}

const Mike = makeObject("Mike", 30);
console.log(Mike);
console.log("age" in Mike);
console.log("birthday" in Mike);

function isAdult(user) {
  if (!("age" in user) || user.age < 20) {
    return false;
  }
  return true;
}

const Haesoo = {
  name: "Haesoo",
  age: 40,
};

const Jane = {
  name: "Jane",
  age: 18,
};

console.log(isAdult(Haesoo));
console.log(isAdult(Jane)); //!("age" in user)로 키가 없을 때에도 false 나오게 해야 함, 안그러면 true 반환 됨

for (x in Mike) {
  console.log(Mike[x]);
}

// 객체 프로퍼티로 할당 된 함수를 method라고 한다
const superman3 = {
  name: "Clark Big",
  age: 34,
  fly: function () {
    console.log("3가 날아갑니다.");
  },
};

superman3.fly();

const superman4 = {
  name: "Clark Big",
  age: 34,
  fly() {
    console.log("4가 날아갑니다.");
  },
};

console.log(superman4.fly());

let boy = {
  name: "Brad",
  sayHello: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

boy.sayHello();

let man = boy;
man.name = "Tom";
console.log(boy.name);
man.sayHello();

boy = null;
man.sayHello();
console.log(boy);
console.log(man);

let girl = {
  name: "Sophia",
  sayThis: function () {
    // sayThis : () =>// 객체에 메소드를 작성할 때는 화살표 함수로 작성하지 않는 게 좋다. 오류 발생
    console.log(this); // 화살표 함수로 하면 this는 window가 되버린다,
  },
};

girl.sayThis();
