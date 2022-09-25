'use strict';

// クリックによって、斜線の有無を切り替えられる。
{
  document.querySelector('ul').addEventListener('click', e => {
    if (e.target.nodeName === 'LI') {
      e.target.classList.toggle('done');
    }
  });
}