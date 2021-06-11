// Add your functions here
function map(array, callback) {

    let a = []
    for(let element of array) {
        a.push(callback(element))
    }
    return a
}

function reduce(array, callback, startingPoint) {
    let total
    let i

    if (startingPoint) {
        i = 0
        total = startingPoint
    } else {
        i = 1
        total = array[0]
    }

    for (i; i < array.length; i++) {
        total = callback(array[i], total)
    }
    return total
}
