function india(){
    console.log("India is warm");
}

var canada = () => {
    console.log("canada is cold");
}

india();
canada();

function marry(person1,person2){
    console.log(typeof arguments)
    let args = Array.from(arguments);
    args.pop('tina')
    console.log(args);
    return `${person1} will marry ${person2}`;
}

marry('tim','tina');