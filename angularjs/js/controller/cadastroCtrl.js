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

    $scope.updateAllUsers = function() {
        $http.get(apiURL)
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
    }

    $scope.viewUser = function(user) {
        $scope.userBeingViewed = user;
        $scope.userURL = `${apiURL}${user.id}/`;
        $http.put($scope.userURL, $scope.userBeingViewed)
            .then(function successCallback(response) {
                console.log("PUT do botão de editar clicado!")
                console.log(response.status, response.statusText);
                $scope.updateAllUsers();
            }, function errorCallback(response) {
                console.log("PUT do botão de editar deu ruim :(((");
                console.log(response.status, response.statusText);
            });
           
    }

    $scope.editUser = function(user) {
        $scope.userBeingEdited = angular.copy(user);
        $scope.userURL = `${apiURL}${user.id}/`;
    }

    $scope.saveEditedUser = function() {
        $http.put($scope.userURL, $scope.userBeingEdited)
                                .then(function successCallback(response) {
                                    console.log(response.status, response.statusText);
                                    $scope.updateAllUsers();
                                }, function errorCallback(response) {
                                    console.log("Deu ruim :(((");
                                    console.log(response.status, response.statusText);
                                });
    }

    $scope.saveNewUser = function() {
        $http.post(apiURL, $scope.newUser)
            .then(function successCallback(response) {
                console.log(response.status, response.statusText);
                $scope.newUser = new Object();
                $scope.updateAllUsers();
            }, function errorCallback(response) {
                console.log("Deu ruim :(((");
                console.log(response.status, response.statusText);
            });
    }

    $scope.modalDeleteUser = function(user) {
        $scope.userToDelete = user;
        $scope.userToDeleteURL = `${apiURL}${user.id}/`;
    }

    $scope.deleteUser = function() {
        $http.delete($scope.userToDeleteURL)
                                    .then(function successCallback(response) {
                                        console.log(response.status, response.statusText);
                                        $scope.updateAllUsers();
                                    }), function errorCallback(response) {
                                        console.log(response.status, response.statusText);
                                    }
    }

    $scope.orderByMe = function(customOrderBy) {
        $scope.customOrderBy = customOrderBy;
        console.log(customOrderBy);
    }
}]);
