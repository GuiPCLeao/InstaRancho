angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams','$element',
// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $element) {
    $scope.today = new Date();
    $scope.lastmonday = new Date($scope.today);
    $scope.lastmonday.setDate($scope.today.getDate()-$scope.today.getDay()+1);

    function sideMenuItem(date,name=""){
        this._date = new Date();
        this._date.setDate(date.getDate());
        this._date.setMonth(date.getMonth());

        this._uisreflist = [
            "tabs.home",
            "segundaFeira",
            "tercaFeira",
            "quartaFeira",
            "quintaFeira",
            "sextaFeira",
            "sabado",
            "domingo"
        ];

        if(name==""){
            this._id = (date.getDay()-1+7)%7 +1;
            switch(date.getDay()){
                case 0: this._name = "Domingo"; break;
                case 1: this._name = "Segunda-Feira"; break;
                case 2: this._name = "Terça-Feira"; break;
                case 3: this._name = "Quarta-Feira"; break;
                case 4: this._name = "Quinta-Feira"; break;
                case 5: this._name = "Sexta-Feira"; break;
                case 6: this._name = "Sábado"; break;
                default: this._name = "undefined"; break;
            }
        }
        else{
            this._id = 0;
            this._name = name;
        }

        this.getDayName = function() {
            return this._name;
        }
        this.getUiSRef = function() {
            return this._uisreflist[this._id];
        }
        this.getId = function(){
            return this._id;
        }
        this.getFormatedDate = function(){
            var d = this._date.getDate().toString(), m = (this._date.getMonth()+1).toString();
            if(d.length<2)
                d = "0"+d;
            if(m.length<2)
                m = "0"+m;
            return d + "/" + m;
        }
    }

    $scope.sidemenuitens = [];
    $scope.sidemenuitens[0] = new sideMenuItem($scope.today,"Hoje");
    for(var i=0; i<7; i++){
        var d = new Date();
        d.setDate($scope.lastmonday.getDate()+i);
        $scope.sidemenuitens[i+1] = new sideMenuItem(d);
    }

}])

.controller('homeCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('segundaFeiraCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('tercaFeiraCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('quartaFeiraCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('quintaFeiraCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('sextaFeiraCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('sabadoCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('domingoCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('cafeCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('almocoCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('jantarCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('ceiaCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])

.controller('noticiasCtrl', ['$scope', '$stateParams',

function ($scope, $stateParams) {


}])
