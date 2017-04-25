console.log('JQ');

// var cards = ['1 spades', '2 spades', '3 spades', '4 spades', '5 spades'];

$(document).ready(function() {
    $('#buttonHere').on('click', function(){
      // console.log('on click for buttonHere' );
      // get text from element with id of textIn
      // var outPutText = $('#textIn').val();
      // $('p').empty();
      // console.log(outPutText);
      // put it in the DOM
      $( '#outPutList').append('<li>' + $('#textIn').val() + '</li>');
      // clear out input
      $( '#textIn' ).val( '' );
  });

      // another button that adds to the same list?
      $('#buttonOverHere').on( 'click', function() {

        // var MoreOutPutText = $('#secondTextIn').val();

        $( '#OtherOutPutList').append('<li>' + $('#secondTextIn').val() + '</li>');

        $( '#secondTextIn' ).val( '' );
      });


      // cards button
      $('#cardButton').on( 'click', function(){

      $('#cardsList').append('<li>' + $('#cardText').val());

      $('#cardText').val('');
      });

     // end buttonHere on click
    var blackJack = function() {
    var firstDeal = Math.random();
    var secondDeal = Math.random();
    return score1 * score2;

};
blackJack();

    var displayCards = function() {
      // console.log('in displayCards');
      // loop through the cards array
      // for each card
      // display as list item in ul with id of #cardsList
      for (var i = 0; i < cards.length; i++) {
        $('#cardsList').append('<li>' + cards[i] + '</li>');
      } // end for

    }; // end displayCards
    displayCards();
}); // displayCards
