// var favouriteFood = undefined;
// var foodThoughts = undefined; // Each function and variable is set to undefined whenever js see a function been created
var favouriteFood = "grapes";

var foodThoughts = function () {
    // var favouriteFood = undefined; // when in declaration phase variable is set to undefined
     console.log("Original favourite food: " + favouriteFood);

     var favouriteFood = "sushi";

     console.log("New favourite food: " + favouriteFood);
};

foodThoughts()