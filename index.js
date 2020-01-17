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