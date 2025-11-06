// console.log  ('Tere maailm!');
// window.alert('Mulle ei maitse maks!')

// Kommentaar
/*
Multirealine kommentaar
*/

// document.getElementById('myH1').textContent = 'Tere jälle Georg!';
// document.getElementById('myP').textContent = 'See on minu esimene leht.';

// Muutuja = konteiner, kuhu saab salvestada andmeid
// Käitub nagu silt, millele on kirjutatud mingi info
// Muutuja nimeks võib panna suvalise sõna, aga peab järgima reegleid
// Muutuja nimi ei tohi alata numbriga

// let x=5;

// let age = 23;
// let price=10.99;

// console.log(x);
// console.log (price);
// console.log(age);
// console.log(`Ma olen ${age} aastat vana ja õpin programmeerimist. Hind on ${price} eurot.`);

// IF STATEMENTS = tingimuslause on tõene

// const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

// let age;

// mySubmit.onclick = function() {
//   age = myText.value;
//   age = Number(age);

//   if (age >= 18) {
//     resultElement.textContent = `Oled piisavalt vana, et siseneda veebilehele`;
//   } else if (age == 0) {
//     resultElement.textContent = `Sa ei saa siseneda veebilehele, sest sa ei saa olla 0 aastane`;
//   } else if (age < 18) {
//     resultElement.textContent = `Sa ei ole piisavalt vana, et siseneda veebilehele, aga võid siseneda koos vanemaga.`;
//   } else if (age < 0) {
//     resultElement.textContent = `Su vanus ei saa olla negatiivne!`;
//   } else {
//     resultElement.textContent = `Sa pead olema 18+ et siseneda veebilehele.`;
//   }
// };


// Logical operators = used to combile or manipulate boolean (true/false) values

// AND (&&), OR (||), NOT (!)


// = assignment operator
// == comparison operator (checks value only)
// === strict comparison operator (checks value and type)
// != inequality operator 
// !== strict inequality operatore

//console.log("Hello!");

//console.log("I like pizza!");

//window.alert("This is an alert!");
//window.alert("I like pizza!");

// This is a comment

/* This is also a comment
    Group comment control + K + C
*/

/* 1 TUND!!!!!!!!!!!!!!!!
document.getElementById("myH1").textContent = "Hello!";
document.getElementById("myP").textContent = "I like pizza!";

let x;
x = 123;

console.log(x);

let age = 25;
let price = 10.99;

console.log(`Your are ${age} years old`);
console.log(`The price is $${price}`);



let online = false;
let forSale = true;
let isStudent = true;

console.log("Bro is online");
console.log(forSale);
console.log(isStudent);
*/

// 2 TUND !!!!!!!!!!!!!!! variables
/*
let fullName = "Bro Code";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent = `Your are ${age} yeas old`;
document.getElementById("p3").textContent = `Enrolled: ${isStudent}`;

console.log(document);
console.log(window);

console.log(typeof isStudent);
*/
// arithmetic operators + - * / % ** ++ --

/*
let students = 16;

//students = students + 1;             //LIIDA
//students = students - 2;             //LAHUTA
//students = students * 2;             //KORRUTA
//students = students / 2;             //JAGA   
//students = students ** 2;            //ASTMES
//let extraStudents = students % 3;    //JÄÄK
//students +=2;
//students++
//students
Math.sqrt(students);           //RUUTJUUR 
console.log(Math.sqrt(students));
*/

//let result = 1+2*3+4**2;
//console.log(result);

// How to accept user input
/*
let username;

//username = window.prompt("Enter your username: ");
console.log(username);
document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("myText").value;
  //  console.log(username);
  document.getElementById("myH1").textContent = `Hello ${username}`;
}

*/

// type conversion
/*
//let age = window.prompt("How old are you?");
//age = Number(age);
//age +=1;
//console.log(`You are ${age} years old`);
//console.log(age,typeof age  );

let x = "pizza";
let y = "pizza";
let z = "pizza";

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

*/

// constants
/*
let PI = 3.14159;
let radius;
let circumference;

//radius = window.prompt("Enter the radius of a circle: ");
//radius = Number(radius);

//circumference = 2 * pi * radius;

//console.log(`The circumference is ${circumference}`);

document.getElementById("mySubmit").onclick = function() {
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The circumference is ${circumference} cm`;
}

*/

// COUNTER PROGRAM
/*
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
let count = 0;

increaseBtn.onclick = function() {
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function() {
    count=0;
    countLabel.textContent = count;
}

*/

// MATH

