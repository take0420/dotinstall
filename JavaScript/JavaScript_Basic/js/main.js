'use strict';
{
  const d = [2019, 11, 14];

  console.log(d.join('/')); // 2019/11/14
  console.log(d.join(''));// 20191114

  const t = '17:08:24';
  console.log(t.split(':'));// '17', '08', '24'
  
  const [hour, minute, second] = t.split(':');
  console.log(hour); // 17
  console.log(minute); // 08
  console.log(second); // 24
}