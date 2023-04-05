function satu(integer) {
  //   console.log(integer);

  let result = [];

  for (let i = 1; i <= integer; i++) {
    result.push(i);
  }

  return result;
}

function dua(integer) {
  let result = 0;
  let arrNumber = satu(integer);

  for (let i = 0; i < arrNumber.length; i++) {
    // console.log(arrNumber[i]);
    let store = arrNumber[i];

    if (store % 2 === 0) {
      result += arrNumber[i];
    }
  }

  return result;
}

let number = 10;

console.log(dua(number));
