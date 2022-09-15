'use strict';

{ 
  const scores = [80, 90, 40, 70];    

  // const [a, b, c, d] = scores;
  // console.log(a);    
  // console.log(b);   
  // console.log(c);   
  // console.log(d);    

//配列にある先頭と２番目の要素を定数に入れ、残りは配列のまま表示
  // const [a, b, ...others] = scores;
  // console.log(a);    
  // console.log(b);    
  // console.log(others);

//値の交換
  let x = 30;
  let y = 70;
  [x, y] = [y, x];
  console.log(x);
  console.log(y);

}
