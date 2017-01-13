# Awesomplete farsi support

Farsi and Arabic letters are two kinds: sticky and non-sticky, So auto-complete scripts like Awesomeplete don't work well with these languages.

We have more than one solution to fix this problem. But the most reasonable one is to not separate matched text inside auto-complete element and highlight it by another way. And that another way is calculating matched text size and creating a background element behind it to simulate a highlight effect.

## Usage
1. Import [awesomplete.js](https://leaverou.github.io/awesomplete/)
2. Then Copy or import `dist/app.js` and `dist/style.css` in your project by your way
3. Change `dummyData` and `inputElem` to whatever you want

#### One more thing!
Currently highlight element width is: `text.length * characterWidth`, And character width is: `font-size / 2`, Because character width is a fixed value by this way, Highlight element size is not very accurate. So please contribute if you find a better solution for calculating text size!