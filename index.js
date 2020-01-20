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

