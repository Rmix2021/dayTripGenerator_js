"use strict";

// variables

let destination = whereToGo();
let restaurant = whatToEat();
let transportation = howToGo();
let randomToDo = whatToDo();
let userInput = confirmationWindow();


// functions

function confirmationWindow(){
	let userInput = confirm("You will go to " + destination + " via " + transportation + " where you will eat at the local " + restaurant + " . " + "After that you can meet some friends at the " + randomToDo);
	return userInput;
}

function getRandomDayTrip(){
	if(userInput === true){
		console.log("I went to " + destination + " via " + transportation + " where I ate at the local " + restaurant + " . " + "After that I met some friends at the " +	randomToDo);
	}
	else{
		window.location = "file:///D:/Projects/Dev%20Code%20Camp/devcodeclass/dayTripGenerator/dayTripGenerator.html";
}
}


function whereToGo(){
	let destinationsArray = ['Berlin','Frankfurt','Nurnburg','Munchen'];
	let randomDestination = destinationsArray[ Math.floor(Math.random() * destinationsArray.length) ];
	return randomDestination;
}

function whatToEat(){
	let restaurantsArray = ['Mcdonalds', 'Gastatte', 'Pizzaria', 'Ginos'];
	let randomEatery = restaurantsArray[ Math.floor(Math.random() * restaurantsArray.length) ];
	return randomEatery;
}

function howToGo(){
	let transportationsArray = ['Car', 'Bike','Motorcycle','Train', 'Bus'];
	let randomModeOfTransport = transportationsArray[ Math.floor(Math.random() *transportationsArray.length) ];
	return randomModeOfTransport;
}

function whatToDo(){
	let entertainmentArray = ['Movie Theater', 'MiniGolf Course', 'Bowling Alley', 'Bar', 'BocceBall Tournament'];
	let randomToDo = entertainmentArray[ Math.floor(Math.random() * entertainmentArray.length) ];
	return randomToDo;
}

getRandomDayTrip();


// variables
// constructors
// methods/functions