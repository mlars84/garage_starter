// requires
var express = require( 'express' );
var app = express();
var path = require( 'path' );
var bodyParser = require( 'body-parser' );
var pg = require( 'pg' );

// setup config for the pool
var config = {
  database: 'My Garage',
  host: 'localhost',
  port: 5432,
  max: 12
};

var pool = new pg.Pool( config );

// uses
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( express.static( 'public' ) );

// spin up server
app.listen( 7899, function(){
  console.log( 'server up on: 7899' );
}); // end server up

app.get( '/', function ( req, res ){
  res.sendFile( path.resolve( 'public/views/index.html' ) );
});

app.get( '/cars', function( req, res ){
  console.log( 'in /cars get request' );
  // empty array of cars to push to
  var allCars = [];
  // translate the resultSet of query to the "cars" array
  // after the last row has been pushed send back the object with array

  // connect to DB
  pool.connect( function( err, connection, done ) {
    // check for error
    if( err ){
      console.log( err );
      res.sendStatus( 400 );
    } // end Error
    else{
      console.log( 'connected to DB' );
      // send query to DB that return all cars in the table and hold in a var resultSet
      var resultSet = connection.query( "SELECT * FROM cars" );
      // convert each row into an object in the allCars array
      // on each row, push the row into allCars
      resultSet.on( 'row', function( row ) {
        allCars.push( row );
      }); // end on row
      resultSet.on( 'end', function(){
        // close connection to reopen spot in pool
        done(); // run done before res.send
        // res.send array of cars
        res.send( allCars );
      }); // end on end
    } // end NO ERR
  }); // end pool
}); //end cars get
