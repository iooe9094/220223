// 연습문제 4
// 어떤 문자열이 있을 때 문자 t의 위치를 모두 찾아 출력하세요.
// 입력 : 공백이 없는 문자열이 한 줄 입력된다 (10글자 이하)
// hint : indexOf, lastIndexOf 사용 추천
// 입력예시 : test , 출력예시 : 1 4

// 내가 한 풀이 -> for문 굳이 돌릴 필요 없이 함수 사용.

// window.onload = function () {
//     let num = prompt("문자를 입력하세요").split(" ");
//     result1 = 0;
//     result2 = 0;

//     for(let i=0; i<=num.length; i++) {
//         if (num.indexOf[i] == "t") {
//             result1 += i;
//         }
//         if (num.lastIndexOf[i] == "t") {
//             result2 += i;
//         }
//     }
//     document.write(result1 + " " + result2);
// }

// 내가 한 풀이 2 = 해설 (동일)

window.onload = function() {
let num = prompt("문자를 입력하세요");
let result1 = num.indexOf('t'); // 여기에 +1 (index는 0부터 시작이므로)
let result2 = num.lastIndexOf('t'); // 마찬가지로 여기에 +1 해도 된다.
document.write((result1+=1) + " " + (result2+=1));
}


