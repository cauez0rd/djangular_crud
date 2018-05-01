myApp.controller('CadastroCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.usersURL = 'http://localhost:8000/users/';

    var getAllUsers = $http({
                    method: 'GET',
                    url: $scope.usersURL
                }).then(function successCallback(response) {
                    $scope.users = response.data;
                    console.log("Deu certo a call pra api! :D")
                    console.log($scope.users);
                }, function errorCallback(response) {
                    console.log("Deu ruim na call pra API D:");
                });
    
}]);
