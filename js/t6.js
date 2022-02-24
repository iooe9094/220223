// 연습문제 5
// 알파벳 한 단어가 입력된다.
// 대문자 IOI가 입력되면, IOI is International Olympiad
// 그 외에는 I dont care. 를 출력하세요
// 입력예시 IOI , 출력예시 IOI is International Olympiad

window.onload = function() {
    let num = prompt("문자를 입력하세요").split(" ");
    if ( num == "IOI") {
        document.write("IOI is International Olympiad.");
    }
    else {
        document.write("I dont care.")
    }
}