---
title: JavaScript
---

Some tutorials on JavaScript:
- [W3 Schools](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_variables1)
- Async lectures from previous semesters: [1](https://vimeo.com/513584741), [2](https://vimeo.com/519265257)

Some examples from class:

## Hello, World
```
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <script>
      // We're calling a built in function called alert, 
      // and passing in a string with "Hello, World!"
      alert('Hello, World!');
    </script>
  </body>
</html>
```

## Call and Response
```
// Declare a variable that will change called response
// and set its value to an empty string (containing nothing)
let response = '';

// Declare a variable called name (that is a constant 
// and will not change). Set its value to the result of
// calling a function prompt. We pass into prompt a parameter
// containing a string asking for your name.
const name = prompt('What is your name?');

// Another prompt, but this time sets the string into a
// constant variable called agePrompt first, and then calls
// prompt with the variable.
const agePrompt = 'What is your age';
const age = prompt(agePrompt);

// Declares ageNumber as the result of a built in function 
// parseInt, which takes as parameter the age variable and
// returns a number instead of a string
const ageNumber = parseInt(age);
// Sets ageFuture to the sum of ageNumber and 10.
const ageFuture = ageNumber + 10;

// Sets the value of response that we declared above
// and builds a string using string concatenation.
response = 'Hello ' + name + '.\n';
response = response + 'You are ' + ageNumber + ' today.\n';
response = response + 'You will be ' + ageFuture + ' in 10 years.';

// Calls the function alert and passes in as a
// parameter, response
alert(response);
```

## Calculator
```
// We declare a function called ageCalculator.
// It takes as input a parameter variable named age.
// We then set variables based on this input parameter
// and calculate the age in the future by 10 years.
// The last line returns the final value to the piece
// of code that called this function.
const ageCalculator = (age) => {
	const ageNumber = parseInt(age);
	const ageFuture = ageNumber + 10;
	return ageFuture;
};

let response = '';

const name = prompt('What is your name?');

const agePrompt = 'What is your age';
const ageValue = prompt(agePrompt);
// This is where we call ageCalculator, a function
// that we defined. Note that we are passing in
// as a parameter, ageValue. This gets interpreted
// by the function we are calling by getting the value of
// ageValue and setting its parameter variable age to that value.
// The return of that function is then set to ageFuture here
// and we can use it in subsequent operations.
const ageFuture = ageCalculator(ageValue);

response = 'Hello ' + name + '.\n';
response = response + 'You are ' + ageNumber + ' today.\n';
response = response + 'You will be ' + ageFuture + ' in 10 years.';

alert(response);
```

## Color on Click
```
<!DOCTYPE html>
<html>
    <head>
        <style>
            .rect {
                width: 100px;
                height: 100px;
                background-color: red;
            }
        </style>
    </head>
    <body>
        <div class="rect"></div>
        <script>
            // Sets a constant variable r to the value of
            // calling the function document.querySelector
            // with the parameter being a CSS selector.
            // This parameter is a string containing .rect.
            // This function is part of the document JS
            // object and will return the first element
            // that matches this css selector.
            const r = document.querySelector('.rect');

            // r is now an HTML element with properties
            // and functions you can access which are tied
            // directly to that element. One such property
            // is the style property. style contains all
            // the inline css that is associated with
            // that element. Itself has additional properties
            // which are all the CSS properties, such as
            // backgroundColor. Note that in CSS
            // this would have read background-color. But
            // JavaScript camelCases to backgroundColor.
            //
            // We set the value of backgroundColor to a string
            // whose value is the color green.
            r.style.backgroundColor = 'green';

            // We can also call a function that is a
            // property of r. addEventListener is a function
            // which will execute whenever a certain event
            // is performed by the user onto r. As a 
            // reminder, r is the rect HTMl element.
            // This function takes 2 parameters: the first is
            // a string indicating the event type, in this case
            // a click on the element. The second parameter
            // is the function that gets called when the event
            // occurs. This is an example a function which
            // takes no parameters and has no name. It is called
            // an anonymous function. 
            r.addEventListener('click', () => {

                // This function gets called when the element
                // is clicked. This is a conditional (if/else)
                // statement. When it runs, it checks if the
                // value of the backgroundColor is green. 
                // == is an equality check operator. Note 
                // the two equals signs. If this evaluates to 
                // true, then the first block of code, setting 
                // the background color to blue is executed. 
                // If this is NOT true, then the second block 
                // is executed. One thing to note about 
                // if/else statements is that only one block 
                // will ever be executed at a time.
                if (r.style.backgroundColor == 'green') {
                    r.style.backgroundColor = 'blue';
                } else {
                    r.style.backgroundColor = green';
                }
            });
        </script>
    </body>
</html>
```

## Random Color on click
```
<!DOCTYPE html>
<html>
    <head>
        <style>
            .text {
                font-size: 100px;
            }
        </style>
    </head>
    <body>
        <div class="text">Hello</div>
        <script>
            let textEl = document.querySelector('.text');
            
            // Here we declare a function called colorChange
            // It does not take any input, but will modify
            // an existing variable textEl and set its color
            // randomly.
            let colorChange = () => {
                // We declare an array called colors, 
                // with 4 strings. To access the first element 
                // in the array, we would write colors[0]. To 
                // access the second element, we  would write 
                // colors[1] and so on.
                let colors = ['red', 'green', 'blue', 'purple'];

                // We call a built in Math function 
                // called random(). random will generate a 
                // number between 0 and 1. We then multiply 
                // it by the valid indicies in the array 
                // (between 0 and 3). To make it less brittle,
                // we can also calculate this by getting the 
                // length of the colors array and subtracting 1.
                let random = Math.random() * (colors.length - 1);

                // We now have a random number that will be 
                // between 0 and 3, but it will contain 
                // decimals.  In order to access the array 
                // correctly, we have  to round this number.
                let roundedRandom = Math.round(random);

                // Once we have rounded the number, 
                // we can set randomColor to the value
                // of the array at index roundedRandom.
                // roundedRandom will either be 0, 1, 2, or 3
                // and will change each time colorChange
                // is called.
                let randomColor = colors[roundedRandom];

                // Finally we set the color of textEl to 
                // random color.
                textEl.style.color = randomColor;
            }

            // We add an event listener to the textEl variable
            // which will get called every time it is clicked.
            // The second parameter is the function that gets
            // called and instead of having an anonymous
            // function like the example before, we actually
            // provide a variable, which we declared previously
            // as a function.
            textEl.addEventListener('click', colorChange);
        </script>
    </body>
</html>
```