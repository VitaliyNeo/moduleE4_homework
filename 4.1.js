function simpleProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
            console.log(obj[key])
        }
    }
}

simpleProp({a:1, b:2})




