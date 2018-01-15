(function(window){
  var library = {};

  library.alert = function() {
    alert('Alert from Library');
  }

  window.$l = library;

  console.log('Library Loaded...');
})(window);
