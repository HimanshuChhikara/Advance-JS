var b = {
    name: 'Jay',
    say() { console.log(this) },
}

var c = {
    name: 'Ajay',
    say() { return function() { console.log(this) }},
}

var d = {
    name: 'Vijay',
    say() { return () => { console.log(this) }},
}

