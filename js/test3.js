window.onload = function() {
let myRect = document.querySelector('#rect');
myRect.addEventListener("mouseover", function() {
    myRect.style.backgroundColor = "green";
    myRect.style.borderRadius = "50%";
})
myRect.addEventListener("mouseout", function() {
    myRect.style.backgroundColor = "";
    myRect.style.borderRadius = "";
})
}

// mouseover - 마우스 커서 올려놓을 때 발생하는 이벤트
// mouseout - 마우스 커서 없앨 때 발생하는 이벤트
