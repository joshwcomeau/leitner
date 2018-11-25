# Leitner schedule

I recently read Nicky Case's amazing Explorable Explanation, ["How To Remember Anything Forever-ish"](https://ncase.me/remember/). This explorable teaches a science-backed method for long-term retention, and I'm super excited to develop this new super-power.

You can create cards with mobile and web apps, but it's more fun to have a tangible box using index cards. The trouble, though, is that you need some way to keep track of which cards to review on which day - the game works on a **64-day calendar**. While the explorable provides instructions for creating your own calendar, I worry that it wouldn't work so well for me: it relies on manually advancing a "current day" indicator, and that feels like something I'd forget to do.

So, I created this super-rudimentary CLI for tracking it. Run a command and it tells you which cards to review today. It could be better - contributions welcome - but it fits my needs.

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

- In the project directory, run `node index.js`. It'll tell you which cards to review!

- Tomorrow, run `npm run start` again. It'll compare your system's date against the `INITIAL_DATE` you entered, to figure out which cards you need to review.

### Bash alias

I'm lazy, and I didn't want to have to `cd` into this project directory every day. So I created a quick alias on my machine.

I added the following line to my `.bashrc` program:

```bash
alias leitner="node /Users/joshuacomeau/work/leitner"

# NOTE: Run `source ~/.bashrc` after making the change to use right away. Or reopen the terminal.
```

This way, you can run `leitner` from anywhere in the filesystem.
