let createMail = (recv, bill) => {
  let msg = `${recv}様
  PT企画の斉藤です。
  今月の請求額は${bill}円です。`;
  console.log(msg)
};

createMail('山本', 40000)

let createMail = (recv, bill) => {
  let msg = recv + '様\n' +
    'PT企画の斉藤です。\n' +
    '今月の請求額は' + bill + '円です。';
  console.log(msg)
};

createMail('山本', 40000)

let addCharge = (bill) => {
  return bill * 1.07;
};
console.log(addCharge(40000));

let date = {
  name: '山本',
  bill: 40000,
  chg: true
};
console.log(date['name']);
console.log(date['bill']);

let date = [{
    name: '山本',
    bill: 40000,
    chg: true
  },
  {
    name: '吉田',
    bill: 25000,
    chg: false
  }
];
console.log(date[1]['name']);
console.log(date[1]['bill']);
