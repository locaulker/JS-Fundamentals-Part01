// let js = "amazing"
// console.log(40 + 8 + 23 - 10)

// let country = "USA"
// let continent = "North America"
// let population = "350M"

// console.log(country, continent, population)

// Coding Challenge 1

const massMark = 78
const heightMark = 1.69

const massJohn = 92
const heightJohn = 1.95

const bmiMark = Math.round(massMark / heightMark ** 2).toFixed(2)
const bmiJohn = Math.round(massJohn / heightJohn ** 2).toFixed(2)

const markHigherBMI = bmiMark - bmiJohn
if (bmiMark > bmiJohn) {
  console.log(bmiMark, bmiJohn, true)
} else {
  console.log(false)
}

console.log(bmiMark, bmiJohn)
