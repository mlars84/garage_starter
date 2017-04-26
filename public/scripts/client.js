$( document ).ready( onReady );

function onReady() {
  console.log('onReady');
  getCars();
} // end onReady

function getCars(){
  // get call to server for cars
  $.ajax({
    url: '/cars',
    type: 'GET',
    success: function( response ){
      console.log( 'back from server with:', response );
      $('.container').empty();
      for (var i = 0; i < response.length; i++) {
        $('.container').append('<p>' + response.year + response.make + response.model + '</p>');
      }
      // receive cars array
      // update dom
    } // end success
  }); // end ajax
} // end getCars
