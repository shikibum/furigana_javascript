let createMail = (recv, bill) => {
  let msg = `${recv}様
  PT企画の斉藤です。
  今月の請求額は${bill}円です。`
  console.log(msg)
};

let addCharge = (bill) => {
  return bill * 1.07;
};

let data = [{
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

for (let rec of data) {
  let bill = rec['bill']
  if (rec['crg']) {
    bill = addCharge(bill);
  }
  createMail(rec['name'], bill);
}

let createMail = (recv) => {
  console.log(recv + '様\nはじめまして');
}
createMail('山本');

let addCharge = (bill) => {
  if (bill < 0) {
    return 0;
  }
  return bill * 1.07;
};
console.log(addCharge(-1000))
