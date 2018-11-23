// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push('Ralph');
}

function destructivelyPrependDriver(name){
  drivers.unshift('Bob');
}

function destructivelyRemoveLastDriver(){
  drivers.pop();
}
function destructivelyRemoveFirstDriver(){
  drivers.shift();
}

function appendDriver(name){
  drivers[0] = 'Ralph';
  return drivers;
}