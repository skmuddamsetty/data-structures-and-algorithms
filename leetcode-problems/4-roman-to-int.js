prepObj = () => {
  let obj = {};
  obj['I'] = 1;
  obj['V'] = 5;
  obj['X'] = 10;
  obj['L'] = 50;
  obj['C'] = 100;
  obj['D'] = 500;
  obj['M'] = 1000;
  return obj;
};

romanToInt = romanStr => {
  let obj = prepObj();
  let result = 0;
  for (let i = 0; i < romanStr.length; i++) {
    if (romanStr[i] === 'I' || romanStr[i] === 'X' || romanStr[i] === 'C') {
      let temp = romanStr.slice(i, i + 2);
      if (temp !== 'II' && temp.length === 2) {
        if (temp[0] === 'I') {
          temp = obj[temp[1]] - 1;
        } else if (temp[0] === 'X') {
          temp = obj[temp[1]] - 10;
        } else {
          temp = obj[temp[1]] - 100;
        }
        result = result + Math.abs(temp);
      } else if (temp.length === 2) {
        result = result + obj['I'] + obj['I'];
      } else {
        result = result + obj['I'];
      }
      i++;
    } else {
      result = result + obj[romanStr[i]];
    }
  }
  return result;
};

console.log(romanToInt('DCXXI'));
