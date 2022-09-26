'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  // カウントアップ
  function countUp() {
    console.log(Date.now() - startTime);

    // countUp()の処理を一定時間 (10ミリ秒後に)ごとに繰り返したい。
    setTimeout(() => {
      countUp();
    }, 10);
  }

  start.addEventListener('click', () => {
    startTime = Date.now();
    countUp();
  });
}