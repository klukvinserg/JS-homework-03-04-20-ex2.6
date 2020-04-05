let arr = [];

for (; true; ) {
  let str = "";
  let tmp;

  str = prompt("Enter string");

  if (str === null) {
    continue;
  } else {
    arr.push(str);
  }

  tmp = confirm("Continue 'Enter string'?");

  if (tmp === true) {
    continue;
  } else {
    break;
  }
}

function result(arr) {
  let tmp = "";
  for (let i = 0; i < arr.length; i++) {
    tmp += arr[i];
  }
  return tmp;
}

document.write(`Enter string: ${arr}<br>Result: ${result(arr)}`);
