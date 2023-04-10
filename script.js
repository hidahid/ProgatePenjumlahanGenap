let getInput = document.even.angka.value;

getNumber = (int) => {
  let result = [];

  for (let i = 1; i <= int; i++) {
    result.push(i);
  }
};

getEven = (int) => {
  let getArr = getNumber(int);
  let getDetail = "";
  let getResult = 0;

  for (let i = 0; i < getArr.length; i++) {
    let store = getArr[i];

    if (store % 2 === 0) {
      getDetail += getArr[i];
      getResult += getArr[i];
    }
  }

  document.even.array.value = getArr;
  document.even.details.value = getDetail;
  document.even.result.value = getResult;
};
