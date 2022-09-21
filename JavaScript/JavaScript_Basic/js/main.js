'use strict';

{
  document.querySelector('button').addEventListener('click', () => {
    const li = document.createElement('li');
    // 色を選んでボタンを押したら下のリストに追加される機能。
    const color = document.querySelector('select');
    // li.textContentに値をセット。
    // select の場合、value プロパティで選択された値と、
    // selectedIndex プロパティで選択された値が何番目であったかを取得できる。
    li.textContent = `${color.value} - ${color.selectedIndex}`;
    // リストに追加。querySelector で ul を取得し、子要素の末尾に li を追加 
    // => appendChild()を使う。
    document.querySelector('ul').appendChild(li);
    
  });
}

