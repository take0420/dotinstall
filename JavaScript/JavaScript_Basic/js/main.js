'use strict';

{ 
  // DOM は document という特殊なオブジェクトで扱うことができる。
  // また、文書内から特定の要素を取得するには、 querySelector() というメソッドが有効。
  function update() {
    // document.querySelector('h1').textContent = 'Changed!';
    // document.querySelector('#target').textContent = 'Changed!';
    document.getElementById('target').textContent = 'Changed!';
  }
  // リロードした 1 秒後に変化。
  setTimeout(update, 1000)
}