/*
//console.log(Math.PI);
//console.log(Math.sqrt(16));
//console.log(Math.pow(2, 4));
//console.log(Math.E);

let x = 3;
let y = 2;
let z = 1;
//z = Math.round(x);
//z=Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);
//z=Math.pow(y,x);
//z= Math.sqrt(x);
//z=Math.log(x);
//z=Math.sin(x);
//z=Math.cos(x);
//z=Math.tan(x);
//z=Math.abs(x);
//z = Math.sign(x);

let max = Math.max(x,y,z);
let min = Math.min(x,y,z);


console.log(min);
console.log(max);

*/

// terenary operator

/*
let age = 18;
let message = age >= 18 ? "You are an adult" : "You are a minor";

console.log(message);
*/
/*
let time = 16;
let greeting = time < 12 ? "Good morning" : "Good afternoon";

console.log(greeting);

*/

/*
let isStudent = true;
let message = isStudent ? "You are a student":"You are not a student";

console.log(message);
*/

/*
let purchaseAmount = 100;

let discount = purchaseAmount >= 100 ? 10:0;
console.log(`Your total is $${purchaseAmount-purchaseAmount*(discount/100)}`);

*/

// SWITCH - replacement for multiple IF statements

// let day =4;

// switch(day){
//     case 1:
//         console.log("Monday");
//         break;
// case 2:
//         console.log("Tuesday");
//         break;
// case 3:
//         console.log("Wednesday");
//         break;
// case 4:
//         console.log("Thursday");
//         break;
// case 5:
//         console.log("Friday");
//         break;
// case 6:
//         console.log("Saturday");
//         break;
// case 7:
//         console.log("Sunday");
//         break;
// default:
//     console.log("Invalid day");
        
//     }


// const PI = 3.14;

// if(PI===3.14) {
//     console.log ('See on PI');

// }


// else {
//     console.log ('See ei ole PI');
// }





// WHILE LOOPS = repeat some code WHILE some condition is true 


// while loop üksinda

// let username ;

// while(username === "" || username === null) {
//     username = window.prompt (`Enter your name`)
// }

// console.log (`Hello ${username}`);


// DO WHILE loop

// s


// do{

//     username = window.prompt('Enter your username');
//     password = window.prompt('Enter you password');
    
//     if(username === "Georg" && password === "georg"){
//         loggedIn = true;
//         console.log('You are logged in');
//     }
//     else{
//         console.log("Invalid credentials! Please try again");
//     }
// }while(loggedIn)



// FOR LOOP = repeat some code a LIMITED amount of times



// for(let i = 10; i > 0; i--) {
//     console.log(i)
// }
// console.log('Happy new year')

//BREAK = sellel hetkel kui on jõudnud määratud väärtuseni siis loop katestatakse

// for(let i = 1; i <= 20; i++){
//     if(i == 13){

//         break;
//     }
//     else{
//         console.log(i)
//     }

// }

// // CONTINUE = katkestab kui jõuab max väärtuseni 

// for(let i = 1; i <= 20; i++){
//     if(i == 13){
//     continue;
//     }
//     else{
//         console.log(i)
//     }

// }



// FUNKTSIOON = kood mida saab taas kasutada
//              teed koodi ning saad kasutada ükskõik kuna
//              kutsu funktsioon et seda läbi lüüa

// function happyBirthday(username, age) {
//     console.log('Happy birthday to you!')
//     console.log(`Happy birthday dear ${username}!`)
//     console.log(`You are ${age} old!`)
// }

// happyBirthday('Georg', 23);


// function add(x,y){
//     let result = x + y;
//     return result; // võib ka kohe returni panna tehte (return x+y)
// }

// let answer = add(2, 3);
// console.log(answer)


// function isEven(number){
//     if(number % 2 === 0){
//         return true;
//     }
//     else{
//         return false
//     }
// }

// console.log(isEven(18));

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (minNum - maxNum + 1)) + minNum;
// let isGuessed = false

// let attempts = 5;

// while(attempts >= 0 && !isGuessed){
//     let guess = window.prompt ('Arva ära suva number 1-100. Saad 5x arvata');
//     attempts--
//     if(guess === answer){
//         window.alert('Arvasid õigesti!');
//         isGuessed = true;
//     }
//     else if (guess < answer){
//         window.alert('Arvasid valesti! Proovi uuesti');
//     }
//     else if (guess > answer){
//         window.alert('Arvasid valesti! Proovi uuesti')
//     }
//     else{
//         window.alert('Katsed said otsa! :((')
//     }
// }



// FOREACH meetod 

//forEach()= method used to iterate over the elements of an array and apply a specified function (callback) to each element 


// let number = [1, 2, 3, 4, 5];

// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array){
//     array[index] = element * 2;


// }

// function triple(element, index, array){
//     array[index] = element * 3;
// }

// console.log(element)


// let fruits = ["APPLE", "ORANGE", "BANANA", "COCONUT"];


