//생성자 함수

//객체 리터럴
let user = {
  name: "Mike",
  age: 30,
};

//생성자 함수, 보통 첫글자는 대문자로 하는게 관례
function User(name, age) {
  // this = {}; 일단 빈 객체를 만들고, new연산자 동작방식 설명
  this.name = name;
  this.age = age;
  this.sayName = function () {
    console.log(this.name);
  };
  // return this;, 동작방식 설명, 생략임
}

// new 함수명(); 어떤 함수라도 new연산자를 쓰면 위의 알고리즘대로 동작
let user1 = new User("Mike", 30); // new연산자를 사용해서 호출
let user2 = new User("Jane", 22);

console.log(user1);
console.log(user2);

let user3 = new User("Han", 40);
user3.sayName();

// 상품 객체를 생성해보자.
function Item(title, price) {
  //this = {};
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`${title}의 가격은 ${price}원 입니다`);
  };
  //return this;
}

const item1 = new Item("인형", 3000);
const item2 = Item("가방", 20000);
// new를 붙이지 않으면 그냥 함수 자체를 실행하는 거라, 리턴 할 값이 없으니 undefined가 나옴
const item3 = new Item("헤어용품", 2000);

console.log(item1, item2, item3);

item3.showPrice();
