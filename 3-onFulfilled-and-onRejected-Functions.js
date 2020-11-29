const {checkInventory} = require('./3.1-helper.js');

const order = [['sunglasses', 1], ['bags', 2]];

/* 1:
 * Take a look at the provided code. We require in a 
 * function, checkInventory().
 * 
 * If you’d like, look at the 3.1-helper.js file to see
 * how it works.
 */ 

/* 2:
 * Write a function, handleSuccess(). 
 * You’ll use this function later on as your 
 * success handler. 
 * 
 * handleSuccess() should have one parameter, 
 * representing a resolved value. 
 * 
 * Inside the body of handleSuccess(), 
 * log the parameter to the console.
 */ 

// Write your code here:
//let handleSuccess = function(resolvedValue){
 // console.log(resolvedValue)
//}

/* 3:
 * Write a function, handleFailure(). 
 * You’ll use this function later on as your 
 * failure handler. 
 * 
 * handleFailure() should have one parameter, 
 * representing a rejection reason. 
 * 
 * Inside the body of handleFailure(), 
 * log the parameter to the console.
 */ 

// Write your code here:
//let handleFailure = function(rejectedValue){
//console.log(rejectedValue)
///}

/* 4: 
 * Invoke checkInventory() with order. 
 * This will return a promise. 
 * Attach a .then() function to this. 
 * Pass into .then() the two handlers you wrote as 
 * callback functions.
 */

// Write your code here:

//checkInventory(order).then(handleSuccess, handleFailure);
//iki then kullanmanın yolu (a.then(okey).then(null,(fail))


async function check(){

  try{
const check = await checkInventory(order)
  
    console.log(check);

  }catch(err){console.log(err)}
}

check()
module.exports=order;