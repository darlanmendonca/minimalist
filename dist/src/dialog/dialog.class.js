'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentClass = require('../component/component.class.js');

var _componentClass2 = _interopRequireDefault(_componentClass);

var _backdropClass = require('../backdrop/backdrop.class.js');

var _backdropClass2 = _interopRequireDefault(_backdropClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MnDialog = class MnDialog extends _componentClass2.default {
  connectedCallback() {
    this.setStyle();
    this.setButtonClose();
    this.setOpenEvents();
    this.setToggleEvents();
    this.setCloseEvents();
  }

  setStyle() {
    this.classList.add('mn-dialog');
    document.body.classList.add('mn-backdrop');

    const section = document.createElement('div');
    section.classList.add('mn-section');
    section.innerHTML = this.innerHTML;
    this.innerHTML = '';
    this.appendChild(section);
    this.section = section;
  }

  setButtonClose() {
    const button = document.createElement('button');
    button.classList.add('mn-button');
    button.classList.add('action');
    button.setAttribute('close-dialog', '');
    const dialog = this.querySelector('.mn-section');
    dialog.insertBefore(button, dialog.firstChild);
  }

  setOpenEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[open-dialog="${this.id}"]`)) {
        event.stopPropagation();
        this.open();
      }
    });

    this.addEventListener('open', () => {
      setTimeout(() => this.autofocus(), 200);
    });
  }

  setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-dialog="${this.id}"]`)) {
        event.stopPropagation();
        this.toggle();
      }
    });
  }

  setCloseEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[close-dialog]')) {
        event.stopPropagation();
        this.close();
      }
    });

    document.addEventListener('click', event => {
      const dialogVisible = this.classList.contains('visible');
      const clickOutside = event.target.matches('.mn-dialog');

      if (dialogVisible && clickOutside) {
        this.close();
      }
    });

    document.addEventListener('keyup', event => {
      const esc = event.key === 'Escape';
      const isOpened = this.classList.contains('visible');

      if (esc && isOpened) {
        this.close();
      }
    });
  }

  open() {
    const previousDialog = document.querySelector('.mn-dialog.visible');

    if (previousDialog) {
      previousDialog.classList.remove('visible');
    }

    this.classList.add('visible');
    this.scrollTop = 0;
    document.body.classList.add('mn-dialog-visible');
    _backdropClass2.default.show();
    this.dispatchEvent(new Event('open'));
  }

  close() {
    document.body.classList.remove('mn-dialog-visible');
    this.classList.remove('visible');
    _backdropClass2.default.hide();
    this.dispatchEvent(new Event('close'));
  }

  toggle() {
    this.classList.toggle('visible') ? this.open() : this.close();
  }
};


window.customElements.define('mn-dialog', MnDialog);

exports.default = MnDialog;