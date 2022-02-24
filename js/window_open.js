// # <script>
// #     let newWindowObj;
// #         function openWindow() {
// #             let strWindowFeatures = "menubar = yes,location = yes,resizable = yes,"
// #             "scrollbars = yes, status = yes" // 메뉴바, 주소창, 크기조절 손잡이, 스크롤바, 상태바 등
// #         // 변수 strWindowFeatures를 통해 새롭게 여는 웹 브라우저 창 옵션 일일이 설정 가능
// #             newWindowObj = window.open("https://www.naver.com", "Naver", strWindowFeatures);
// #         }
// # </script>

        let newWindowObj;
    // let flag = "yes"; 라 하면, 하단의 menubar=yes -> menubar=${flag}로 대체 가능
    // let num1 = 1; let num2 = 2; -> 하단에 ${num1*num2}등과 같이 연산도 가능
        function openWindow() {
            let strWindowFeatures = `menubar = yes,location = yes,resizable = yes,` // ` : 백틱
            `scrollbars = yes, status = yes` // 메뉴바, 주소창, 크기조절 손잡이, 스크롤바, 상태바 등
        // 변수 strWindowFeatures를 통해 새롭게 여는 웹 브라우저 창 옵션 일일이 설정 가능
            newWindowObj = window.open("https://www.naver.com", "Naver사이트", strWindowFeatures);
        }