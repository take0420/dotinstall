'use strict';
{
  let i = 0;

  function showTime() {
    console.log(new Date());
    // showTime が 3回実行された時、タイマーが停止
    i++;
    if (i > 2) {  
      clearInterval(intervalId);
    }
  }

  // 1000ミリ秒 = 1秒
  const intervalId = setInterval(showTime, 1000);

}