const giveAccessTo = (name) => {
    'Acess Granted to ' + name;
}

function authenticate(person) {
        let array = [];
            for(let i=0 ;i<5000; i++) {
                array.push(i);
            }

            return giveAccessTo(person.name);
    }

