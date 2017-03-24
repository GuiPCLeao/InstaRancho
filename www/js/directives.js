angular.module('app.directives', [])

.directive('setItemColor', function($compile){
        return{
            restrict: 'A',
            link: function(scope, element, attrs){
                if( scope.it.getId()%7 === scope.today.getDay())
                    element.addClass("item-balanced");
            }
        };
});
