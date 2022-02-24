// 도전과제 1
// 영어 소문자로 구성된 단어 s1, s2, s3가 있을 때,
// s1의 마지막 문자가 s2의 첫 글자와 같고,
// s2의 마지막 글자가 s3의 첫 글자와 같고,
// s3의 마지막 글자가 s1의 첫 글자와 같으면 순환 문자열이라 한다.
// 순환문자열이면 good, 아니면 bad를 출력해라.
// hint : 문자열 배열에 내용을 각각 비교.
// 예시 : turtle, error, robot -> 출력 good

// 내가 한 풀이

// window.onload = function() {
//     let num1 = prompt("첫번 째 문자를 입력하세요");
//     let num2 = prompt("두번 째 문자를 입력하세요");
//     let num3 = prompt("세번 째 문자를 입력하세요");

//     if (num1.lastIndexOf() == num2.indexOf() &&
//         num2.lastIndexOf() == num3.indexOf() &&
//         num3.lastIndexOf() == num1.indexOf()) 
//         {
//             alert("good");
//         }
//         else {
//             alert("bad");
//         }
//     }

// 해설

let word = prompt("문자를 입력하세요").split(" ");
let fWord = word[0]; // turtle
let sWord = word[1]; // error
let tWord = word[2]; // robot

if (fWord[fWord.length-1] == sWord[0] &&  // 길이에 -1을 해주면 배열의 끝을 알 수 있음.
    sWord[sWord.length-1] == tWord[0] &&
    tWord[tWord.length-1] == fWord[0]) {
        alert("good");
    }
    else {
        alert("bad");
    }

    
