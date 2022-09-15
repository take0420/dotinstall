'use strict';

{
//新たに値を定義して配列に組み込む方法
  const otherScores = [10, 20];
  const scores = [80, 90, 40, 70, ...otherScores];
  console.log(scores);

//a , b のsum関数を定義 => どこの文字列に対して？
  function sum(a, b) {
    console.log(a + b);
  }
// 「...otherScores」に対して
  sum(...otherScores); // 10 + 20 = 30
}
