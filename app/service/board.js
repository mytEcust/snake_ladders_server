'use strict';

const Service = require('egg').Service;

class board {
  constructor() {
    this.x = 5;
    this.y = 5;
    this.snakes = [
      {
        start: 7,
        end: 20
      }
    ];
    this.ladders = [
      {
        start: 12,
        end: 23
      },
      {
        start: 9,
        end: 18
      }
    ];
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.y = y;
  }
  setSnakes(snakes) {
    this.snakes = snakes;
  }
  setLadders(ladders) {
    this.ladders = ladders;
  }
  getHalf() {
    return parseInt(this.x * this.y / 2);
  }
}



class BoardService extends Service {
  get() {
    const _board = new board();
    const halfMax = _board.getHalf();
    const snakeStart = this.ctx.helper.getStartRandom(halfMax);
    const snakeEnd = this.ctx.helper.getEndRandom(halfMax);
    const ladderStart01 = this.ctx.helper.getStartRandom(halfMax, [snakeStart]);
    const ladderEnd01 = this.ctx.helper.getEndRandom(halfMax, [snakeEnd]);
    const ladderStart02 = this.ctx.helper.getStartRandom(halfMax, [snakeStart, ladderStart01]);
    const ladderEnd02 = this.ctx.helper.getEndRandom(halfMax, [snakeEnd, ladderEnd01]);

    _board.setSnakes([
      {
        start: snakeStart,
        end: snakeEnd
      }
    ]);

    _board.setLadders([
      {
        start: ladderStart01,
        end: ladderEnd01
      },
      {
        start: ladderStart02,
        end: ladderEnd02
      }
    ]);
    return _board;
  }
}

module.exports = BoardService;
