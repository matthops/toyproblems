// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let vowels = ["a", "e", "i", "u", "o" ];
  let arr = str.split("");
  let newArr = [];
  
    arr.forEach( (letter, index) => {
      for(var i = 0; i <= vowels.length - 1 ; i++){
           vowels[i] === letter.toLowerCase() ? newArr.push(index) : null;
      };
    })
    console.log("newarr", newArr)
  
  for(var i = newArr.length -1; i>= 0; i-- ){
    console.log("newArr[i]", newArr[i])
    arr.splice(newArr[i], 1)
  }
  
    
    return arr.join("");
  }


//Please refer to two example above and write your first JS function.

//mission 1:

//use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

//mission 2:

//use keyword var to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

//mission 3:

//type the console.log() in the next line(don't forget to put the str in the brackets).

//When you have finished the work, click "Run Tests" to see if your code is working properly.

//In the end, click "Submit" to submit your code pass this kata.

function helloWorld() {
  var str = "Hello World!";
  console.log(str);
}

//I've written five function ```equal1,equal2,equal3,equal4,equal5```, defines six global variables ```v1 v2 v3 v4 v5 v6```, every function has two local variables ```a,b```, please set the appropriate value for the two variables(select from v1--v6), making these function return value equal to 100. the function equal1 is completed, please refer to this example  to complete the following functions.

//When you have finished the work, click "Run Tests" to see if your code is working properly.

//In the end, click "Submit" to submit your code pass this kata.

var v1 = 50;
(v2 = 100), (v3 = 150), (v4 = 200), (v5 = 2), (v6 = 250);
function equal1() {
  var a = v1;
  var b = v1;
  return a + b;
}
//Please refer to the example above to complete the following functions
function equal2() {
  var a = v3; //set number value to a
  var b = v1; //set number value to b
  return a - b;
}
function equal3() {
  var a = v5; //set number value to a
  var b = v1; //set number value to b
  return a * b;
}
function equal4() {
  var a = v4; //set number value to a
  var b = v5; //set number value to b
  return a / b;
}
function equal5() {
  var a = v2; //set number value to a
  var b = v4; //set number value to b
  return a % b;
}

// Write a function that rearranges an integer into its largest possible value.

// superSize(123456) //654321
// superSize(105) // 510
// superSize(12) // 21
// If the argument passed through is single digit or is already the maximum possible integer, your function should simply return it.

function superSize(num) {
  let splitNum = ("" + num)
    .split("")
    .sort()
    .reverse()
    .join("");
  return parseInt(splitNum);
}
