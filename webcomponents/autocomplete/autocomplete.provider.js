/* global angular */

angular
  .module('minimalist')
  .provider('MnAutocomplete', MnAutocomplete)

function MnAutocomplete() {
  let services = {}
  return {
    addService,
    $get: () => ({services, addService})
  }

  function addService(name, service) {
    services[name] = service
  }
}
