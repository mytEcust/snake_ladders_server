'use strict';

const Service = require('egg').Service;

class DiceService extends Service {
  get() {
    // [0,5]+1
    return Math.floor(Math.random() * 6) + 1;
  }
}

module.exports = DiceService;
