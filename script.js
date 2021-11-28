  // Exercise code challenge
  let checkAverage=(a,b,c) => (a+b+c)/3;
  console.log(checkAverage(12,13,14));

  let avgDolphin=checkAverage(44,23,71);
  let avgKoalas=checkAverage(65,54,49);


  const checkWinner = function (avgDolphin, avgKoalas) {
    if(avgDolphin>=2*avgKoalas){
      console.log(`dolphin is the winner`);
    } else if(avgKoalas>=2*avgDolphin){
      console.log(`koalas is the winner with points ${avgKoalas}`);
    } else{
      console.log(`no one won or scored wasn't twice than another`);
    }
  
  }
checkWinner(avgDolphin,avgKoalas);
checkWinner(160,580);
