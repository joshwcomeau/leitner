# Leitner schedule

I recently read Nicky Case's amazing Explorable Explanation, ["How To Remember Anything Forever-ish"](https://ncase.me/remember/). It involves the construction of a Leitner box, to practice spaced repetition. It's really good, you should read it!

The game works on a **64-day calendar**. While the explorable provides instructions for creating your own calendar out of index cards, I prefer to have it digital, to prevent any confusion/issues.

This CLI utility is simple. It tells you which cards to review today.

### Setup and Running

- Install a recent version of Node.js.

- Clone or download this repository.

- Open `index.js`, and update this line to your current date:

```js
// I started on November 24th, 2018, so my initial date is 2018, 11, 24.
const INITIAL_DATE = [2018, 11 - 1, 24];
// (Bewilderingly, months in JS are 0-indexed, so I need to enter `10` as the
// month, instead of `11`.)
```

- In the project directory, run `npm run start`

Tomorrow, run `npm run start` again. It'll compare your system's date against the `INITIAL_DATE` you entered, to figure out which cards you need to review.

### Even easier

You can add a Bash alias to make it even easier to use this program.

I added the following line to my `.bashrc` program:

```bash
alias leitner="node /Users/joshuacomeau/work/leitner"

# NOTE: Run `source ~/.bashrc` after making the change to use right away. Or reopen the terminal.
```

Then, in the CLI, I can easily just type `leitner` from anywhere in the filesystem, and see which cards I need to review :D
