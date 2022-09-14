'use strict';

{
  const scores = [80, 90, 40, 70];

  scores.push(60, 50)  // 要素の末尾に新要素を追加
  scores.shift();  //要素の 0 番目を削除
    

for (let i = 0; i < scores.length; i++) {
  console.log(`Score: ${i} ${scores[i]}` );
}

}
