'use strict';

const x = 2;

function f() {  // f = 1 理由；{}内で x = 1 と定義しているから。
  const x = 1;
  console.log(x);
}

f(); // f = 2 理由；const x = 2 と定義しているから。
console.log(x);   