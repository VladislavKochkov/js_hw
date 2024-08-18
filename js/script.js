'use strict'

//task 1
let numbers = ''
for (let i = 10; i <= 20; i++) {
    numbers += i
    if (i < 20) {
        numbers += ','
    }
}
alert(numbers)

//task 2
let squares = ''
for (let i = 10; i <= 20; i++) {
    squares += i * i
    if (i < 20) {
        squares += ','
    }
}
alert(squares)

//task 3
let multiplication = ''
for (let i = 0; i <= 10; i++) {
    multiplication += i * 7
    if (i < 10) {
        multiplication += ','
    }
}
alert(multiplication)

//task 4
let sum = 0
for (let i = 1; i <= 15; i++) {
    sum += i
}
console.log(+sum)

//task 5
let product = 1
for (let i = 15; i <= 35; i++) {
    product *= i
}
console.log(product)

//task 6
let sum1 = 0
const n = 500

for (let i = 1; i <= n; i++) {
    sum1 += i
}
const average = sum1 / n
console.log(average)

//task 7
let sum2 = 0
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum2 += i
    }
}
console.log(sum2)

//task 8
for (let i = 100; i <= 200; !i++) {
    if (i % 3 === 0) {
        console.log(i)
    }
}

//task 9
const number = 26
const divisors = []
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        divisors.push(i)
    }
}
console.log(`${divisors.join(', ')}`)

//task 10
let evenDivisorCount = 0
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        if (i % 2 === 0) {
            evenDivisorCount++
        }
    }
}
console.log(`${evenDivisorCount}`)

//task 11
let sumEvenDivisors = 0
for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        if (i % 2 === 0) {
            sumEvenDivisors += i
        }
    }
}
console.log(`${sumEvenDivisors}`)

//task 12
const size = 10
let table = 'Multiplication Table:\n'
table += '   |'
for (let i = 1; i <= size; i++) {
    table += ` ${i.toString().padStart(3, ' ')} `
}
table += '\n'

table += '---' + '---'.repeat(size) + '\n'
for (let i = 1; i <= size; i++) {
    table += `${i.toString().padStart(2, ' ')} |`
    for (let j = 1; j <= size; j++) {
        table += ` ${(i * j).toString().padStart(3, ' ')}`
    }
    table += '\n'
}
console.log(table)
