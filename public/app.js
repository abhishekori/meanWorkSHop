var app = angular.module('contact',[]);


var contacts=[];

contacts[0] = {};
contacts[0].name = "Abhishek";
contacts[0].email="abhikori@gmail.com";
contacts[0].number=9738439677;

contacts[1] = {};
contacts[1].name="Rahul";
contacts[1].email="Rahul@gmail.com";
contacts[1].number=9738439677;

console.log(contacts);

app.controller('contactCtrl', function ($scope,$http) {

    //console.log(contacts);


    function refresh(){
        $http.get('/get').success(function (response) {

//            console.log(response);
            $scope.contacts=response;
        });
    }

    refresh();

    $scope.add=function(){

  //      console.log($scope.contact);
        var contact=$scope.contact;
        $http.post('/contact',contact).success(function(response) {

    //        console.log(response);
            refresh();

        });
    }

    $scope.remove=function(id){
        $http.delete('/contact/'+id).
            success(function(response){
            console.log(response);
                refresh();
        });
    }

});