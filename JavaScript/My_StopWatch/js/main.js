'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  // カウントアップ
  function countUp() {
    // 経過時間で Date オブジェクトを作成。そのメソッドを使用する。
    const d = new Date(Date.now() - startTime);
    // 値を２桁で表示してね。２桁に未満なら文字列の前を０で埋めてね。
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

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