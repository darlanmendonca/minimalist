'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _componentClass = require('../component/component.class.js');

var _componentClass2 = _interopRequireDefault(_componentClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let MnImage = class MnImage extends _componentClass2.default {
  connectedCallback() {
    super.setChildren('img');
    this.setStyle();
    // this.setRotation()
    super.setAttributes();
  }

  static get observedAttributes() {
    return ['src'];
  }

  setStyle() {
    this.classList.add('mn-image');
  }

  // setRotation() {
  //   this.addEventListener('mouseenter', setRotation3d)
  //   this.addEventListener('mousemove', setRotation3d)
  //   this.addEventListener('mouseleave', unsetRotate3d)

  //   function setRotation3d(event) {
  //     if (this.parentElement.tagName === 'A') {
  //       let bounds = this.getBoundingClientRect()
  //       let isTouchEvent = event.type.startsWith('touch')

  //       let clientX = isTouchEvent
  //         ? event.touches[0].clientX
  //         : event.clientX

  //       let clientY = isTouchEvent
  //         ? event.touches[0].clientY
  //         : event.clientY

  //       let percentX = (clientX - bounds.left) / bounds.width
  //       let percentY = (clientY - bounds.top) / bounds.height
  //       let angles = 20
  //       let rotateY = (angles * (-percentX * 2)) + angles
  //       let rotateX = (angles * (percentY * 2)) - angles
  //       this.style.transform = `
  //         scale(1.07)
  //         perspective(1000px)
  //         rotateY(${rotateY}deg)
  //         rotateX(${rotateX}deg)
  //       `
  //     }
  //   }

  //   function unsetRotate3d() {
  //     this.style.transform = ''
  //   }
  // }

  get src() {
    return this.imgChild.getAttribute('src');
  }

  set src(value) {
    this.imgChild.setAttribute('src', value);
  }
};


window.customElements.define('mn-image', MnImage);

exports.default = MnImage;