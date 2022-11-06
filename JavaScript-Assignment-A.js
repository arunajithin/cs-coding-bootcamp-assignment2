/*
     JavaScript Assignment A
     ASSIGNMENT NOTES:
     Do not change the code below. 
     Add your code in the 'Answers Section'.
*/

var cities = [
    'Abu Dhabi',
    'Abuja',
    'Cairo',
    '???',
    'Amman',
    'Islamabad',
    'Tokyo',
    'Beirut',
    '???',
    'Ottowa',
    'New Delhi',
    'Brasília'
];

var countries = [
    'UAE',
    'Nigeria',
    'Egypt',
    '???',
    'Jordan',
    'Pakistan',
    'Japan',
    'Lebanon',
    '???',
    'Canada',
    'India',
    'Brazil'
];

/******** Answers Section ********/

// 1. Create a for loop to iterate over 'cities'
for( var index = 0; index < cities.length; index++ ) {
    console.log( cities[index] ) ;
}

// 2. Inside the for loop, console.log() the country for that city (e.g, "Abu Dhabi, UAE")
// Hint: use a counter variable to access both 'cities' and 'countries'
var newArray = [];
for( var i = 0; i < cities.length; i++ ) {
    if(cities[i] !== '???'){ 
        newArray.push(cities[i] + ' , ' + countries[i]);
    }
}
console.log(newArray);

// 3. If the name of a city is missing (i.e there is '???'), use console.log("Oops!")

var newArray2 = [];
for( var j = 0; j < cities.length; j++ ) {
    newArray2.push(cities[j] + ' , ' + countries[j]);
    if(cities[j] === '???' && countries[j] === '???'){
        newArray2.splice(j, 1, 'Oops! , Oops!');
    }
}
console.log(newArray2);

// NOTE: For 2 and 3, use if/else. There should be no '???' in the console!