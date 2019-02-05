'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
let MnBackdrop = class MnBackdrop {
  static show() {
    document.body.classList.add('mn-backdrop-visible');
  }

  static hide() {
    document.body.classList.remove('mn-backdrop-visible');
  }
};
exports.default = MnBackdrop;