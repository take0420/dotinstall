'use strict';
{
  const d = new Date(2019, 10); // 2019/11/01 00:00:00
  d.setHours(10, 20, 30); //2019/11/01 10:20:30
  d.setDate(31); //2019/12/01 10:20:30
  d.setDate(d.getDate() + 3); //2019/12/04 10:20:30
  console.log(d); 
}