// fruits.forEach(lowerCase);

// fruits.forEach(display);



// // function upperCase(element, index, array){
// //     array[index] = element.toUpperCase();
// // }

// function lowerCase(element, index, array){
//     array[index] = element.toLowerCase();
// }

// function display(element){
//     console.log(element);
// }



// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(cap);
// fruits.forEach(display);

// function cap(element, index, array){
//     array[index] = element.charAt(0).toUpperCase() + element.slice(1);

// }

// function display(element){
//     console.log(element);
// }


//.map() = accepts a callback and applies that function to each element of an array then return a new array

// const numbers = [1,2,3,4,5];

// const cube = numbers.map(cube);

// numbers.map(cube);

// function square(element){
//     return Math.pow(element, 2)
// }

// function cube(element){
//     return Math.pow(element, 3)
// }

// console.log(cube)


// const dates = ["01.02.2025","03.02.2025","02.02.2025" ];

// const formatDates = dates.map(formattedDates);

// console.log(formattedDates);

// function formattedDates(element) {
//     const parts = element.split(".");
//     return `${parts[1]}-${parts[2]}-${parts[3]}`;
// }


// .filter() = creates a new array by filtering out elements 

// const ages = [16, 17, 18, 18, 19, 20, 60];
// const overEighteen = ages.filter(isAdult)

// console.log(overEighteen)

// function isAdult(element) {
//     return element >= 18
// }


// const words = ["APPLE", "ORANGE", "BANANA", "COCONUT"]
// const shortWord = words.filter(getShortWord)

// console.log(shortWord);

// function getShortWord(element){
//     return element.length <= 6
// }


// .reduce() = reduce the elements of an array to a single value
// ACCUMULATOR hoiab mälus seda elementi millega töötad
// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce(sum);

// console.log(`$${total.toFixed(2)}`)

// function sum(accumulator, element){
//     return accumulator + element; 
// }

// const grades = [50, 60, 70, 80, 90]

// const maximum = grades.reduce(parimHinne);
// const minimum = grades.reduce(halvimHinne)

// console.log(minimum)

// function parimHinne(accumulator, element){
//     return Math.max(accumulator, element);
// }

// function halvimHinne(accumulator, element){
//     return Math.min(accumulator, element);
// }




// Function declaration = define a reusable block of code that performs a specific task 


// function hello(){
//     console.log('Hello')
// }


// Function expression = moodus defineerida funktsioone väärtuste ning muutujatena

// const hello = function(){
//     console.log('Hello')
// }


// setTimeout(function(){
//     console.log('Hello!')
// }, 3000)


// const numbers = [1, 2, 3, 4, 5, 6];
// const square= numbers.map(function(element){
//     return Math.pow(element, 2)
// })

// console.log(square);


// arrow functions = a concise way to write function expression

// const hello = (name) => console.log(`Hello, ${name}!`);

// hello("Georg");


// setTimeout( () => console.log('Hello!'), 3000);   


// const numbers = [1, 2, 3, 4, 5, 6];
// const square = numbers.map((element) => Math.pow(element, 2));



// object = a collection of related properties and/or methods
//             objexct = {key: value, function()}

// const person1 = {
//     firstName: "Spongebob", 
//     lastName: "Squarepants",
//     age: 30,
//     isEmplyed: true, 
//     sayHello: function(){console.log("Hi I am Spongebob!")},
// }

// const person2 = {
//     firstName: "Patrick", 
//     lastName: "Star",
//     age: 28,
//     isEmployed: false,
//     sayHello: function(){console.log("Hi I am Patrick!")}, 
// }

// console.log(person1.firstName, person1.lastName);
// console.log(person1.age)

// console.log(person2.firstName, person2.lastName);
// console.log(person2.age, person2.isEmployed)

// person1.sayHello();
// person2.sayHello();


// this = reference to the object where THIS is used 



// const person1 = {
//     firstName: "Spongebob", 
//     lastName: "Squarepants",
//     favFood: "Kraby Patty",
//     sayHello: function(){console.log(`Hi I am ${this.firstName} ${this.lastName}`)},
//     eat: function(){console.log(`I am eating ${this.favFood}!`)},
// }

// person1.sayHello();
// person1.eat();


let shoppingCart = [
    {name: "apple", quantity: 4},
    {name: "banana", quantity: 2},
    {name: "orange", quantity: 5},
    {name: "milk", quantity: 1},
    {name: "bread", quantity: 2},
]

let total = shoppingCart.reduce(sumProducts,0)

let newItem = shoppingCart.push({ name: "yogurt", quantity: 3 }) 



function sumProducts(accumulator, element){
    return accumulator + element.quantity;
}


console.log(shoppingCart)




console.log(total)
















