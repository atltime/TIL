//======== ', ", ` ========//
// ``은 여러줄 표현 가능
// ''는 \n을 써야하고 줄바꿈하면 에러 남

//======== length ========//
// 문자열도 길이를 체크할 수 있음
// 배열과 마찬가지로 특정 위치에 접근할 수 있음
// 하지만, 배열과 다르게 한 글자만 바꿀 수 없음, 변화 없음
let desc = '안녕하세요.';

console.log(desc.length);
console.log(desc[3]);

desc[4] = '용';
console.log(desc[4]); // '요'를 '용'으로 바꿔보려 했지만, 소용 없음을 확인할 수 있다.

//======== toUpperCase() / toLowerCase() ========//
// 영어의 경우 대문자 소문자로 바꿀 수 있음

let desc2 = 'Hi guys. Nice to meet you.'; // 영어는 줄임말때문에 큰 따옴표가 좋음

console.log(desc2.toUpperCase()); // "HI GUYS. NICE TO MEET YOU."
console.log(desc2.toLowerCase()); // "hi guys. nice to meet you."

//======== str.indexOf(text) ========//
//문자를 인수로 받아 몇번째 위치인지 알려줌,
//찾는 문자가 없으면 -1 반환,
//찾는 문자가 여러 개이면 첫번째 것만 반환
let desc3 = 'prettier는 따옴표 맘대로 바꿔서 별로구나.';

desc3.indexOf('별로'); //22
desc3.indexOf('천사'); // -1

if (desc3.indexOf('prettier') > -1) {
 // prettier의 index는 0이다 false이기때문, 그래서 > -1이 들어가야 한다.
 console.log("'prettier'가 포함된 문장입니다.");
}

//======== str.slice(n, m) ========//
//특정 범위의 문자열만 뽑는다, n부터 m까지이고,
//m을 적지 않으면 문자열 끝까지, 양수면 그 숫자까지(포함하지 않음), 음수면 끝에서부터 셈
let desc4 = 'abcdefg';

desc4.slice(0, 2); // 'ab'
desc4.slice(1, -1); //'bcdef'

//======== str.substring(n, m) ========//
//n과 m 사이 문자열 반환, slice()와 비슷하지만 n과 m을 바꿔도 동작함,
//음수는 0으로 인식, // n과 m사이라고 생각하면 편함
let desc5 = '가나다라마바사';

desc5.substring(1, 5); //'나다라마'
desc5.substring(5, 1); //'나다라마'

//======== str.substr(n, m) ========//
//substring과 비슷하지만 동작 방식이 다름
//n부터 시작, m개를 가져옴ㅎㅎ
let desc6 = '가나다라마바사';

desc6.substr(0, 3); //'가나다'
desc6.substr(-1, 3); // '사'
desc6.substr(-5, 3); // '다라마'

//======== str.trim() ========//
//앞 뒤 공백 제거
let desc7 = '   저절로 살이 빠지면    좋겠다.  ';

desc7.trim(); // '저절로 살이 빠지면    좋겠다.' //사이 공백은 그대로 앞 뒤 공백만 제거

//======== str.repeat(n) ========//
//n번 반복해 줌
let desc8 = '대박';

desc8.repeat(3); //'대박대박대박'

//======== 문자열 비교 ========//
// 아스키코드표를 보면 가능함을 알 수 있다.
// codePointAt()과 fromCodePoint()으로 문자열을 숫자로 숫자를 문자열로 바꿀 수 있다.
// 알파벳은 a 보다 z가 크다, 그리고 대문자보다 소문자가 크다 정도만 알고 있음 됨
1 < 3; // true
'a' < 'c'; // true

'a'.codePointAt(0); // 97
String.fromCodePoint(97); //'a'

//======== 퀴즈1 ========//
// 아래 리스트에서 숫자만 제거해 보셈
let list = ['01. 들어가며', '02. JS의 역사', '03. 자료실', '04. 함수', '05. 배열'];

let newList = [];

for (let i = 0; i < list.length; i++) {
 newList.push(list[i].slice(4));
}

console.log(newList);

//======== 퀴즈2 ========//
//금칙어: 콜라

function hasCola(str) {
 if (str.indexOf('콜라') > -1) {
  console.log(`입력하신 "${str}"에 금칙어가 있습니다.`);
 } else {
  console.log(`통과: ${str}`);
 }
}

hasCola('이건 indexOf로 하는 건데...사이다가 더 좋지 않니?'); // -1 if(-1)은 트루임, 그래서 -1보다 큰지 체크해야 함
hasCola('무슨소리, 콜라가 짱이야'); // 6
hasCola('콜라'); // 0

//======== 퀴즈2-1 ========//
// includes 활용 => 문자가 있으면  true, 없으면 false를 반환
function hasCydar(str) {
 if (str.includes('사이다')) {
  console.log(`입력하신 "${str}"에 금칙어가 있습니다.`);
 } else {
  console.log(`통과: ${str}`);
 }
}

hasCydar('이건 includes로 더 쉽게 판단할 수 있지');
hasCydar('고구마 먹고 싶다~');
hasCydar('사이다는 고구마 먹을 때 창 좋아');

//========  ========//
//
