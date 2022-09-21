'use strict';

{ 
  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');
    
    // targetNode.className = 'my-color my-border'; 

  // 既存のクラスの設定に my-color を新たに追加。my-border を書く必要はない。
    // targetNode.classList.add('my-color');

// contains => クラスが付いているかどうか、true, false で返してくれる。
// my-color が付いていたら外す classList.remove() 処理。
    // if (targetNode.classList.contains('my-color') === true) {
    //   targetNode.classList.remove('my-color');
    // } else {
    //   targetNode.classList.add('my-color');
    // }

    //省略Ver.
    targetNode.classList.toggle('my-color');
    
  }); 
}