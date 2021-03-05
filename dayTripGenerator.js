


function runDayGenerator(){

	let destinationFromDestinationsFunction = whereToGo();
	let destinationFromRestaurantsFunction = whatToEat();
	let destinationFromTransportationFunction = howToGo();
	let destinationFromEntertainmentFunction = whatToDo();
	console.log("I went to " + destinationFromDestinationsFunction + " via " +
	destinationFromTransportationFunction +
	 " where I ate at the local " + destinationFromRestaurantsFunction + " . " + "After that I met some friends at the " +
	destinationFromEntertainmentFunction )



}

function whereToGo(){
	let destinations = ['berlin','franfurt','nurnburg','munchen'];
	let randomDestination = destinations[ Math.floor(Math.random() * destinations.length) ];
	return randomDestination;
}

function whatToEat(){
	let restaurants = ['mcdonalds', 'gastatte', 'pizzaria', 'ginos'];
	let randomEatery = restaurants[ Math.floor(Math.random() * restaurants.length) ];
	return randomEatery;
}
function howToGo(){
	let transportation = ['car', 'bike','motorcycle','train', 'bus'];
	let randomModeOfTransport = transportation[ Math.floor(Math.random() *transportation.length) ];
	return randomModeOfTransport;
}
function whatToDo(){
	let entertainment = ['movie theater', 'miniGolf course', 'bowling alley', 'bar', 'bocceBall tournament'];
	let randomToDo = entertainment[ Math.floor(Math.random() * entertainment.length) ];
	return randomToDo;
}






runDayGenerator();
