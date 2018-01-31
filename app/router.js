'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/board', controller.board.get);
  router.get('/dice', controller.dice.get);
};
