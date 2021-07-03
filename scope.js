function grandFather(){
    let name = "John";

    return function father(){
        let age = 10;

        return function son(){
            let village = "Delhi";

            return village;
        }
    }
}

