# portfolio
### 1차 시안 Demo 구현 및 페이지 생성 완료
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

