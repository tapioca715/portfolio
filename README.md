# portfolio
### 1차 시안 Demo 구현 및 페이지 생성 완료
> 2022.08.29 ver
### 이후 예정
- 팀 프로젝트를 포함하여 총 4개의 제작 페이지 수록 예정
- About 페이지에 자기소개서 및 경력 기술서 바로가기 링크 추가 예정
- element.scrollIntoView() API를 이용한 페이지 구성으로
  mobile ~ responsive web까지 스크롤로 감상 가능
  
### 대표 썸네일 (title page) 
<img width="956" alt="image" src="https://user-images.githubusercontent.com/106294039/187143942-11c38874-9b8f-4c96-8428-6d03805b309e.png">
### title page (플러그인 사용)


    >$(function () {
    var h1 = document.querySelector('.type');
    var text = h1.getAttribute('data-text');
    var text_array = text.split('.')
    console.log(text, text_array);
    var agent = navigator.userAgent.toLowerCase();
    
    if ((navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
      h2.innerHTML = text[0] + '<br>' + text[1];
    } else {
      var el = '.type';
      typeIt = new TypeIt(el, {
        loop: true
      });
      typeIt
        .type(text_array[0])
        .pause(300)
        .break()
        .type(text_array[1])
        .pause(5000)
        .go();
    }
  });

