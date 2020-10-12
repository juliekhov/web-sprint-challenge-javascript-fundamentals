// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why a nested function can access the variable internally. */


const external = "I'm outside the function";

function myFunction() {
    console.log(external);

    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };

    nestedFunction();
}

let = myFunction();

// Explanation: The function called nestedFunction can reach outside its scope to find context. It reaches out to function myFunciton
// to find the value stored within the string variable internal.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation 
    of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function nextFunc() {

    let num = 0;

    return function summation(n) {
        for (let i = 1; i <= n; i++) {
            num += i;
        }
        console.log(num);
    };
}

let sum = nextFunction();

conole.log(sum(4));