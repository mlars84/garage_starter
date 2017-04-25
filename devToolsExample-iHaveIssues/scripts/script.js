// it isn't "necessary" to do a "this script is sourced" log, but I find it useful
console.log( 'script.js sourced' );
// some global variables
var globalNumber = 1.61803398875;
var globalString = 'I exist everywhere!';
// one of the ubiquitous coding mantras is "keep your code DRY"
// DRY = Don't Repeat Yourself
// showLGlobals is an action that will likely be used many times so it has been given its own function
var showGlobals = function() {
  // using a comma to concatenate text ads a space
  console.log( 'the global string is', globalString );
  // using a + does not. Thus the extra space at the end of the string
  console.log( 'the global number is ' + globalNumber );
};

var someMathyThing = function(){
  console.log( 'in someMathyThing' );
  // Math.random() gives a random float between 0 and 1
  // multiply that by 10 for our random number
  var randomNumberBetween0And10 = Math.random() * 10;
  console.log( 'returning:', randomNumberBetween0And10 );
  return randomNumberBetween0And10;
};

var someWordyThing = function(){
  console.log( 'in someWordyThing' );
  // add some text to the global string
  globalString +=  (' added in someWordyThing ');
};

var startMeUp = function(){
  // logging out the function name at the start of a function can be helpful
  console.log( 'in startMeUp' );
  // show out info
};
  showGlobals();
  // call our other functions
  someWordyThing();
  // add some random number to the globalNumber
  globalNumber += someMathyThing();
  showGlobals();
