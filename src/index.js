/*
1)
Declare a function called theCoders that takes a driver and a navigator as arguments and prints out "The awesome coders for today is the driver Jennie and the navigator Alfons" 
Where Jennie represents the first argument passed in and Alfons the second.
When you've set that up, invoke the function to see if it works.
*/

const theCoders = (driver, navigator) => {
    console.log(
      `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
    );
  };

  theCoders("jennie", "alfons");
  /*
  2)
  Pass in only ONE name when you call the function and see what happens.
  (HINT, you should get undefined...)
  */

  const theCodersOne = (driver, navigator) => {
  console.log(
    `The awesome coders for today is the driver ${driver} and the navigator ${navigator}`
    );
};

theCodersOne("jennie")
  
  /*
  3) 
  create a function that checks which name is the longest when comparing the coders 
  and print out: "The driver has the longest name." or "The navigator has the longest name" 
  or if the names ar the same length "The driver and the navigator has equally long names"
  */
 

  const compareNames = (driver, navigator) => {
    const driverLength = driver.length;
    const navigatorLength = navigator.length;

    if (driverLength > navigatorLength) {
      console.log("The driver has the longest name");
    } else if (navigatorLength > driverLength) {
      console.log("The navigator has the longest name")
    } else {
      console.log("The driver and the navigator has equally long names")
    }
  }

  compareNames("jennie", "alfons");

 


  /*
  4) 
  to get user input you can use the prompt() and then store that into a variable.
  Such as 
  let userAge = prompt('How old are you?')
  Create a function that prompts the user for its age, then depending on the age will alert back different messages such as 
  alert('wow you are 33! that's young!')
  or alert('23! Younger than Zlatan') or something like that.
  Add as many conditonals as you want.
  */
  
const userInput = prompt("Hello! Let´s find out the type of group based on your age")

let userAge = parseInt(userInput)


if(!isNaN(userAge)) {
if (userAge <= 20) {
  alert(userAge +  "is for The Wacky Whippersnapper 😎")
} else if (userAge <=40) {
  alert(userAge + " calls for The Zany Zoomers 🤩")
} else {
  alert(userAge + " is for The Silly Seniors 🤑")
} 
} else {
    alert("Invalid input. Please enter a valid age")
}





  const calculationTest = () => {

    //generate a random math question

    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    const operators = ['+', '-']
    const operator = operators[Math.floor(Math.random() * operators.length)];

let correctAnswer;
if (operator === '+') {
  correctAnswer = num1 + num2;
} else {
  correctAnswer = num1 - num2;
}


const userAnswer = parseInt(prompt(`What is ${num1} ${operator} ${num2}`));

if(!isNaN(userAnswer)) {
  if (userAnswer === correctAnswer) {
    alert("Yay! You are correct.")
  } else {
    alert(`Nooo, the answer is ${correctAnswer}`);
    //lesson learned if we use single quotes insted of backtiks the answer is not interpreted as a varible  but as a string. Also windows keyboard does not have a dedicated backstick
  }
} else {
  alert('Invalid input. Please enter a number')
}
  };

  calculationTest();


    /*
    5)
    In this function we want to give the user a mathematical calculation to 
    give us the answer to. Something like prompt('What is 5 + 6?')  
    If the answer is correct, congratulate the user. 'Yay! Correct'
    If not, give the user the correct answer so they can learn. 'Noooo, the answer is 11'
    You choose if to use addition, subtraction, multiplication or division. 
    */
  
  
  /*
  6) **BONUS**
  Make the calculation machine we just made show random calculations everytime you invoke the function.
  But hey, maybe limit the randomness to be numbers between 0-10?
  */
  