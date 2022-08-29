$(function () {
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