let destinations = arr => arr[ Math.floor(Math.random() * arr.length) ];
console.log( destinations(['berlin', 'bodensea', 'nurnberg', 'frankfurt' ]) );

let restaurants = arr => arr[ Math.floor(Math.random() * arr.length) ];
console.log( restaurants(['mcdonalds', 'gastatte', 'pizzaria', 'ginos']) );

let transportations = arr => arr[ Math.floor(Math.random() * arr.length) ];
console.log( transportations(['car', 'bike','motorcycle','train', 'bus']) );

let entertainment = arr => arr[ Math.floor(Math.random() * arr.length) ];
console.log( entertainment(['movie', 'miniGolf', 'bowling', 'bar', 'bocceBall']) );
