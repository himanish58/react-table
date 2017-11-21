const names = ['Arvind', 'Adam', 'Eve', 'Eli', 'Joanah', 'Elliot', 'Remi', 'Zedi', 'Sheldon', 'Ajay', 'Penny'];
const phoneNumbers = ['9856324100', '7856001456', '8745001230', '9850124753', '86201453789', '7521400589', '7895001400', '7895621403'];
const address = ['swq st, tyh, zip- 489752', 'red st, poi, zip- 456200', 'tye st, qmo, zip- 985002', 'wer st, vbg, zip- 789652', 'wsx st, tgv, zip- 752000'];

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function getName() {
  return `${rando(names)}`;
}

export function getPhoneNumber() {
  return `${rando(phoneNumbers)}`;
}

export function getAddress() {
  return `${rando(address)}`;
}
