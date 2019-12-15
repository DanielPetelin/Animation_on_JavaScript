train.onclick = function() {
    var start = Date.now(); // сохранить время начала

    var timer = setInterval(function() {
      // вычислить сколько времени прошло из opts.duration
      var timePassed = Date.now() - start;

      train.style.left = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 20);
  }