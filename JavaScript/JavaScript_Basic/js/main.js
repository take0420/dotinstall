'use strict';
{
  console.log(Math.random());

  // 0, 1, 2
  // Math.floor(Math.random() * 3)
  // 0, ..., n
  // Math.floor(Math.random() * (n + 1))
  // min, ..., max 
  // Math.floor(Math.random() * (max + 1 - min)) + min

  // 1 から 6までのランダムな整数を生成。
  // 6 + 1 - 1
  console.log(Math.floor(Math.random() * 6) + 1)  


}