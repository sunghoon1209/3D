let circle = document.querySelector("#circle");
let article = circle.querySelectorAll("article");

for (let el of article) {
    // of는 자바스크립트에서 사용되는 반복문 
    // (유사객체를 반복하여 가져옴)
    // el은, article 에 진입했을때 이벤트 실행 리스너 정의
    el.addEventListener("mouseenter", e => {

        // e는, 이벤트를 의미함 실행됨
        //  .animationPlayState = "paused" - 일시중지를 의미함
        circle.style.animationPlayState = "paused";
        // paused 반대 running
    });
    el.addEventListener("mouseleave", e => {

        // e는, 이벤트를 의미함 실행됨
        //  .animationPlayState = "paused" - 일시중지를 의미함
        circle.style.animationPlayState = "running";
    });
}




/* circle변수저장, article 변수저장 
각 요소에 반복문 실행
article에 마우스 올라가면 애니메이션 중지 
벗어나면, 다시 실행 */