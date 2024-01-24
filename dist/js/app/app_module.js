var app = angular.module('webApplication', ['ui.mask']);
app.controller("Controller", function ($scope) {
    let option = {
        headers: {
            'Content-Type': "application/x-www-form-urlencoded",
            'X-XSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    };

    $scope.data = [];
    $scope.roadTaxList = [];
    $scope.roadTaxList.length = 1
    // let roadTaxList = $scope.roadTaxList.length;
    $scope.initPage = function () {
        $scope.getSetting();
    };

    $scope.addRoadTaxList = function () {
        $scope.roadTaxList.length ++;
    }

    $scope.submit = function (form) {
        if(form.$valid){
            $scope.submitted = true;
        }
    }
})
   

    
    
   
