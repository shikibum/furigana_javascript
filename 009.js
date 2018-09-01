let wdays = ['月', '火', '水', '木', '金'];
for (let day of wdays) {
  console.log(day + '曜日');
}

let wdays = ['月', '火', '水', '木', '金'];
for (let cnt = 0; cnt < 5; cnt++) {
  console.log(wdays[cnt] + '曜日');
}

let team = ['A', 'B', 'C', 'D', 'E'];
for (let t1 of team) {
  for (let t2 of team) {
    console.log(t1 + 'vs' + t2);
  }
}

let team = ['A', 'B', 'C', 'D', 'E'];
for (let t1 of team) {
  for (let t2 of team) {
    if (t1 != t2) {
      console.log(t1 + 'vs' + t2);
    }
  }
}

let team = ['A', 'B', 'C', 'D', 'E'];
let opps = ['A', 'B', 'C', 'D', 'E'];
for (let t1 of team) {
  opps.shift();
  for (let t2 of opps) {
    console.log(t1 + 'vs' + t2);
  }
}
