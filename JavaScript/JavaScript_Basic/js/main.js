'use strict';
{
  //数値の合計と平均を求めたい
  const scores = [10, 3, 9];

  let sum = 0

  scores.forEach(score => {
    sum += score;
  });

  const avg = sum / scores.length;

  // console.log(sum); // 22
  // console.log(avg); // 7.33333...

  console.log(Math.floor(avg)); // 7 繰下げ
  console.log(Math.ceil(avg)); // 8 繰上げ
  console.log(Math.round(avg)); // 7 四捨五入
  console.log(avg.toFixed(3)); // 7.333 小数点 3 桁まで表示

  //乱数を生成 => ゲームによく使われる
  // 0 以上 1 未満のランダムな数を表示
  console.log(Math.random());
}