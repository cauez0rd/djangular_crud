myApp.controller('CadastroCtrl', ['$scope', '$http', function($scope, $http) {
    let apiURL = 'http://localhost:8000/users/';

    let getAllUsers = $http.get(apiURL)
                                        .then(function successCallback(response) {
                                            $scope.users = response.data;
                                            console.log("deu certooo");
                                            console.log(response.status, response.statusText);
                                            console.log($scope.users);
                                        }, function errorCallback(response) {
                                            console.log("Deu ruim :(((");
                                            console.log(response.status, response.statusText);
                                        }    
    )

    $scope.editUser = function(user) {
        let datetimeNow = Date();
        console.log(datetimeNow);
        $scope.userBeingEdited = angular.copy(user);
        $scope.userBeingEdited.viewed_at = '2018-05-01T19:47:25.140929Z'
        console.log($scope.userBeingEdited)
        $scope.userURL = `${apiURL}${user.id}/`;
        //testando post $scope.userURL = `${apiURL}`;

        // atualiza o viewed_at com o momento em que o botão de editar é clicado
        $http.put($scope.userURL, $scope.userBeingEdited)
                                .then(function successCallback(response) {
                                    console.log(response.status, response.statusText);
                                }, function errorCallback(response) {
                                    console.log("Deu ruim :(((");
                                    console.log(response.status, response.statusText);
                                })
        
    }

    $scope.saveEditedUser = function() {
        $http.put($scope.userURL, $scope.userBeingEdited)
                                                    .then(function successCallback(response) {
                                                        console.log(response.status, response.statusText);
                                                        user = $scope.userBeingEdited;
                                                    }, function errorCallback(response) {
                                                        console.log("Deu ruim :(((");
                                                        console.log(response.status, response.statusText);
                                                    });
    }

    // $scope.addNewUser = function() {
    //     $scope    
    // }

    $scope.orderByMe = function(customOrderBy) {
        $scope.customOrderBy = customOrderBy;
        console.log(customOrderBy);
    }
}]);
