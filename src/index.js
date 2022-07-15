module.exports = function check(str, bracketsConfig) {

  let ResultArr = [];
  let openedBrackets = [];
  let closedBrackets = [];

  bracketsConfig.forEach((item) => {
    openedBrackets.push(item[0]);
    closedBrackets.push(item[1]);
  });

  for (let i = 0; i < str.length; i++) {
    if (closedBrackets.includes(str[i]) && ResultArr.length !== 0) {
      let secondBracket = openedBrackets[closedBrackets.indexOf(str[i])];
      if (ResultArr[ResultArr.length - 1] === secondBracket || ResultArr[ResultArr.length - 1] === str[i]) {
        ResultArr.pop();
      } else if (str[i] !== secondBracket) {
        return false;
      } else {
        ResultArr.push(str[i]);
      }
    } else {
      ResultArr.push(str[i]);
    }
  }
  return ResultArr.length === 0;
};