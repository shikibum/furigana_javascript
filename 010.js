let dir = ['東', '西', '南', '北'];
for (let d of dir) {
  console.log(d);
}

let wdays = ['月', '火', '水', '木', '金'];
for (let cnt = 4; cnt >= 0; cnt--) {
  console.log(wdays[cnt] + '曜日');
}

let createMail = () => {
  console.log('PT企画の斉藤です。');
  console.log('請求書を送ります。');
};

createMail();

let createMail = (recv) => {
  console.log(recv + '様');
  console.log('PT企画の斉藤です。');
  console.log('請求書を送ります。');
};
createMail('山田');
