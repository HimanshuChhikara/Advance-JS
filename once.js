let view;

function initialize() {
    return function() {

        view: "heheh";
        console.log("View is called");
    }
}

initialize()();
initialize();