window.onload = function() {
let closeBtn = document.querySelector(".popup > button");
// .popup > button 은 팝업 클래스 밑의 버튼을 지정하겠다는 의미. 특수선택자
closeBtn.addEventListener('click', function() {
    document.querySelector('.popup').style.display = 'none';
})
}
// addEventListener 은 이벤트가 무엇이 일어나는지 (값)을 감시하고 ()에 값을 실행함.
// 즉, click을 감시하다가 click이 일어나면 뒤의 함수를 실행시킴.