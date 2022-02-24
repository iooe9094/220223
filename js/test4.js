// 내가 한 풀이

// window.onload = function () {
//     let container = document.querySelector('#pic');
//     container.addEventListener("mouseover", function() {
//         container.src = "/02_Chapter/img2/easys-2.jpg"
//         // 내가 했던 것 : container.img.src -> #pic이 img 태그에서 들고왔으므로 바로 src 하면 됨
//     })
//     container.addEventListener("mouseout", function() {
//         container.src = "/02_Chapter/img2/easys-1.jpg"
//     })
// }

// 해설
window.onload = function() {
    let pic = document.querySelector("#pic");
    pic.addEventListener("mouseover", changePic)
    pic.addEventListener("mouseout", originPic)
    // mouseover, mouseout, click ...

    function changePic() {
        pic.src = "/02_Chapter/img2/easys-2.jpg"
    }
    function originPic() {
        pic.src = "/02_Chapter/img2/easys-1.jpg"
}
}