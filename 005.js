let text = prompt('年齢は？');
let age = parseInt(text);
if (age < 20) {
  console.log('未成年');
} else if (age < 65) {
  console.log('成人');
} else {
  console.log('高齢者');
}

let text = prompt('年齢は？');
if (!isNaN(text)) {
  let age = parseInt(text);
  if (age < 20) {
    console.log('未成年');
  }
}

let text = prompt('年齢は？');
let age = parseInt(text);
if (age >= 6 && age <= 15) {
  console.log('義務教育の対象');
}

let text = prompt('年齢は？');
let age = parseInt(text);
if (age >= 5 || age >= 65) {
  console.log('幼児と高齢者');
}

let text = prompt('年齢は？');
if (!isNaN(text)) {
  console.log('数字に変換可能');
}
