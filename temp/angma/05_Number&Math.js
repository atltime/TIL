//10진수 -> 2진수 / 16진수
let num = 10;

num.toString(); //'10'
num.toString(2); // '1010' 10을 2진수로 나타낸 것

let num2 = 255;

num2.toString(16); //'ff' 색상코드에서 많이 보던 거

//========== 수학관련 자바스크립트 내장 객체 ==========//
Math.PI; // 3.141592~ 원주율

//숫자 소숫점 무조건 올림
Math.ceil();

let num3 = 5.1;
let num4 = 5.7;

Math.ceil(num3); // 6
Math.ceil(num4); // 6

//숫자 소숫점 무조건 버림
Math.floor();

Math.floor(num3); // 5
Math.floor(num4); // 5

//숫자 소숫점 반올림
Math.round();

Math.round(num3); // 5
Math.round(num4); // 6

//소수점 자릿수 표현 방법
let userRate = 30.1234;
//요구사항:소수점 둘째자리까지 표현(셋째자리에서 반올림)

userRate = Math.round(userRate * 100); // 3012.34
userRate = userRate / 100; //30.12

//toFixed(); 숫자를 인자로 받아 그 숫자만큼 소숫점 이하 갯수에 반영한다.
// 주의할점!!!!!! 문자로 반환한다는 거. 그래서 Number()로 숫자로 변환해야 함
let userRate2 = 30.1234;
//요구사항:소수점 둘째자리까지 표현(셋째자리에서 반올림)

userRate2.toFixed(2); // '30.12'
userRate2.toFixed(0); // '30' 당연히 소숫점 이하니까 없애줌
userRate2.toFixed(6); // '30.123400' 숫자의 소숫점자리보다 크면 나머지는 0으로 채움

Number(userRate2.toFixed(2)); // 30.12 => 이렇게 써야 숫자형임

//isNaN(); NaN인지 아닌지 판단하는 함수
let x = Number('x'); //NaN

x == NaN; // false
x === NaN; // false
NaN === NaN; // false 자기 자신도 같지 않다고 판단함, isNaN만이 판단 가능해서..

isNaN(x); // true
isNaN(3); // false

//PaseInt() 문자열을 숫자로 바꿔줌, 문자가 혼용되어 있어도 동작함(단, 숫자가 아닌 글자가 먼저면 NaN이 반환됨), 정수만 반환
let margin = '10px';

parseInt(margin); //10
Number(margin); // NaN

let redcolor = 'f3';
parseInt(redcolor); //NaN
parseInt(redcolor, 16); //243 ==> 16이란 인수를 넣어서 16진수로 바꿀 수 있음

parseInt('11', 2); // 3 => 11을 숫자로 바꿔서 2진수로 표현?

//ParseFloat()은 ParseInt()과 같지만 부동 소숫점을 반환한다.
let padding = '18.5%';

parseInt(padding); // 18
parseFloat(padding); //18.5

//======= Math.random() ========//
//0 ~1 사이 무작위 숫자 생성
//1~100 사이 임의의 숫자를 뽑고 싶다면?

Math.floor(Math.random() * 100) + 1; // * 100이면 100개이고.. 0이 나올 수 있어서 + 1 해준 거임..

//======= Math.max() / Math.min() ========//
//입력한 인수들 중 최대값, 최소값 구할 수 있음
Math.max(1, 4, -1, 5, 10, 9, 5.54); // 10
Math.min(1, 4, -1, 5, 10, 9, 5.54); // -1

//======= Math.abs() ========//
//absoulte의 약자, 절대값을 구해 줌
Math.abs(-1); //1

//======= Math.pow(n,m) ========//
//n의 m승, 즉 제곱값을 구해줌, power의 약자
Math.pow(2, 10); //2의 10제곱 , 1024

//======= Math.sqrt() ========//
//제곱근을 구해줌 square root의 약자
Math.sqrt(16); //4
