// let const => es6에서 생김, var처럼 호이스팅 되지 않는다.
// 사실 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
// let과 const는 'Temporal Dead Zone' 영역에 있는 것은 할당하기 전에 사용할 수 없음
// var는 선언은 호이스팅 되지만 할당은 호이스팅 되지 않기 때문에 오류는 안 나도 제대로 동작하지 않을 수 있다.
// 호이스팅은 스코프 단위로 일어남!!!

let age = 30;
function showAge() {
  console.log(age); // 30이 리턴

  //   let age = 20; // 이건 이 스코프 내 Temproal Dead Zone에 영향을 받는다. 위의 age는 글로벌 age를 받았고, 따라서 let이 오류를 일으킨다 스코프 내 호이스팅이 되기때문에 오류가 나는 거임.
}

showAge();

function showAge2() {
  let age = 20; // 오류가 나지 않는다.
  console.log(age);
}

showAge2();

// 변수의 생성과정  1. 선언 단계 2. 초기화 단계 3. 할당 단계
// var는 1, 2가 동시에 된다 // let은 순서대로 구분되어 진행된다. // const는 1, 2, 3이 동시에 된다
// var는 함수 스코프이고 // let, const는 블록 스코프이다. 즉 지역변수.. 블록은 함수,if문,for문, while문, try/catch문 등..
// var는 if문 밖에서 접근 가능하고.. let과 const는 중괄호(블록) 내부에서만 사용 가능
// var도 함수 function에서는 밖에서 접근 안 됨

let name;
name = "Mike";

var kage;
age = 30;

// const gender; // 이렇게 쓰면 오류 남, const는 선언과 초기화 할당 같이 일어나기에 할당값이 없으면 오류 남
// gender = 'male';

const gender = "male";
