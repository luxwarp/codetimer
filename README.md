# CodeTimer

## Intro
A node module that lets you take time on how long it takes to run your code.

Check Wiki for change log and more information [here](https://github.com/mmcarlsson/codetimer/wiki)

## Install
`npm install codetimer --save-dev`

## Usage
Example code on how to run CodeTimer in your project.

```javascript
const CodeTimer = require('codetimer');                        //import CodeTimer module

const ct = new CodeTimer();                                     //Create new object from class.

ct.start();                                                     //Start the timer.

let result = 0;

for(let i = 0; i < 1000000000; i++) {                           //Do some calculations.
    result++;
}

ct.stop();                                                      //Stop the timer.

console.log('Milliseconds: ',ct.getTime());                     //Print out the result. Result is in milliseconds by default.
console.log('Seconds: ',(ct.getTime()/1000));                   //convert result to seconds. eg 0.834.
```
## Testing
If you want to try some functions before using this module 
in your applications you can use the `test.js` file located in the
root folder of the module and then run the file in your terminal with the command
`node ./test.js`

## License
MIT - © Copyright [Mikael Carlsson](http://mikaelcarlsson.info)

## Note
No one but you as the user of this module can be held responsible for damaged or lost data.