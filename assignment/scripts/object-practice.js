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
console.log('My last fav food is:', me.favThreeFoods[me.favThreeFoods.length-1]);

/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log(`My original shoe count was: ${me.shoePairCount}`);
console.log('My original shoe count was:', me.shoePairCount);
console.log('I got a new pair of shoes! My shoe count is now:', me.shoePairCount += 1); //should be 13
console.log('I donated 5 pairs of shoes. My shoe count is now:', me.shoePairCount -= 5); //should be 8
console.log('I received 3 new pair of shoes! My shoe count is now:', me.shoePairCount += 3); //should be 11

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

// For Q4 (updating our shoe count), I logged the original value, the value+1 (I was not successful in using ++ to increment by 1), and then decided to see if other operators/numbers would work to change the value of this property. Because of this, I have two questions, first, why wasn't I able to use ++ to increment by one in this situation? and two, why doesn't the value of the property change when I add or subtract other numbers? For example, I increased the original value (12) by 1 (13) and then ran a second log to subtract 5 (I expected to see 8) from the count, but the value logged (7) which is the correct value when based off of the original property value (12). Why don't the values change/update in this situation? For Q 5, adding a new key/value pair to our object, should we be using let to define the new pair? I get an error 'dot' in Atom when I include let, but it doesn't appear when I don't. Is this correct? and if so, why? Also for Q5, when I tried to use a template literal to return 'me' the console logs object, Object? Why is that? and is there a best practice for logging objects? Thanks!!
