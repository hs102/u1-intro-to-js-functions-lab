// Exercise 1: maxOfTwoNumbers()

const maxOfTwoNumbers = (x, y) => {
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));


/*Exercise 2: isAdult



Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/


function isAdult(age) {

if (age >=18) { return `unc` }

else { return `fortnite generation`}



}


console.log('Exercise 2 Result:', isAdult(21));
console.log('Exercise 2 Result:', isAdult(12));



/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/



// aeiou

function isCharAVowel(char) {
  
  if (char == 'a'||char == 'e'||char == 'i'||char == 'o'||char == 'u' ) {return ('is a vowel') }

    else { return('is not a vowel') }

    
}

console.log('Exercise 3 Result:', isCharAVowel("a"));



/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/


function generateEmail(name, domain) {

return `${name}@${domain}`;

}

console.log('Exercise 4 Result:', generateEmail("johnsmith", "example.com"));



/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/

function greetUser(name, timeOfDay) {

    if (timeOfDay === "morning") {
        return `Good morning, ${name}!`
    }

    else if (timeOfDay === "afternoon") {
        return `Good afternoon, ${name}!`
    }
    else if (timeOfDay === "evening") {
        return `Good evening, ${name}!`}

}

console.log('Exercise 5 Result:', greetUser("Sam", "morning"));



/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

function maxOfThree(num1, num2, num3) {

 if (num1 >= num2 && num1 >= num3) {
    return `biggest number is ${num1}`;
  }
  else if (num2 >= num1 && num2 >= num3) {

    return `biggest number is ${num2}`;
  }
  else if (num3 >= num1 && num3 >= num2) {
    return `biggest number is ${num3}`;
  }

}

console.log('Exercise 6 Result:', maxOfThree(5, 10, 8));


/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/

function calculateTip(billAmount, tipPercentage) {

    return (billAmount * tipPercentage)/100 ;

}

console.log('Exercise 7 Result:', calculateTip(50, 20)); 


/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/


function convertTemperature(temp, scale) {

    if (scale === "C") {
        return (temp * 9/5) + 32

    }
    else if (scale === "F") {
        return (temp - 32) * 5/9
    }


}


console.log('Exercise 8 Result:', convertTemperature(32, "C"));









/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/

function basicCalculator(num1, num2, operation) {

    if (operation === "add") {
        return num1 + num2;
    } 
    else if (operation === "subtract") {
        return num1 - num2;
    }
    else if (operation === "multiply") {
        return num1 * num2;
    }
    else if (operation === "divide") {

        return
    }


}



console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));