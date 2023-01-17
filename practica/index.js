var doIt = function (person) {
    return Object.keys(person);
};
var someone = {
    name: "Juan Silva",
    age: 23,
    profession: "Software Engineer"
};
var result = doIt(someone);
console.log(result);
