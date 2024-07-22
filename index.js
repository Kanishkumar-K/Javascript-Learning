let name = {
    first: 'Kanish',
    last: 'Kumar'
}

var printName = function(city, state, country) {
    console.log(this.first + " " + this.last + " " + city + " " + state + " " + country);
}

let newFunc = printName.bind(name, 'Chennai', 'TamilNadu', 'India'); 

console.log(newFunc); // [Function: bound printName]

newFunc(); 
// Output: Kanish Kumar Chennai TamilNadu India
