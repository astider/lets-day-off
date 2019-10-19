const { DateTime } = require('luxon');

const dl = DateTime.local();
const toDate = (date) => date.toFormat('dd/LL/y');

module.exports = {
  randomPickIndex: (possibleDays = []) => Math.floor(Math.random() * possibleDays.length),
};