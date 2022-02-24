function startTimeout() {
    setTimeout(printCurrentDate, 2000); // 뒤의 숫자는 밀리세컨드를 의미함
}
function printCurrentDate() {
    document.getElementById("date").innerHTML = new Date();
}