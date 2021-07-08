
var app = angular.module('applibApp', ['ngRoute']);


app.controller('mainController', function($scope){
    $scope.name = "applibgroup"
})


app.controller('eventController', function($scope, $http, $log){
    $scope.name = "card"
    console.log($scope);
    $scope.img = {
        shareImg: './src/images/share_34.png',
        favouriteImg: './src/images/favourite_34.png',
        eventsDetailImg: './src/images/event_details_image.png',
        onlineEventsImg:'./src/images/online_event_48.png',
        eventbannerImg :'./src/images/events_page.png',
        prizebanner: './src/images/prize720.png',
        event_image: './src/images/event_image.png'
    }
    $http.get("http://localhost:3000/api/v1/events")
         .then(function(response){
             const {result :[data]} = response.data;
             $scope.result = data.data;
             console.log($scope.result)
         })
});


app.controller('eventDescController', function($scope, $http, $routeParams){
     console.log($routeParams.id)
     const id = $routeParams.id
    $http.get(`http://localhost:3000/api/v1/events/${id}`)
          .then(function(response){
              console.log(response.data);
              const {finalData} = response.data;
              $scope.finalData = finalData
          })
})



app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./src/views/home.html"
    })
    .when("/events", {
        templateUrl : "./src/views/events.html",
        controller:'eventController'
      })
    .when("/event-description/:id", {
        templateUrl:"./src/views/event-description.html",
        controller:'eventDescController'
    })
  });
