'use strict';

{
  // let x = 1;
  // let y = x;
  // x = 5;
  // console.log(x); // 5 
  // console.log(y); // 1

  // let x = [1, 2];
  // let y = x;
  // x[0] = 5;
  // console.log(x); // [5, 2] 
  // console.log(y); // [1, 2] ではなく [5, 2] になってしまう。 
  // 理由;複雑なデータによってシステムに負荷がかからないよう簡略化して制御しているから。

  // では配列やオブジェクトの値を丸ごとコピーしたい場合はどうすればよいのか？
  let x = [1, 2];
  let y = [...x];
  x[0] = 5;
  console.log(x); // [5, 2] 
  console.log(y); // [1, 2] 

}