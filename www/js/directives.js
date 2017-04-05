angular.module('app.directives', [])

.directive('setItemColor', function($compile){
        return{
            restrict: 'A',
            link: function(scope, element, attrs){
                if( scope.it.getId()%7 === scope.today.getDay() && scope.it.getId()!==0)
                    element.addClass("item-balanced");
            }
        };
});
