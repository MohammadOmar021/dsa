class myArray {
  constructor() {
    this.data = [];
    this.length = 0;
  }

  push(e) {
    this.data[this.length] = e;
    this.length++;
  }
  pop() {
    var deletedItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;

    this.data.length = this.length;
  }

  shift() {
    let deletedItem = this.data[0];
    delete this.data[0];
    for (let i = 0; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
    this.data.length = this.length;
    console.log(deletedItem);
  }
  unshift(e) {
    for (let i = this.length - 1; i <= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = e;
    // this.data.length--
  }

  deleteByIndex(index) {
    if (index == this.length - 1) {
      delete this.data[this.length - 1];
      this.length--;
      this.data.length = this.length;
    } else {
      const deletedItem = this.data[index];
      delete this.data[index];
      for (let i = index; i < this.length; i++) {
        this.data[index] = this.data[index + 1];
      }
      this.length--;
      this.data.length=this.length
      return deletedItem
    }
    
  }
}

const newMyArray = new myArray();

newMyArray.push("umer");

console.log(newMyArray);


