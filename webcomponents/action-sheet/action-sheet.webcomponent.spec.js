/* global describe, it, before, beforeEach */
const {expect, spy} = require('chai')
  .use(require('chai-dom'))
  .use(require('chai-style'))
  .use(require('chai-spies'))

let actionSheet
let component

describe('mn-action-sheet (webcomponent)', () => {
  before(loadComponent)
  beforeEach(cleanView)
  beforeEach(createComponent)
  beforeEach(setPageObject)

  describe('instance', () => {
    it('should work with a constructor', () => {
      const MnActionSheet = window.customElements.get('mn-action-sheet')
      component = new MnActionSheet()
      expect(component).to.be.instanceof(MnActionSheet)
    })

    it('should work with document.createElement()', () => {
      const MnActionSheet = window.customElements.get('mn-action-sheet')
      component = document.createElement('mn-action-sheet')
      expect(component).to.be.instanceof(MnActionSheet)
    })
  })

  describe('component', () => {
    it('should have the .mn-action-sheet class', () => {
      expect(component).to.have.class('mn-action-sheet')
    })

    it('should contain a menu property', () => {
      expect(component).to.have.property('menu')
    })

    it('should contain a menu child', () => {
      expect(component.querySelectorAll('menu')).to.have.length(1)
    })

    it('should contain div.option inside menu', () => {
      expect(component.menu.querySelectorAll('div.option')).to.have.length(3)
    })

    it('should contain a button property', () => {
      expect(component).to.have.property('button')
    })
  })

  describe('css style', () => {
    it('should have a fixed position', () => {
      expect(component).to.have.style('position', 'fixed')
    })

    it('should have a top position 0', () => {
      expect(component).to.have.style('top', '0')
    })

    it('should have a bottom position 0', () => {
      expect(component).to.have.style('bottom', '0')
    })

    it('should have a bottom position 0', () => {
      expect(component).to.have.style('bottom', '0')
    })

    it('should be hidden', () => {
      expect(component).to.have.style('visibility', 'hidden')
    })
  })

  describe('method show', () => {
    it('should add .visible class to component', () => {
      component.show()
      expect(component).to.have.class('visible')
    })

    it('should add some classes to body', () => {
      component.show()
      expect(document.body).to.have.class('mn-backdrop-visible')
      expect(document.body).to.have.class('mn-action-sheet-visible')
    })
  })

  describe('method hide', () => {
    it('should remove .visible class from component', () => {
      component.show()
      component.hide()
      expect(component).to.not.have.class('visible')
    })

    it('should remove some classes to body', () => {
      component.show()
      component.hide()
      expect(document.body).to.not.have.class('mn-backdrop-visible')
      expect(document.body).to.not.have.class('mn-action-sheet-visible')
    })

    it('should be called when click in cancel button', () => {
      component.show()
      const hide = spy.on(component, 'hide')
      component.button.click()
      expect(hide).to.have.been.called()
    })

    it.skip('should be called when touch outside of options', () => {
      component.show()
      const hide = spy.on(component, 'hide')
      document.dispatchEvent(new Event('touchend', {target: component}))
      expect(hide).to.have.been.called()
    })
  })

  describe('option', () => {
    it.skip('should dispatch event change on click with data', () => {
      // we need to found ways to test events
      component.addEventListener('change', (event) => {
        expect(event).to.have.property('data')
      })
      actionSheet.clickOn('Stark')
    })

    it('should has index 0 on click in Stark', () => {
      component.addEventListener('change', (event) => {
        expect(event.data.index).to.be.equal(0)
      })
      actionSheet.clickOn('Stark')
    })

    it('should has index 0 on click in Lannister', () => {
      component.addEventListener('change', (event) => {
        expect(event.data.index).to.be.equal(1)
      })
      actionSheet.clickOn('Lannister')
    })

    it('should has index 0 on click in Targaryen', () => {
      component.addEventListener('change', (event) => {
        expect(event.data.index).to.be.equal(1)
      })
      actionSheet.clickOn('Targaryen')
    })
  })
})

function loadComponent() {
  // require('minimalist').actionSheet
}

function cleanView() {
  const actionSheet = document.querySelector('mn-action-sheet')

  if (actionSheet) {
    actionSheet.parentNode.removeChild(actionSheet)
  }
}

function createComponent() {
  component = document.createElement('mn-action-sheet')

  const options = [
    'Stark',
    'Lannister',
    'Targaryen',
  ]

  options.forEach(value => {
    const option = document.createElement('option')
    option.textContent = value
    component.appendChild(option)
  })

  document.body.appendChild(component)
}

function setPageObject() {
  const ActionSheetPageObject = require('./action-sheet.po.js')
  actionSheet = new ActionSheetPageObject(component)
}
