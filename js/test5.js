window.onload = function() {
    let newText = document.querySelector("#myText");
    newText.addEventListener("click", function() {
        newText.style.color = "blue";
        newText.style.backgroundColor = "#ccc";
        newText.style.fontSize = "2opx";
    })
    newText.addEventListener("mouseout", function() {
        newText.style.color = "";
        newText.style.backgroundColor = "";
        newText.style.fontSize = "";
    })
}