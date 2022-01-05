// return only first element of array

const firstElt = (array) => {
    return array[0]
}


// return all but last element of array

const allButLast = (array) => {
    let newArray = array.pop()
    return newArray
}


// return only last element of array

const onlyLast = (array) => {
    return array.pop()
}


// return all but first element of array

const allButFirst = (array) => {
    let newArray = array.shift()
    return newArray
}


// return element with index of n, else return last element of array

const elementN = (array, n) => {
    if (n < 0 || n > array.length) {
        return array.pop()
    } else {
        return array[n + 1]
    }
}


// remove element from array

const removeElt = (array, elt) => {
    return array.filter(e =>
        e != elt
    )
}


// remove double elements

const removeDouble = (inputArray) => {
    let array = inputArray.sort()
    let result = []
    for (i = 0; i < array.length; i++) {
        if (array[i] != array[i + 1]) {
            result.push(array[i])
        }
    }
    return result
}


// calculate sum of array

const arraySum = (array) => {
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

//generate random number between a and b

const randomBetween = (a, b) => {
    let max = 0
    let min = 0
    if (a < b) {
        max = b
        min = a
    } else {
        max = a
        min = b
    }
    return Math.round(Math.random() * (max - min) + min);
}

//capitalize first letter of string

const capitalizeFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// capitalize all letters

const capitalizeAll = (string) => {
    return string.toUpperCase()
}

// check if last letter of string is equal to input "letter"

const lastLetter = (string, letter) => {
    if (string.slice(string.length - 1) === letter) {
        return true
    } else {
        return false
    }
}

// calculate input as math operation

const mathOperation = (num1, operator, num2) => {
    if (typeof (num1) === "number" && typeof (num2) === "number" && operator == "+" || "-" || "*" || "/" || "%") {
        return eval(`${num1} ${operator} ${num2}`)
    } else {
        console.log("please input [number], [operator], [number]")
    }
}

module.exports = mathOperation