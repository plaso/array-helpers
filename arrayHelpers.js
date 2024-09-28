const numbers = [-1, 0, 1, 2, 3, 4];

const numbersTwice = numbers.map((number, index, arr) => {
  return number * 2
})
const numbersTwice2 = numbers.map(number => number * 2)

console.log(numbersTwice)

const isPositive = number => {
  return number > 0
}

const positiveNumbers = numbers.filter(isPositive)
const positiveNumbers2 = numbers.filter(number => isPositive(number))
const positiveNumbers3 = numbers.filter(number => number > 0)

console.log(positiveNumbers)
console.log(positiveNumbers2)
console.log(positiveNumbers3)

const names = ['pepe', 'juan', 'maria'];
const capitalizeNames = names.map(name => {
  const lettersArr = name.split('')
  lettersArr[0] = lettersArr[0].toUpperCase()
  return lettersArr.join('')
})
const capitalizeNames2 = names.map(name => {
  return name[0].toUpperCase() + name.slice(1)
})
const capitalizeNames3 = names.map(name => {
  return name[0].toUpperCase() + name.substring(1)
})

console.log(capitalizeNames)
console.log(capitalizeNames2)
console.log(capitalizeNames3)


const students = [
  {
    name: 'Pepe',
    lastName: 'Garcia'
  },
  {
    name: 'Juan',
    lastName: 'Garcia'
  },
  {
    name: 'Maria',
    lastName: 'Garcia'
  },
]

const fullNames = students.map(student => student.name + ' ' + student.lastName)

console.log(fullNames)

// 0, false, null, undefined, NaN

const values = ['dasd', [], {}, undefined, null, 0, ""]
const realValues = ['pepe', 'juan', undefined, 'maria']

const filteredValues = values.filter(value => value)
console.log(filteredValues)

const obj1 = {
  name: 'pepe',
  lastName: 'Garcia',
  address: {
    city: 'Madrid'
  }
}

const obj2 = { ...obj1 } // Shallow
const obj3 = Object.assign({}, obj1) // Shallow
JSON.parse(JSON.stringify(obj2)) // Deep copy


obj2.address.city = 'Barcelona'
console.log(obj1)
console.log(obj2)


console.log(JSON.parse('[2, 3, 4]'))

const arr = [1, 2, 3]
const arr2 = [...arr] // shallow copy
const arr3 = arr.slice() // shallow copy

const arr4 = [5, 6]
const arr5 = [7, 8]

const join = [...arr4, ...arr5]
const join2 = arr4.concat(arr5)

console.log(arr)
console.log(arr2)
console.log(arr3)
console.log(join)
console.log(join2)
