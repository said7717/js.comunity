let soat = 21;
let minut =0 ;

let dokon = new Promise((resolve, reject) => {

  if (
    ((soat > 8 || (soat === 8 && minut >= 30)) && 
    (soat < 12 || (soat === 12 && minut < 30))) ||
    ((soat > 13 || (soat === 13 && minut >= 30)) && soat < 21)
  ) {
    resolve("Do'kon ochiq");
  } 
  else if (
    (soat === 12 && minut >= 30) || (soat === 13 && minut <30)
  ) {
    reject("Hozir abet vaqti");
  } 
  else {
    reject("Do'kon yopiq");
  }

});

console.log("Hozirgi vaqt:", soat + ":" + minut);

dokon
  .then(res => console.log(res))
  .catch(err => console.log(err));