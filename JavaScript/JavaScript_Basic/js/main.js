'use strict';

{ 
  const prices = [180, 190, 200];
  
// prices を 20円ずつ値上げ
  // const updatePrices = prices.map((price) => {
  //   return price + 20;
  // });

//省略Ver.
  const updatePrices = prices.map(price => price + 20);
  console.log(updatePrices);
}

