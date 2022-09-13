'use stirct';

// キャラクターのHPが100あるうちは15ずつダメージを与える。
// let hp = 100;
// HPの残数
// while (hp > 0) {
  // console.log(`${hp} HP left!`);
  // hp -= 15;  //hpを-15ずつ減らしていく
// }

let hp = -50;
// HPの残数が-50であるが、一度は表示させたいケース。
do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 0);