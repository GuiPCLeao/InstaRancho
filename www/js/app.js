// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

Parse.initialize("IDFgz1xQwCUySlbMMyCedOPx5nhfFsGBAjo59q9R", "evCZBQ94tg9n4vLDOKGCqZRMx1exahFQXzVgC5ft");
Parse.serverURL = 'https://parseapi.back4app.com';

//Parse.initialize("myAppId", "myMasterKey");
//Parse.serverURL = 'http://localhost:1337/parse';

var example = angular.module('app', ['ionic', 'app.controllers', 'app.routes', 'app.directives','app.services',])

example.config(function($ionicConfigProvider, $sceDelegateProvider){


  $sceDelegateProvider.resourceUrlWhitelist([ 'self','*://www.youtube.com/**', '*://player.vimeo.com/video/**']);

})

example.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

/*
  This directive is used to disable the "drag to open" functionality of the Side-Menu
  when you are dragging a Slider component.
*/
example.directive('disableSideMenuDrag', ['$ionicSideMenuDelegate', '$rootScope', function($ionicSideMenuDelegate, $rootScope) {
    return {
        restrict: "A",
        controller: ['$scope', '$element', '$attrs', function ($scope, $element, $attrs) {

            function stopDrag(){
              $ionicSideMenuDelegate.canDragContent(false);
            }

            function allowDrag(){
              $ionicSideMenuDelegate.canDragContent(true);
            }

            $rootScope.$on('$ionicSlides.slideChangeEnd', allowDrag);
            $element.on('touchstart', stopDrag);
            $element.on('touchend', allowDrag);
            $element.on('mousedown', stopDrag);
            $element.on('mouseup', allowDrag);

        }]
    };
}])

/*
  This directive is used to open regular and dynamic href links inside of inappbrowser.
*/
example.directive('hrefInappbrowser', function() {
  return {
    restrict: 'A',
    replace: false,
    transclude: false,
    link: function(scope, element, attrs) {
      var href = attrs['hrefInappbrowser'];

      attrs.$observe('hrefInappbrowser', function(val){
        href = val;
      });

      element.bind('click', function (event) {

        window.open(href, '_system', 'location=yes');

        event.preventDefault();
        event.stopPropagation();

      });
    }
  };
})

example.factory("Example", function ExampleFactory() {

  var val = '';

  return {
    save: function(valor) {
      val = valor;
    }
  };
});

example.controller("ExampleController", function($scope, $rootScope, Example) {
    $scope.cafe = [];
    $scope.almoco = [];
    $scope.jantar = [];
    //$scope.tamanho;
    /*
    $scope.$on('HitDB', function(ev, data) {
      $scope.lst = ['a', 'b'];
      console.log("asdasdaaa");
      $scope.$apply();
    });
    */
    $scope.safeApply = function(fn) {
      var phase = this.$root.$$phase;
      if(phase == '$apply' || phase == '$digest') {
        if(fn && (typeof(fn) === 'function')) {
          fn();
        }
      } else {
        this.$apply(fn);
      }
    };

    $scope.resp = function(dia) {
        switch (dia) {
          case 1:
            dia = "segunda";
            break;
          case 2:
            dia = "terca";
            break;
          case 3:
            dia = "quarta";
            break;
          case 4:
            dia = "quinta";
            break;
          case 5:
            dia = "sexta";
            break;
          case 6:
            dia = "sabado";
            break;
          case 7:
            dia = "domingo";
            break;
        }
        var PeopleObject = new Parse.Object(dia);
        var query = new Parse.Query(PeopleObject);
        query.find({
                    success: function(results) {
                        Example.save(results);
                        var n_cafe = 0;
                        var n_almoco = 0;
                        var n_jantar = 0;
                        for (var i = 0; i < results.length; i++) {

                            var temp1 = results[i].get("cafe");
                            var temp2 = results[i].get("almoco");
                            var temp3 = results[i].get("jantar");

                            if (temp1 != null && temp1 != '') {$scope.cafe[n_cafe] = temp1; n_cafe++;}
                            if (temp2 != null && temp2 != '') {$scope.almoco[n_almoco] = temp2; n_almoco++;}
                            if (temp3 != null && temp3 != '') {$scope.jantar[n_jantar] = temp3; n_jantar++;}
                        }
                        //$scope.safeApply();
                        $scope.Apply();
                        //results.saveEventually();
                    },
                    error: function(error) {
                        console.log("Error: " + error.code + " " + error.message);
                    }
        });
    }

    $scope.today = (new Date()).getDay();
});
