'use stirct';

// ページの途中で広告(Ad)を挿入したい。
// Adを1つ直すと全て直す必要があることに...
// function showAd() {---}で定義すると、定義したものだけを直せば、他の処理も同時に変更されて便利。

function showAd(message = 'Ad') { //仮引数
  console.log('----------')
  console.log(`---${message}---`)
  console.log('----------')
}

showAd('Header Ad'); //実引数
console.log('Tom is great!')
console.log('Tom is great!')

// showAd('Ad');
showAd();
console.log('Tom is great!')
console.log('Tom is great!')

showAd('Footer Ad');
console.log('Tom is great!')
console.log('Tom is great!')
