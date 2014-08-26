'user strict';


app.factory('Post', function($resource) {
  return $resource('https://intense-inferno-61.firebaseio.com/posts/:id.json')  
});
