var app = angular.module('omniSeason');

app.factory('httpRequestInterceptor', function () {
  return {
    request: function (config) {
      config.headers = {'X-Parse-Application-Id': '2KPaXMwuLXj6IbBqiYQ6IJsOhQLHcqVdoX5q7EqK', 'X-Parse-REST-API-Key': 'l8rlQS7syA4fBl3H8VRkR1Li3QZ6t6aEVti7J93F'}
      return config;
    }
  };
});

app.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                this.value = '';
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });
                event.preventDefault();
            }
        });
    };
});