const CodeTimer = require('./index.js');                        //import CodeTimer module

const ct = new CodeTimer();                                     //Create new object from class.

ct.start();                                                     //Start the timer.

let result = 0;

for(let i = 0; i < 1000000000; i++) {                           //Do some calculations.
    result++;
}

ct.stop();                                                      //Stop the timer.

console.log('Milliseconds: ',ct.getTime());                     //Print out the result. Result is in milliseconds by default.
console.log('Seconds: ',(ct.getTime()/1000));                   //convert result to seconds. eg 0.834.