angular.module('app.directives', [])

/*.directive('setUiSref', [ function(){
        return{
            restrict: 'A',
            link: function(scope, element, attrs, controller){
                element.removeAttr("ui-sref");
                element.attr("ui-sref","segundafeira");
            }
        };
}]);*/

.directive('setItemColor', function($compile){
        return{
            restrict: 'A',
            link: function(scope, element, attrs){
                if( scope.it.getId()%7 === scope.today.getDay())
                    element.addClass("item-balanced");
                if(scope.it.getId() == 0){
                    if(element.attr("menuClose"))
                        return;
                    else{
                        console.log(scope.it.getId());
                        console.log(attrs.menuClose);
                        //var newel = $compile()($scope);
                        element.attr("menuClose", "");
                        //$compile(element)(scope);
                    }
                }
            }
        };
});
