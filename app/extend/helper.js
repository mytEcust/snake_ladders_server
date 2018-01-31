'use strict';

module.exports = {
  getStartRandom(half, exist) {
    // 生成随机数
    let random = Math.floor(Math.random() * half);
    if (exist) {
      let len = exist.length;
      while (len) {
        len--;
        // 随机数已存在或为0，重新生成，并重新检查
        if (exist[len] === random || random === 0) {
          random = Math.floor(Math.random() * half);
          len = exist.length;
        }
      }
    }
    return random;
  },

  getEndRandom(half, exist) {
    // 生成随机数
    let random = Math.floor(Math.random() * half + half);
    if (exist) {
      let len = exist.length;
      while (len) {
        len--;
        // 随机数已存在或在最后一个位置，重新生成，并重新检查
        if (exist[len] === random || random === 2 * half) {
          random = Math.floor(Math.random() * half + half);
          len = exist.length;
        }
      }
    }
    return random;
  }
};
