const { getAvailableDays } = require('./availableDays');
const { randomPickIndex } = require('./functions');

const alreadyOff = [
  '29/11/2019',
  '30/11/2019',
  '01/12/2019',
  '02/12/2019',
  '03/12/2019',
  '04/12/2019',
];

const availableDays = getAvailableDays(true, alreadyOff);
const days = [];
const mapString = availableDays.map(d => d.string);
let wantToDayOff = 10;
let mutableDates = mapString;

while (wantToDayOff > 0) {
  const pickIndex = randomPickIndex(mutableDates);
  const pick = mutableDates[pickIndex];
  days.push(pick);
  mutableDates = mutableDates.filter(d => d !== pick);
  wantToDayOff--;
}

console.log(days);