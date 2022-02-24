// 아스키 코드
// 한 문자 => 아스키코드 : 인코더
// 예시 : let word = "abc";
//       let letterCode = word.charCodeAt(0);
// 아스키코드 => 한 문자 : String.fromCharCode(문자) : 디코더
// 문제로 나온다고 함. 우리 테스트를 말하는건가...?

// 도전과제 : 인터넷 서비스들은 대부분 아이디와 패스워드를 이용한다.
// 이때, 사용되는 패스워드는 여러가지 방법으로 암호화되어 저장된다.
// 1번 암호화방법 : 입력받은 문자의 아스키코드값 + 2
// 2번 암호화방법 : 입력받은 문자의 (아스키코드값*7)%80 + 48
// 1,2번 암호화 방법을 적용하여 화면에 출력하세요.
// 입력예시 : TEST / 출력예시 : VGUV / L3EL

// window.onload = function() {
//     let num = prompt("암호를 입력하세요").split(" ");
//     let result = " ";

//     for(let i=0;i<=num.length; i++) {
//         document.write('num.charCode(i) :' + num.charCodeAt(i) + "<br>"); 
//     }
// }

// 내가 한 풀이

// window.onload = function () {
//     let test = prompt("문자를 입력하세요");
//     let result = " ";

//     for(let i=0; i<=test.length; i++) {
//         result = test.charCodeAt(i);
//     }
//     document.write(result);
//     document.write(test[0] + " : " + test.charCodeAt(0) + "<br>");
//     document.write(test[1] + " : " + test.charCodeAt(1) + "<br>");
//     document.write(test[2] + " : " + test.charCodeAt(2) + "<br>");
//     document.write(test[3] + " : " + test.charCodeAt(3));

//     let firstP = result(i) + 2;
//     let SecondP = ((result(i)*7)%80) + 48;
// }

// 해설
//     window.onload = function() {
//     let word = prompt("문자열을 입력하세요");

//     let result = " ";
//     let result2 = " ";
//     let letter = " ";

//     for(let i=0; i<word.length; i++) { // 첫번 째 암호화 코드 출력
//         letter = word.charCodeAt(i); // charCodeAt
//         result = letter + 2; // 아스키코드 변환됨
//         document.querySelector('#result1').innerHTML += String.fromCharCode(result); // String , fromCharCode
//         // letter + 2 에서 T를 기준으로 보면 ABCD....'T'UV... 이므로 뒤로 2번째 자리인 'V'가 온다.

//         result2 = (letter*7)%80 + 48;
//         document.querySelector('#result2').innerHTML += String.fromCharCode(result2);
//     }
// }

    // charCodeAt = 문자열을 아스키 코드로 변환
    // fromCharCode = 아스키 코드를 문자열로 변환
    // PPT p.180 String() = 전달받은 객체의 값을 문자열로 반환

// 연습문제6. 두 값을 입력 받아 그 사이에 있는 문자를 출력하세요.
// 입력: af / 출력: abcdef

// window.onload = function() {
//     let num = prompt("문자를 입력하세요").split(" ");
//     let first = num[0].charCodeAt(0); // a -> 97
//     let second = num[1].charCodeAt(0); // f ->102

//     for(let i=first; i<=second; i++) {
//         document.querySelector('#result1').innerHTML += String.fromCharCode(i);
//     }
// }

// 연습문제6. 배열안에 문자를 정렬해서 출력해 주세요.
// 입력: 5 8 2 / 출력: 2 5 8
// 힌트: sort() - 오름차순 / reverse() - 단순히 배열 뒤집는 것.


let arr = [5, 8, 2];
result1 = arr.sort(); // 2, 5, 8

document.write(result1);
    