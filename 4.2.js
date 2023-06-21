function simplePropname(y, obj) {
        if (obj.hasOwnProperty(y)) {
            console.log (true)
        }
    }

simplePropname("r",{a:1, "r":2})
