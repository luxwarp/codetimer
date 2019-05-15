[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# CodeTimer

## Intro
A NodeJS module that let's you take time on how long it takes to execute code in your project.

Check wiki for change log and more information [here](https://github.com/luxwarp/codetimer/wiki)

## Install
`npm install codetimer --save-dev`

## Usage
Example code on how to run CodeTimer in your project.

```javascript
const CodeTimer = require('codetimer')                      // import CodeTimer module.

const ct = new CodeTimer()                                  // Create new object from class.

ct.start()                                                  // Start the timer.

let result = 0

for (let i = 0; i < 1000000000; i++) {                      // Do some calculations.
  result++
}

ct.stop()                                                   // Stop the timer.

console.log('Result counter: ', result)                     // Print out the calculation.
console.log('Milliseconds: ', ct.getTime())                 // Print out the result. Result is in milliseconds by default.
console.log('Seconds: ', (ct.getTime() / 1000))             // Convert result to seconds. eg 0.834.
```

##Result
Result of above code should look something like this.
```
Result counter:  1000000000
Milliseconds:  965
Seconds:  0.965
```

## Testing
If you want to try some functions before using this module 
in your applications you can use the `test.js` file located in the
root folder of this module and then run the file in your terminal with the command
`node ./test.js`

## License
ISC - © Copyright [Mikael Carlsson](http://luxwarp.info)

## Note
Feel free to contribute the way you want.
