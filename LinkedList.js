class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode
      this.tail = this.head;
    }
    else {
      this.tail.next = newNode
      this.tail = newNode
    }
    this.size++;
  }
  prepend(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode
      this.tail = this.head;
    }
    else {
      newNode.next = this.head
      this.head = newNode
    }
    this.size++;

  }

  at(index) {
    if (index >= 0 && index < this.size) {
      let current = this.head
      for (let i = 0; i < index; i++) {
        current = current.next
      }
      return current
    }
    else
      return null
  }
  pop() {
    if (this.size <= 1) {
      this.head = null
      this.tail = null
      this.size = 0
    }
    else {
      let secondLast = this.at(this.size - 2)
      secondLast.next = null;
      this.tail = secondLast
      this.size--;
    }
  }
  contains(value) {
    let current = this.head
    while (current != null) {
      if (value === current.value) {
        return true
      }
      current = current.next
    }
    return false
  }
  find(value) {
    let current = this.head
    let index = 0

    while (current != null) {
      if (value === current.value) {
        return index
      }
      current = current.next
      index++;
    }
    return null
  }
  toString() {
    let current = this.head
    let str = ""
    while (current != null) {
      str = str + "(" + current.value + ")->"
      current = current.next
    }
    return str + " null"
  }


}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("lion");
list.append("parrot");
list.prepend("hamster");

// console.log(list.head);
// console.log(list.tail);
// console.log("AT");
// console.log(list.at(-1));

console.log(`tamaño: ${list.size}`);
console.log("--LISTA--");

console.log(list.toString());

console.log(list.contains("mouse"));
console.log(list.find("parrot"));

