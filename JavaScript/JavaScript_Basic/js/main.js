'use strict';

{
  document.querySelector('button').addEventListener('dblclick', () => {
    console.log('Double Clicked!');
  });

  // document.addEventListener('mousemove', e => {
  //   // console.log('moved!');
  //   console.log(e.clientX, e.clientY);

// 適切に動いているかの確認方法 => 文書内をクリックして任意の文字を入力するとコンソールに反映される。
  document.addEventListener('keydown', e => {
    console.log(e.key);

  });
}