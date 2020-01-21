// Functions allow us to write reusable code. 
// We define a chunk of code within the curly brackets that we can execute at a later point.
// 2 step process - We first define and then we run.
//  Can be run once or 1000 times.
// Methods are functions, they are chunks of code that have been wrapped up and been given a name to be called later.

// Define 

function grumpus () {
    console.log("ugh...you again");
    console.log("for the last time");
    console.log("leave me alone");
    
}
// Run 

grumpus()

for ( let i = 0; i < 5; i ++){
    grumpus()
}

// ################################

function rollDie () {
    let roll = Math.floor(Math.random() * 6) + 1
    console.log(`You rolled: ${roll}`);
    
}
rollDie()


function throwDie(num){
    for ( let i = 0; i < num; i ++) {
        // console.log(num);
        rollDie()
        
    }
}
throwDie(4)


// Two parameter function declaration 

function sum (a,b) {
    console.log(a + b);
    
}

sum(4,7)

// Parameters are inputs within parenthesis into a function 
// If no parameters are declared, then the function outputs the same everytime .
// When we execute or call the function, the value that we put in is called an argument.

// Return values 

// Useful because we can capture them in another variable and pass them to another function.

function multiply(a,b) {
    return a * b
}

console.log(multiply(2,4))
const newValue = multiply(2,4)
console.log('New value:', newValue);

// The return statement ends function execution. Any code wrtten after the return will not be run.

function square(a){
    return a * a
    console.log('All done');
    
}
square(4)

// ####################

function isPurple(color){
    if (color.toLowerCase() === 'purple'){
        return true
    }else {
        return false
    }
}
console.log(isPurple('purple'));

// ####################

function isPurple1 (color) {
    if (color.toLowerCase === 'purple') {
        return true
    }
    return false
}
console.log(isPurple1('pink'));

// ####################

function isPurple2 (color) {
    return color.toLowerCase === 'purple'
}

console.log(isPurple2('green'));

// ####################

function containsPurple ( array) {
    for (let color of array){
        if (color === 'purple' || color === 'magenta'){
            return true
        }
    }
    return false
}

console.log(containsPurple(['pink', 'blue', 'purple']))

// ####################

function isValidPassword(password,username) {
    if (password.length < 8) {
        return false
    }
    if (password.indexOf(' ') !== -1) {
        return false
    }
    if (password.indexOf(username) !== -1) {
        return false
    }
    return true
}
console.log(isValidPassword('12345678', '146'));

// or 

function isValidPassword1 (password, username) {
    if (password.length < 8 ||
        password.indexOf(' ') !== -1||
        password.indexOf(username) !== -1) {
            return false
        }
        return true
}
console.log(isValidPassword1('abcdefghi', 'abc'));

// or 

function isValidPassword2 (password, username) {
    const tooShort = password.length < 8
    const hasSpace = password.indexOf(' ') !== -1
    const tooSimilar = password.indexOf(username) !== -1
    if (tooShort || hasSpace || tooSimilar) return false
    return true
}
console.log(isValidPassword2('abc', 'xyz'));

// ##################

function averageValue (array) {
    let total = 0
    for ( let num of array){
        total += num
    }
    let result = total / array.length
    return result
}
console.log(averageValue([50,100]));

// #######################

function isPangram (sentence){
    let newSentence = sentence.toLowerCase()
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(newSentence.indexOf(char) === -1) {
            return false
        }
    }
    return true
}
console.log(isPangram('The five boxing wizards jump quickly'));


function isPangram1 (sentence){
    let newSentence = sentence.toLowerCase()
    for (let char of 'abcdefghijklmnopqrstuvwxyz'){
        if(!newSentence.includes(char)){
            return false
        }
    }
    return true
}
console.log(isPangram1('The five boxing wizard jump quickly'));

// Create a function to randomly pick a number and suit from a deck of cards 

function pick(array){
    const i = Math.floor(Math.random() * array.length)
    return array[i]
}
function getCard() {
    const values = ['1','2','3','4','5','6','7','8','9','10','J','Q','K','A']
    const suits = ['clubs','diamonds','hearts', 'spades']
    const value = pick(values)
    const suit = pick(suits)
    return {value : value, suit : suit}
}
console.log(getCard());


// Scope 

// Variable visibility. The location where a variable is defined dictates where we have access to that variable.

// Function Scope 

// A variable defined within a function is only accessable within that function 

// Example 

function helpMe(){
    let msg = "I'm on fire"
    msg // "I'm on fire"
}

msg // Not defined