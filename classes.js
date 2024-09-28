class Calculator {
  constructor(numbers) {
    this.numbers = numbers
  }

  getEvenNumbers() {
    return this.numbers.filter(number => number % 2 === 0)
  }

  sumNumbers() {
    return this.numbers.reduce((acc, curr) => {
      return acc + curr
    }, 0)
  }

  getAvg() {
    return this.sumNumbers() / this.numbers.length
  }
}

const calculator = new Calculator([1, 2, 3, 4, 5, 6])

console.log(calculator.getEvenNumbers())
console.log(calculator.sumNumbers())
console.log(calculator.getAvg())