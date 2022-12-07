function receivesAFunction(callback) {
    return callback()
}

function returnsANamedFunction() {
    return function hello() {
        console.log("hello")
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        console.log("hello")
    }
}