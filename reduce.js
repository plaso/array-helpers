const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((acc, curr) => {
  return acc + curr
}, 0)

const findMaximum = numbers.reduce((max, curr) => {
  if (!max || curr > max) {
    return curr
  }
})

console.log({findMaximum})

console.log(Math.max([...numbers]))

function test() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

test(1, 2, 3, 4, 5, 6)

console.log(sum)

const properties = [
  {
    address: "123 Main St, Springfield",
    number: "001",
    price: 250000,
    realEstateAgency: "Home Realty",
    category: ['rich', 'medium'],
    id: 'Realty-Springfield'
  },
  {
    address: "456 Elm St, Shelbyville",
    number: "002",
    price: 320000,
    realEstateAgency: "Shelby Real Estate",
    category: ['rich'],
    id: "Shelby-Shelbyville"
  },
  {
    address: "789 Oak St, Capital City",
    number: "003",
    price: 450000,
    realEstateAgency: "Capital Homes",
    category: ['rich', 'medium'],
    id: "Capital-City"
  },
  {
    address: "789 Oak St, Capital Village",
    number: "003",
    price: 450000,
    realEstateAgency: "Capital Homes",
    category: ['rich', 'medium'],
    id: "Capital-City"
  },
];

// Quiero conseguir un objeto, con el id como key, y el valor el objeto de datos

/*
  {
    Capital-City: {
    address: "789 Oak St, Capital City",
    number: "003",
    price: 450000,
    realEstateAgency: "Capital Homes",
    category: ['rich', 'medium'],
    id: "Capital-City"
  }
*/

const result = properties.reduce((acc, curr) => {
  acc[curr.id] = {...curr}

  return acc
}, {})

console.log({ result })


const avg = sum / numbers.length

console.log(avg)


const arrayNumbers = [[1,2], [3,4], [5,6]] // [1,2,3,4,5]

const flatten = arrayNumbers.reduce((acc, curr) => {
  curr.forEach(value => acc.push(value)) // [1,2] => 1 -- 2
  return acc
}, [])

console.log({flatten})

const repeatedNumber = [1,2,1,4,5,5,6,7,8,9,2]

/*
  {
    1: 2,
    2: 2,
    5: ...
  }
*/

const repeatedSummary = repeatedNumber.reduce((acc, curr) => {
  if (acc[curr]) {
    // Sumar una ocurrencia

    acc[curr] += 1 // Si yo tenia 2 apariciones le suma mas
  } else {
    acc[curr] = 1
  }

  return acc
}, {})

console.log({repeatedSummary})

const users = [
  { name: 'John', age: 21 },
  { name: 'Alice', age: 25 },
  { name: 'Mark', age: 21 }
];

const groupedByAge = users.reduce((acc, curr) => {
  if (acc[curr.age]) {
    acc[curr.age].push(curr)
  } else {
    acc[curr.age] = [curr]
  }

  return acc
}, {})

console.log(groupedByAge)


const groupedPerAgency = properties.reduce((acc, property) => {
  if (acc[property.realEstateAgency]) {
    acc[property.realEstateAgency].push(property)
  } else {
    acc[property.realEstateAgency] = [property]
  }

  return acc
}, {})

console.log({groupedPerAgency})