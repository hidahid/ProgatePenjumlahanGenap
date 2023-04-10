getInput = () => {
  let input = document.getElementById("angka").value;
  return input;
};

getNumber = (int) => {
  let result = [];

  for (let i = 1; i <= int; i++) {
    result.push(i);
  }
};

getEven = (int) => {
  let result = 0;
  let getArr = getNumber(int);

  for (let i = 0; i < getArr.length; i++) {
    let store = getArr[i];

    if (store % 2 === 0) {
      result += getArr[i];
    }
  }
};
