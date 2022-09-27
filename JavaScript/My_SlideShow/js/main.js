'use strict'

{
  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];
  let currentIndex = 0;

  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  images.forEach(image => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li);
  });
}


// メイン画像と同じように JavaScript でセット。

// images の配列の要素の数の分だけループを回したいので forEach() を使ってあげます。

// images のそれぞれの要素を image で取得してあげて、次の処理をしなさい。

// まずは img 要素を生成する必要があるので、 img という定数で document.createElement('img') としてあげましょう。

// その img の src 属性をこちらの image になるようにしてあげます。

// li の子要素として、こちらの img を追加していきたいので appendChild() を使ってあげます。

// 最後にこちらの thumbnails クラスがついた ul の子要素として li を追加してあげれば OK でしょう。

// これで images の配列の要素数分だけ追加される。














