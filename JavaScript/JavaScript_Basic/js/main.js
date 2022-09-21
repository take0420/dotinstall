'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const item0 = document.querySelectorAll('li')[0];
    // item0 のコピーを作る。
    const copy = item0.cloneNode(true); // item2 の前に挿入したい。

    // 新要素
    const ul = document.querySelector('ul');
    const item2 = document.querySelectorAll('li')[2];
    // copy を item2 の前に挿入してね。
    ul.insertBefore(copy, item2);
  });
}