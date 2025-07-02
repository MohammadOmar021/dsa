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
    for (let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i];
    }
    this.data[0] = e;
     this.length++
  }

  deleteByIndex(index) {
    let deletedItem=""
    if (index == this.length - 1) {
      delete this.data[this.length - 1];
      this.length--;
      this.data.length = this.length;
    } else {
       deletedItem = this.data[index];
      delete this.data[index];
      for (let i = index; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      this.length--;
      this.data.length=this.length
      
    }
    return deletedItem
  }
}

const newMyArray = new myArray();

newMyArray.push("umer");
newMyArray.push("azhar")
newMyArray.unshift("azhar")
newMyArray.pop()
newMyArray.shift()
newMyArray.unshift("azhar")
newMyArray.unshift("hasan")
newMyArray.unshift("fatima")
newMyArray.unshift("ali")


console.log(newMyArray.deleteByIndex(1));



//Reverse String

let str = "My name is Muhammad Umer"

let reversestr = str.split(" ").reverse("").join(" ")
let arr= []
console.log(reversestr)

// Reversing whole word in the sentence

str.split(" ").forEach((e)=>{
 arr.push( e.split("").reverse("").join(""))
})


console.log(arr.join(" "))


//Palindrome

let word = "civic";

let reverseWord = word.split("").reverse("").join("")

if(reverseWord === word){
  console.log("Its Palindrom")
}else{
  console.log("Its not a Palindrom")
}

let number = 123456

console.log(number.toString().split("").reverse("").join(""))




