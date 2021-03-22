console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  // TODO - add properties here
  firstName: 'Shyla',
  lastName: 'Earl',
  hasSiblings: true,
  shoePairCount: 12,
  bootPairCount: 10,
  slippaPairCount: 4,
  highHeelPairCount: 0,
  favThreeFoods: ['pho ga', 'sushi', 'lau lau'],
  favThreeActivites: ['camping', 'kayaking', 'wildcrafting plant medicine']
};

console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = me.firstName + ' ' + me.lastName;

console.log('What is my full name?', fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log('My first fav food is:', me.favThreeFoods[0]);
console.log('My last fav food is:', me.favThreeFoods[2]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log(`My original shoe count was: ${me.shoePairCount}`);
console.log('My original shoe count was:', me.shoePairCount);
console.log('I got a new pair of shoes! My shoe count is now:', me.shoePairCount+1); //should be 13
console.log('I donated 5 pairs of shoes. My shoe count is now:', me.shoePairCount-5); //should be 8
console.log('I received 3 new pair of shoes! My shoe count is now:', me.shoePairCount+3); //should be 11

//ask question about math and variable values here!

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/

me.favoriteColor = 'red';
//why don't we need to use let here to declare a new property?
console.log('updated fav color', me);
console.log(`updated fav color ${me}`); //why does this return 'object Object'?
console.log(`updated fav color ${me.favoriteColor}`);


//***EXTRA WORK***
//function from Dev's video
let card0 = {
  suit: 'Hearts',
  number: 9
}; //end card0

let card1 = {
  suit: 'Spades',
  number: 5
}; //end card1

let card2 = {
  suit: 'Clubs',
  number: '10'
}; //end card2

//function to check which card object(argument) has the highest number
function highNumber(c0, c1){
  if(c0.number > c1.number){
    return c0;
  } else {
    return c1;
  } //end conditional
} //end highNumber function

console.log('testing highNumber', highNumber(card0, card1)); //card0
console.log('testing highNumber', highNumber(card0, card2)); //card2
console.log('testing highNumber', highNumber(card2, card1)); //card2
