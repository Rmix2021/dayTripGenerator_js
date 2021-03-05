


function runDayGenerator(){

	let destinationFromFunction = whereToGo();




}

function whereToGo(){
	let destinations = ['berlin','franfurt','nurnburg','munchen'];
	let randomDestination = destinations[ Math.floor(Math.random() * destinations.length) ];
	return randomDestination;
}

function whattoEato(){
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
	let entertainment = ['movie', 'miniGolf', 'bowling', 'bar', 'bocceBall'];
	let randomToDo = entertainment[ Math.floor(Math.random() * entertainment.length) ];
	return randomToDo;
}






runDayGenerator();
