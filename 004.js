let text = prompt('入力せよ');
if (isNaN(text)) {
  console.log('数字ではない');
}

let text = prompt('入力せよ');
if (!isNaN(text)) {
  console.log(parseInt(text) + 80);
}

let text = prompt('入力せよ');
if (!isNaN(text)) {
  console.log(parseInt(text) + 80);
} else {
  console.log('数字ではない');
}

console.log(4 < 5);
console.log(6 < 5);

123 == '123' //true
123 === '123' //false

let text = prompt('年齢は？');
let age = parseInt(text);
if (age < 20) {
  console.log('未成年');
}
