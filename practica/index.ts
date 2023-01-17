
//  Ejercicio 4
const genericFunc = <T>(items:Array<T>) => {
  const result = [...items];
  result.shift();
  return result;
}

console.log();
console.log("::: EJERCICIO 4 :::");

const strings:string[] = ["a", "b", "c"];
const numbers: number[] = [1, 2, 3];
const resultStrings = genericFunc(strings);
const resultNumbers = genericFunc(numbers);
console.log("Strings:", resultStrings);
console.log("Numbers:", resultNumbers);

//  Ejercicio 3
interface Car {
  tires: number;
  turnOnEngine: () => void;
  pressPedal: () => void;
}

interface Motorcycle {
  tires: number;
  turnOnEngine: () => void;
  openThrottle: () => void;
}

const isCar = (vehicle: Car | Motorcycle): vehicle is Car => {
  return (vehicle as Car).pressPedal !== undefined; 
}

const doItVehicle = (vehicle: Car | Motorcycle) => {
  vehicle.turnOnEngine();
  if (isCar(vehicle)) {
    vehicle.pressPedal();
  }
  else {
    vehicle.openThrottle();
  }
}

console.log();
console.log("::: EJERCICIO 3 :::");
const car:Car = {
  tires: 4,
  turnOnEngine() {
    console.log("Engine turned on.");
  },
  pressPedal() {
    console.log("Pedal pressed.");
  }
}

const motorcycle:Motorcycle = {
  tires: 2,
  turnOnEngine() {
    console.log("Engine turned on.")
  },
  openThrottle() {
    console.log("Throttle opened.");
  },
}

doItVehicle(car);
doItVehicle(motorcycle);


//  Ejercicio 2
const sumOrConcatenate = <S, N>(param1:S, param2:N) => {
  let result: string | number;
  if (typeof param1 === "number" && typeof param2 === "number" ) {
    result = param1 + param2;
  }
  else if (typeof param1 === "string" && typeof param2 === "string" ) {
    result = `${param1} - ${param2}`;
  }
  else {
    result = `${param1} : ${param2}`;
  }
  return result;
}

console.log();
console.log("::: EJERCICIO 2 :::");
const twoStrings = sumOrConcatenate("1", "2");
const twoNumbers = sumOrConcatenate(1, 2);
const mixed = sumOrConcatenate("1", 2);
const otherMix = sumOrConcatenate(1, "2");

console.log("twoStrings:", twoStrings);
console.log("twoNumbers:", twoNumbers);
console.log("mixed:", mixed);
console.log("otherMix:", otherMix);


// Ejercicio 1
interface Person {
  name: string;
  age: number;
  profession: string;
}
const doIt = (person:Person): string | number[] => {
  return Object.values(person);
}
const doItGen = <T>(person:Person): Array<T> => {
  return Object.values(person);
}
const someone:Person = {
  name: "Juan Silva",
  age: 23,
  profession: "Software Engineer"
}

console.log();
console.log("::: EJERCICIO 1 :::");
const someoneKeysGen = doIt(someone);
console.log("someone gen:", someoneKeysGen);
const someoneValues = doIt(someone);
console.log("someone:", someoneValues);

