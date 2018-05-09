myApp.controller('CadastroCtrl', ['$scope', '$http', function($scope, $http) {
    let apiURL = 'http://localhost:8000/users/';
    let order = "-";

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

    $scope.resetNewUserForm = function(form) {
        form.$setPristine();
        form.$setUntouched();
        $scope.newUser.name = '';
        $scope.newUser.email = '';
        $scope.newUser.password = '';
        $scope.newUser.phone = '';
    }

    $scope.updateAllUsers = function() {
        $http.get(apiURL)
            .then(function successCallback(response) {
                $scope.users = response.data;
                console.log("updateAllUsers deu certo com status:");
                console.log(response.status, response.statusText);
                console.log($scope.users);
            }, function errorCallback(response) {
                console.log("updateAllUsers retornou o erro:");
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

    $scope.saveNewUser = function(form) {
        $http.post(apiURL, $scope.newUser)
            .then(function successCallback(response) {
                console.log(response.status, response.statusText);
                $scope.updateAllUsers();
                $scope.newUser = {};
                form.$setPristine();
                form.$setUntouched();
                console.log($scope.newUser);
            }, function errorCallback(response) {
                console.log("Deu ruim :(((");
                console.log(response.status, response.statusText);
                $scope.newUser = {};
                form.$setPristine();
                form.$setUntouched();
                console.log($scope.newUser);
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
        if (order == "+") {
            order = "-";
        } else {
            order = "+";
        }
        $scope.customOrderBy = order + customOrderBy;
        console.log("Ordenando users por " + order + customOrderBy);
    }
}]);
