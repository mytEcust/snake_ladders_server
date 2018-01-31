'use strict';

const Controller = require('egg').Controller;

class BoardController extends Controller {
  async build() {
    const board=this.ctx.service.board.get();
    this.ctx.body = board;
    this.ctx.status=200;
  }
}

module.exports = BoardController;
