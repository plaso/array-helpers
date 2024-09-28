function sayHello() { // funcion declaration
  console.log('hello')
}

[22,34,22].forEach(sayHello)

const sayHello2 = () => { // function expression
  console.log('hello')
}

[22,34,22].forEach(sayHello2);
[22,34,22].forEach(function() {
  console.log('hello anonymous')
});
[22,34,22].forEach(() => console.log('hello anonymous'))


const foo = (name) => {
  console.log(name)
}
const foo2 = name => {
  console.log(name)
}

// () => 24 return directo - devuelve 24

const speak = (callback) => {
  callback()
}

speak(() => foo2('pepe'))
speak(sayHello)
speak(() => console.log('hello'));

const sayForEach = (item, index, arr) => {
  console.log(item, index, arr)
}
[22].forEach(item => sayForEach(item));
[22].forEach(sayForEach)
