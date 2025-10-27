This is a simple button counter app built with Next.js and React. It has a reusable Counter component that lets you increase, decrease, and reset a number. You can also change the step value so the counter goes up or down by more than 1.

## How to Run Locally

Clone the repo or download the project folder
Open it in VS Code or your editor
In the terminal, run:

npm install
npm run dev

Go to [http://localhost:3000]

## How to Build for Production

In the terminal, run: 

npm run build
npm start

This builds an optimized version of the app and then runs it.

## Features I Completed

 Counter shows the current number
 + button adds to the count (default +1)
 – button subtracts (default -1)
 Reset button sets it back to 0 or the initial value
 Step input lets you change how much it goes up/down
 Two counters on the home page (one default, one with custom values)
 Props: initialCount and initialStep work correctly
 Decrement button disables if the number would go below 0
 aria-live="polite" used so screen readers announce the count
 Buttons use real <button> elements and inputs have labels
 No errors in the console / app runs cleanly

## Known Issues / Limitations

If you type a negative number in the step box, it gets ignored, but the input still shows it until you change it again.
The design is super simple—no fancy styling or animations.
The number resets when you refresh the page (nothing saves).
