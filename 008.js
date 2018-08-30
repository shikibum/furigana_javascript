for (let cnt = 10; cnt > 0; cnt--) {
  console.log(cnt + '回目のハロー');
}

for (let x = 1; x < 10; x++) {
  for (let y = 1; y < 10; y++) {
    console.log(x * y);
  }
}

for (let x = 1; x < 10; x++) {
  for (let y = 1; y < 10; y++) {
    console.log(x + '×' + y +
      '=' + x * y);
  }
}

let wdays = ['月', '火', '水', '木', '金'];
console.log(wdays[1]);
wdays[1] = '炎';
console.log(wdays);
