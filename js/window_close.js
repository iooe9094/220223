var newWindowObj;
let strWindowFeatures = "menubar=yes, location=yes, resizable=yes," // ` : 백틱
        "scrollbars=yes, status=yes";
function openWindow() {
    newWindowObj = window.open("https://www.naver.com", "naver사이트", strWindowFeatures);
}
function closeWindow() {
    newWindowObj.close();
}

// 전역객체는 window, location, history, screen 정도만 알기