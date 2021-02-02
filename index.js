class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.length++
    this.items.sort((a,b) => {
      return (a - b)
    }) 
      return this.items
  }

  get(pos) {
      if (this.items[pos] !== undefined) {
      return (this.items[pos])
    } else {
      throw new Error('OutOfBounds') 
    }
  }
  
  max() {
    let maxNum = Math.max(...this.items)
    if (this.length !== 0)
    return maxNum
    else {
      throw new Error('EmptySortedList')
    }
  }

  min() {
    let minNum = Math.min(...this.items)
    if (this.length !== 0)
    return minNum
    else {
      throw new Error('EmptySortedList')
    }}

  sum() {
    let sum = 0
    if (this.length !== 0) {
    for (let i = 0 ; i < this.items.length ; i++) {
      sum += this.items[i]
    } return sum
  } else {
    return 0
  }
  }

  avg() {
    if (this.length !== 0) {
     let avgValue = 0
         for (let i = 0 ; i < this.items.length ; i++) {
         avgValue = this.sum()/this.length 
      }
        return avgValue
      } 
       else {
        throw new Error('EmptySortedList')
  }
  
  }
}

module.exports = SortedList;
