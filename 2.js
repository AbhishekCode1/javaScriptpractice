//multiplication by using for loop
function multiply(a,b){
    let result =0;
    for (let i=1; i<=b; i++)
        {
            result +=a; // finnal result = 10a
        }
        return result;
}


let result = multiply(5,10);

console.log(result);
// This is a for loop that iterates from 1 to b (inclusive). The variable i is the loop counter.
// First Iteration (i = 1): result is incremented by a. So, result becomes a.
// Second Iteration (i = 2): result is incremented by a again. Now, result becomes 2a.
// This process continues until the loop counter i reaches b.
// By the end of the loop, result will have been incremented b times by a, which is equivalent to adding a to itself b times. This is the definition of multiplication: a multiplied by b.
//After the loop finishes, the function returns the value of result, which is a * b.