
let memFib = (ind, cache) => {
    cache = cache || new Array()

    if (cache[ind]) {
        return cache[ind];
    } else {
        if (ind < 3) {
            return 1;
        } else {
            console.log(cache)
            cache[ind] = (memFib(ind - 1, cache) + memFib(ind - 2, cache))
        }
    }

    return cache[ind]


}

(function test() {
    console.log(memFib(9)) 
})()