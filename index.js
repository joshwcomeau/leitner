const differenceInDays = require('date-fns/difference_in_days');
const colors = require('colors/safe');

require('colors');

// Update me, at your own peril >:o
// November 25nd (remember, months are 0-indexed, for no discernable reason)
const INITIAL_DATE = [2018, 11 - 1, 25];

const run = currentDateArr => {
  const startDate = new Date(...INITIAL_DATE);
  const currentDate = new Date(...currentDateArr);

  const dayOffset = differenceInDays(currentDate, startDate) % 64;

  const days = LEITNER_SCHEDULE[dayOffset];
  const coloredDays = days.map(day => colors.green(colors.bold(day)));

  console.info(
    '\n\n  Today is day',
    `${dayOffset + 1}`.bold,
    'of',
    '64'.bold + '.',
    '\n\n  You need to review cards:',
    '\n ',
    coloredDays.join(', '),
    '\n\n\n'
  );
};

const LEITNER_SCHEDULE = [
  // 1-16
  [2, 1],
  [3, 1],
  [2, 1],
  [4, 1],
  [2, 1],
  [3, 1],
  [2, 1],
  [1],
  [2, 1],
  [3, 1],
  [2, 1],
  [5, 1],
  [4, 2, 1],
  [3, 1],
  [2, 1],
  [1],

  // 17-32
  [2, 1],
  [3, 1],
  [2, 1],
  [4, 1],
  [2, 1],
  [3, 1],
  [2, 1],
  [6, 1],
  [2, 1],
  [3, 1],
  [2, 1],
  [5, 1],
  [4, 2, 1],
  [3, 1],
  [2, 1],
  [1],

  // 33, 48
  [2, 1],
  [3, 1],
  [2, 1],
  [4, 1],
  [2, 1],
  [3, 1],
  [2, 1],
  [1],
  [2, 1],
  [3, 1],
  [2, 1],
  [5, 1],
  [4, 2, 1],
  [3, 1],
  [2, 1],
  [1],

  // 49, 64
  [2, 1],
  [3, 1],
  [2, 1],
  [4, 1],
  [2, 1],
  [3, 1],
  [2, 1],
  [7, 1],
  [2, 1],
  [3, 1],
  [6, 2, 1],
  [5, 1],
  [4, 2, 1],
  [3, 1],
  [2, 1],
  [1],
];

// For testing purposes, the current date can be passed in.
// if left blank, it uses the real current date, according to system time.
let [, , year, month, day] = process.argv;

if (typeof day !== 'undefined') {
  year = Number(year);
  // Months are 0-indexed in JS
  month = Number(month) - 1;
  day = Number(day);
} else {
  const d = new Date();
  year = d.getFullYear();
  month = d.getMonth();
  day = d.getDate();
}

run([year, month, day]);
