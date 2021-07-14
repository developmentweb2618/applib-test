
var app = angular.module('applibApp', ['ngRoute','ngSanitize']);


app.controller('mainController', function($scope){
    $scope.name = "applibgroup"
})


app.run(function($rootScope){
    $rootScope.myFunction = function(el){
        $rootScope.i = el;
    };
})

const eventControllerFunction = function($scope, $http, $log){
    $scope.img = {
        shareImg: './src/images/share_34.png',
        favouriteImg: './src/images/favourite_34.png',
        eventsDetailImg: './src/images/event_details_image.png',
        onlineEventsImg:'./src/images/online_event_48.png',
        eventbannerImg :'./src/images/events_page.png',
        prizebanner: './src/images/prize720.png',
        event_image: './src/images/event_image.png'
    }

    


    $scope.eventImg = [

    {imgName:'https://secure.meetupstatic.com/photos/event/7/f/8/d/600_496952653.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/b/9/7/c/600_496247484.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/b/3/5/c/600_495825916.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
    {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'}

    ];


    $http.get("api/v1/events")
         .then(function(response){
             const {result :[data]} = response.data;
             $scope.result = data.data;
         })
};


const popularEventControllerFunction = function($http, $scope){

    
    $scope.eventImg = [

        {imgName:'https://secure.meetupstatic.com/photos/event/b/3/5/c/600_495825916.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/b/9/7/c/600_496247484.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/7/f/8/d/600_496952653.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
        {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'}
        ];

    $http.get("api/v1/events")
         .then(function(response){
             const {result :[data]} = response.data;
             $scope.popularData = data.data;
             console.log($scope.popularData)
         })
   
};

const eventDescControllerFunction =  function($scope, $http, $routeParams, $sce){

    console.log($routeParams.id)
    const id = $routeParams.id;

    $scope.eventImg = [

       {imgName:'https://secure.meetupstatic.com/photos/event/7/f/8/d/600_496952653.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/b/9/7/c/600_496247484.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/b/3/5/c/600_495825916.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/2/4/1/f/600_495309247.jpeg'},
       {imgName:'https://secure.meetupstatic.com/photos/event/3/a/4/5/600_496934917.jpeg'}

    ];



    $scope.videoSrc = [
        {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/3eKRDTPaOzk")}
        // {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/AfhZEDVw64E")},
        // {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/3xIooAquteg")},
        // {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/3xIooAqute")},
        // {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/3xIooAqute")},
        // {videoUrl:$sce.trustAsResourceUrl("https://www.youtube.com/embed/F0vK8JaUTOs")}
    ]


   $http.get(`api/v1/events/${id}`)
         .then(function(response){
             console.log(response.data);
             const {finalData} = response.data;
             $scope.finalData = finalData
         })
};


const homeControllerFunction = function($scope){

    $scope.img = {
        homeBannerImg: './src/images/home_image.png',
        verifiedImg: './src/images/verified.png',
        eventsDetailImg: './src/images/event_details_image.png',
        onlineEventsImg:'./src/images/online_event_48.png',
        onlineEvents:'./src/images/online-events.png',
        shareImg: './src/images/share_34.png',
        favouriteImg: './src/images/favourite_34.png',
        foundingMem : './src/images/founding.png'
    }
}

// CONTROLLER FUNCTIONS


app.controller('eventController', eventControllerFunction);

app.controller('popularEventController', popularEventControllerFunction);

app.controller('eventDescController', eventDescControllerFunction);

app.controller('homeController', homeControllerFunction);

//ROUTERS

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
      templateUrl : "./src/views/home.html",
      controller:'homeController'
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
