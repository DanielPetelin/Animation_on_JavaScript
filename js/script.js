function f1() {
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function() {
      // вычислить сколько времени прошло из opts.duration
      var timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';

      if (timePassed > 8600) clearInterval(timer);

    }, 20);
  }

//Просто кликните по поровозу.
//Я отрифокторил этот проэкт. Спасибо за исходники https://learn.javascript.ru/