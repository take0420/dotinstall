'use strict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime;
  let timeoutId;
  let elapsedTime = 0; // タイマー停止からカウントを再開させる機能

  // カウントアップ
  function countUp() {
    // 経過時間で Date オブジェクトを作成。そのメソッドを使用する。
    const d = new Date(Date.now() - startTime + elapsedTime);
    // 値を２桁で表示してね。２桁に未満なら文字列の前を０で埋めてね。
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    // countUp()の処理を一定時間 (10ミリ秒後に)ごとに繰り返したい。
    timeoutId = setTimeout(() => {
      countUp();
    }, 10);
  }

  // スタートの状態で有効(disabled = false )なボタン
  function setButtonStateInitial() {
    start.disabled = false; // 有効
    stop.disabled = true; // 無効
    reset.disabled = true; // 無効

  }
  // カウントアップの状態で有効(disabled = false )なボタン
  function setButtonStateRunning() {
    start.disabled = true; // 無効
    stop.disabled = false; // 有効
    reset.disabled = true; // 無効

  }
  // ストップの状態で有効(disabled = false )なボタン
  function setButtonStateStopped()  {
    start.disabled = false; // 有効
    stop.disabled = true; // 無効
    reset.disabled = false; // 有効
  }

  setButtonStateInitial();

  start.addEventListener('click', () => {
    setButtonStateRunning();
    startTime = Date.now();
    countUp();
  });

  stop.addEventListener('click', () => {
    setButtonStateStopped();
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime; 
  });

  reset.addEventListener('click', () => {
    setButtonStateInitial();
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  });
}