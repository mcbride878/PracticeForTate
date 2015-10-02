var app = angular.module('omniSeason', []);

app.config(function($httpProvider){
  $httpProvider.interceptors.push('httpRequestInterceptor');
});
