'use strict';

// 配列の全ての要素に対して何らかの処理を行う方法
{
  const scores = [80, 90, 40, 70, 100];

// 要素を個々に取得
  // console.log(`Score: ${scores[0]}` );
  // console.log(`Score: ${scores[1]}` );
  // console.log(`Score: ${scores[2]}` );

// 要素の数が多くなっても使える方法
// 0 から 3 未満を 1 ずつ増やしながら処理 ※ i = index
  for (let i = 0; i < 3; i++) {
  console.log(`Score: ${scores[i]}` );
}

for (let i = 0; i < scores.length; i++) {
  console.log(`Score: ${scores[i]}` );
}

}
