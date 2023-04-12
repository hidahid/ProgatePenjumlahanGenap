const getEven = () => {
  const num = parseInt(document.getElementById("numInput").value);
  let getArr = [];

  for (let i = 1; i <= num; i++) {
    getArr.push(i);
  }

  let getDetail = [];
  let getResult = 0;

  for (let i = 0; i < getArr.length; i++) {
    if (getArr[i] % 2 === 0) {
      getDetail.push(getArr[i]);
      getResult += getArr[i];
    }
  }

  document.getElementById("arrResult").innerHTML = getArr;
  document.getElementById("detResult").innerHTML = getDetail;
  document.getElementById("sumResult").innerHTML = getResult;
};
