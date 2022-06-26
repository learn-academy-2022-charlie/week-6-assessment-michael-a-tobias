// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// Function (array > object > name:, occupation:)
// Returns => '${name: Capitalized} is ${occupation:}.'

// a) Create a test with an expect statement using the variable provided.

describe("theHeartOfGold", () => {
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]
    expect(theHeartOfGold(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// RED: ReferenceError: theHeartOfGold is not defined
// Test failed successfully.

// b) Create the function that makes the test pass.

// Bear with me. Go stretch or get some water or something.

// this function takes an array of objects
function theHeartOfGold(obj) {
  // bigArr takes the input and splits the names => [[ 'ford', 'prefect' ],[ 'zaphod', 'beeblebrox' ],[ 'arthur', 'dent' ]]
  let bigArr = obj.map(value => value.name.split(" "))
  // upper will capitalize the first letter in an array
  let upper = (obj) => {
    for (let i = 0; i < obj.length; i++) {
      obj[i] = obj[i].charAt(0).toUpperCase() + obj[i].slice(1)
    }
    return obj
  }
  // matrixArr represents capitalizing the first letter of each name using 'upper' => [[ 'Ford', 'Prefect' ], [ 'Zaphod', 'Beeblebrox' ], [ 'Arthur', 'Dent' ]]
  let matrixArr = bigArr.map(value => upper(value))
  // bigJob represents an array of the occupations => [ 'a hitchhiker', 'president of the galaxy', 'a radio employee' ]
  let bigJob = obj.map(value => value.occupation)
  // newArray will hold the results of all this mess mushed together
  let newArr = []
  // this for loop iterates over the arrays joining the first and last names into a string, embedding it into a template literal, along with returning job.
  for (let i = 0; i < matrixArr.length; i++) {
    newArr.push(`${matrixArr[i].join(" ")} is ${bigJob[i]}.`)
  }
  // in the end, newArr will hold an array of 3 strings to be expected => ['Ford Prefect is a hitchhiker.', 'Zaphod Beeblebrox is president of the galaxy.', 'Arthur Dent is a radio employee.']
  return newArr
}

// GREEN: Test passed.
// REFACTOR:
// I tried to refactor, but I can't make sense of how to turn my for loops into an iterating method using .map and nest them together. I think even if I had everything in nested .maps, it wouldn't be easy to debug or even tell what is going on.

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe("moduloTime", () => {
  it('takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3', () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    expect(moduloTime(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(moduloTime(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// RED: ReferenceError: moduloTime is not defined
// Test failed successfully.

// b) Create the function that makes the test pass.

// I will have to create a function that takes an array of mixed data types and only keeps the numbers.
// The function will then have to return an array of the numbers modulo by 3.

// moduloTime takes an array of mixed data types
const moduloTime = (array) => {
  // num filters the array so only numbers are left
  let num = array.filter(value => typeof value === "number")
  // num.map takes the array of numbers and returns an array of only the remainders of the numbers when divided by 3.
  return num.map(value => value % 3)
}

// GREEN: Test passed.

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe("bigCube", () => {
  it("takes in an array of numbers and returns the sum of all the numbers cubed", () => {
    const cubeAndSum1 = [2, 3, 4]
    const cubeAndSum2 = [0, 5, 10]
    expect(bigCube(cubeAndSum1)).toEqual(99)
    expect(bigCube(cubeAndSum2)).toEqual(1125)
  })
})

// RED: ReferenceError: bigCube is not defined
// Test failed successfully.

// b) Create the function that makes the test pass.

// bigCube does NOT sum the numbers in an array and them cube it.
// bigCube takes an array of numbers, individually cubes them, and returns the sum of the numbers.

// bigCube is a function that takes an array
function bigCube(array) {
  // sum will hold the results of my for loop
  let sum = 0
  // standard for loop that iterates over every element in an array
  for (let i = 0; i < array.length; i++) {
    // at every iteration, the element cubed will be added to the previous sum
    sum += array[i] ** 3
  }
  // at this point, sum will have the full sum instead of 0
  return sum
}

// GREEN: Test passed.