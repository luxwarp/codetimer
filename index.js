'use strict'

class CodeTimer {
  constructor () {
    this.startTime = 0
    this.stopTime = 0
  }
  /**
     * This starts the timer, put this before the code you want to take time on.
  */
  start () {
    this.startTime = Date.now()
  }
  /**
     * This stops the timer, put this after the code you want to test.
  */
  stop () {
    this.stopTime = Date.now()
  }
  /**
     * This returns the time it took between start and stop. Returns the time in milliseconds by default.
  */
  getTime () {
    return (this.stopTime - this.startTime)
  }
}
module.exports = CodeTimer
