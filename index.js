const { getAvailableDays } = require('./availableDays');
const selectionMethod = require('./functions');

const standard_input = process.stdin;
standard_input.setEncoding('utf-8');

const alreadyOff = [
  '29/11/2019',
  '30/11/2019',
  '01/12/2019',
  '02/12/2019',
  '03/12/2019',
  '04/12/2019',
];

const availableDays = getAvailableDays(true, alreadyOff);
const mapString = availableDays.map(d => d.string);
const defaultMethod = 'randomPickIndex';

standard_input.on('data', function (_input) {
  const input = _input.trim();
  const method = selectionMethod[input] !== undefined ? selectionMethod[input] : selectionMethod[defaultMethod];

  const days = [];
  let wantToDayOff = 10;
  let mutableDates = mapString;

  while (wantToDayOff > 0) {
    const pickIndex = method(mutableDates);
    const pick = mutableDates[pickIndex];
    days.push(pick);
    mutableDates = mutableDates.filter(d => d !== pick);
    wantToDayOff--;
  }

  console.log(days);
});
