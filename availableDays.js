const { DateTime } = require('luxon');

const dl = DateTime.local();
const endOfyear = dl.endOf('year');
const today = dl.startOf('day');

const toDate = (date) => date.toFormat('dd/LL/y');

module.exports = {
  getAvailableDays: (exludeSatSun = true, alreadyOff = []) => {
    let available = [];
    let runningDay = today;
    const targetDayinWeek = exludeSatSun ? ['6', '7'] : [];
    while (runningDay <= endOfyear) {
      if (
          !targetDayinWeek.includes(runningDay.toFormat('c'))
          && !alreadyOff.includes(toDate(runningDay))
        ) {
        // console.log(`add ${toDate(runningDay)} to available days`);
        available = [
          ...available,
          {
            string: toDate(runningDay),
            day: runningDay.day,
            month: runningDay.month,
            year: runningDay.year
          }
        ];
      }
      runningDay = runningDay.plus({ days: 1 });
    }  
    return available;
  }
};