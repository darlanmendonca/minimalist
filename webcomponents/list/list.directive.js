/* global angular */

angular
  .module('minimalist')
  .directive('mnList', MnListDirective)

MnListDirective.$inject = ['$parse']

function MnListDirective($parse) {
  return {
    restrict: 'C',
    link(scope, element) {
      let model

      element.ready(() => {
        const item = element[0].querySelector('.mn-item[ng-repeat][draggable]')
        let expressionModel
        if (item) {
          expressionModel = item
            .getAttribute('ng-repeat')
            .match(/\sin\s([\w|\d|\.]+)/)[1]

          model = $parse(expressionModel)(scope)
        }

        element.on('reorder', (event) => {
          const {originIndex, targetIndex} = event
          scope.$apply(reorderItems)

          function reorderItems() {
            const value = angular.copy(model[originIndex])
            model[originIndex] = model[targetIndex]
            model[targetIndex] = value
          }
        })

        element.on('rearrange', (event) => {
          const {originIndex, targetList, targetIndex, element} = event

          setTimeout(() => {
            scope.$apply(rearrangeItems)
          }, 0)

          function rearrangeItems() {
            const value = angular.copy(model[originIndex])
            // model.splice(originIndex, 1)
            const newNgRepeat = Array
              .from(targetList.querySelectorAll('.mn-item'))
              .filter(item => {
                return item.hasAttribute('ng-repeat') && element.hasAttribute('ng-repeat')
                  && item.getAttribute('ng-repeat') !== element.getAttribute('ng-repeat')
              })[0].getAttribute('ng-repeat')

            if (newNgRepeat) {
              const newModel = $parse(newNgRepeat.match(/\sin\s([\w|\d|\.]+)/)[1])(scope)
              element.setAttribute('ng-repeat', newNgRepeat)
              // console.log('element =>', element)
              // console.log('value =>', value)
              // console.log('new ngRepeat =>', newNgRepeat)
              newModel.splice(targetIndex, 0, value)
              model.splice(originIndex, 1)
              console.log('from =>', originIndex)
              console.log('to =>', targetIndex)
              // console.log('old model =>', model)
              // console.log('new model =>', newModel)
            }

            // if (someTargetItem.nextElementSibling && newNgRepeat) {
            //   const expressionModel = someTargetItem
            //     .getAttribute('ng-repeat')
            //     .match(/\sin\s([\w|\d|\.]+)/)[1]

            //   const targetModel = $parse(expressionModel)(scope)
            //   console.log('to', targetModel)
            // }
          }
        })
        //
      })

    }
  }
}
