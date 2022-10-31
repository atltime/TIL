let students = ["철수", "영희", "정재"];
console.log(students[0]);
console.log(students.legnth); // 요소의 개수 반환

students.push("효섭");
console.log(students);

students.push("보검", "공유");
console.log(students);

students.pop();
console.log(students);

let days = ["월", "화", "수"];

days.unshift("일");
console.log(days);

days.shift("일");
console.log(days);

days.push("목", "금", "토");
days.unshift("일");
console.log(days);

for (let idx = 0; idx < days.length; idx++) {
  console.log(days[idx]);
}

for (let day of days) {
  // for of 씀, for in 쓸 수 있지만 단점이 많다. index를 못 얻는다는 단점
  console.log("for of: " + day);
}

//배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
let arr = [
  "민수",
  3,
  false,
  {
    name: "Mike",
    age: 30,
  },
  function () {
    console.log("Test");
  },
];
