'use strict';

const Controller = require('egg').Controller;

class DiceController extends Controller {
  async get() {
    const num = this.ctx.service.dice.get();
    this.ctx.body = num;
    this.ctx.status = 200;
  }
}

module.exports = DiceController;
