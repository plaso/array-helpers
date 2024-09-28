const properties = [
  {
    address: "123 Main St, Springfield",
    number: "001",
    price: 250000,
    realEstateAgency: "Home Realty",
    category: ['rich', 'medium']
  },
  {
    address: "456 Elm St, Shelbyville",
    number: "002",
    price: 320000,
    realEstateAgency: "Shelby Real Estate",
    category: ['rich']
  },
  {
    address: "789 Oak St, Capital City",
    number: "003",
    price: 450000,
    realEstateAgency: "Capital Homes",
    category: ['rich', 'medium']
  },
  {
    address: "101 Maple St, Ogdenville",
    number: "004",
    price: 150000,
    realEstateAgency: "Ogdenville Properties",
    category: ['poor']
  },
  {
    address: "202 Pine St, North Haverbrook",
    number: "005",
    price: 375000,
    realEstateAgency: "Haverbrook Realty",
    category: ['medium', 'poor']
  }
];


// Filter

// Quedarme con las casas para ricos


const richHouses = properties
  .filter(house => house.category.includes('rich') || house.category.includes('medium'))

console.log('ejercicio 1:', richHouses)

const expensiveHouses = properties.filter(house => house.price > 200000)
console.log('ejercicio 2:', expensiveHouses)


// Map

// Hay inflacion, + 50000 a cada casa

const newHouses = properties.map(house => {
  const copy = {...house}
  copy.price += 50000
  return copy
})
const newHouses2 = properties.map(house => {
  return {
    ...house,
    price: house.price + 50000
  }
})
const newHouses3 = properties.map(house => ({ ...house, price: house.price + 50000}))


console.log({ newHouses })
console.log({ newHouses2 })
console.log({ newHouses3 })
console.log({ properties })

// Array nuevo con la calle y la inmobiliaria en un string
// 123 Main St, Springfield - Haverbrook Realty

const houseInmo = properties.map(house => {
  return house.address + ' - ' + house.realEstateAgency
})

console.log({ houseInmo })


// Quedarme con las casas de ricos, les sube 50000 pavos y les devuelvo calle + agencia + precio

const result = properties
  .filter(house => house.category.includes('rich'))
  .map(house => ({ ...house, price: house.price + 50000}))
  .map(house => `${house.address} - Vendido por: ${house.realEstateAgency} al precio de ${house.price}€`)

const result2 = properties
  .filter(house => house.category.includes('rich'))
  .map(house => {
    const newHouse = { ...house, price: house.price + 50000}
    return `${newHouse.address} - Vendido por: ${newHouse.realEstateAgency} al precio de ${newHouse.price}€`
  })

console.log({result})
console.log({result2})

// Borrar repetidos de un array

const names = ['pepe', 'juan', 'maria', 'carla', 'pepe', 'manolo', 'juan']

const notRepeatedNames = names.filter((name, index) => names.indexOf(name) === index)

console.log({notRepeatedNames})