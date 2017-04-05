angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabs.home', {
    url: '/page1',
    views: {
      'tab9': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('segundaFeira', {
    url: '/page2',
    templateUrl: 'templates/segundaFeira.html',
    controller: 'segundaFeiraCtrl'
  })

  .state('tercaFeira', {
    url: '/page3',
    templateUrl: 'templates/tercaFeira.html',
    controller: 'tercaFeiraCtrl'
  })

  .state('quartaFeira', {
    url: '/page4',
    templateUrl: 'templates/quartaFeira.html',
    controller: 'quartaFeiraCtrl'
  })

  .state('quintaFeira', {
    url: '/page6',
    templateUrl: 'templates/quintaFeira.html',
    controller: 'quintaFeiraCtrl'
  })

  .state('sextaFeira', {
    url: '/page7',
    templateUrl: 'templates/sextaFeira.html',
    controller: 'sextaFeiraCtrl'
  })

  .state('sabado', {
    url: '/page8',
    templateUrl: 'templates/sabado.html',
    controller: 'sabadoCtrl'
  })

  .state('domingo', {
    url: '/page9',
    templateUrl: 'templates/domingo.html',
    controller: 'domingoCtrl'
  })

  .state('tabs.cafe', {
    url: '/page10',
    views: {
      'tab5': {
        templateUrl: 'templates/cafe.html',
        controller: 'cafeCtrl'
      }
    }
  })

  .state('tabs.almoco', {
    url: '/page11',
    views: {
      'tab8': {
        templateUrl: 'templates/almoco.html',
        controller: 'almocoCtrl'
      }
    }
  })

  .state('tabs.jantar', {
    url: '/page12',
    views: {
      'tab6': {
        templateUrl: 'templates/jantar.html',
        controller: 'jantarCtrl'
      }
    }
  })

  .state('tabs.ceia', {
    url: '/page13',
    views: {
      'tab7': {
        templateUrl: 'templates/ceia.html',
        controller: 'ceiaCtrl'
      }
    }
  })

  .state('tabs', {
    url: '/tabs',
    templateUrl: 'templates/tabs.html',
    abstract: true
  })

$urlRouterProvider.otherwise('/tabs/page1')



});
