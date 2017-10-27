'use strict';

let startTime = 0;
let stopTime = 0;

class CodeTimer {
    /**
     * Constructor. No parameters
     */
    constructor() {
    }
    /**
     * To start the counter, put this before the code you want to take time on.
     */
    start() { 
        startTime = Date.now();
    }
    /**
     * This stops the timer. Put this after the code you want to test.
     */
    stop() {
        stopTime = Date.now();
    }
    /**
     * This returns the time it took between start and stop. Returns the time in milliseconds
     */
    getTime() {
        return (stopTime - startTime);
    }
}

module.exports = CodeTimer;

