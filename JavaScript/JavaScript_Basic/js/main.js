'use strict';

{ 
  function update() {
    // document.getElementById('target').textContent = 'Changed!';    
  // querySelector は先頭の文字にしか効果がない。
    // document.querySelector('p').textContent = 'Changed!';
  // よって、querySelectorAll とする必要あり。
    // document.querySelectorAll('p')[1].textContent = 'Changed!';
  // 全ての要素を処理したい時は、forEach() で対応。
    document.querySelectorAll('p').forEach((p, index) => {
      p.textContent = `${index}番目のpです！`;
    });
    
  }

  setTimeout(update, 1000)
}