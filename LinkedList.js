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

  insertAt(value, index) {
    const newNode = new Node(value);
    if (index === 0) {
      return this.prepend(value)
    }
    else if (index == this.size) {
      return this.append(value)
    }
    else if (index >= 0 && index < this.size) {
      let leftNode = this.head
      let rightNode = null
      for (let i = 0; i < index - 1; i++) {
        leftNode = leftNode.next
      }
      rightNode = leftNode.next
      newNode.next = rightNode
      leftNode.next = newNode
      this.size++
      return newNode
    }
    else
      return null
  }

  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return null
    }
    if (index == 0) {
      this.head = this.head.next
      this.size--;

      if (this.size == 0) {
        this.tail = null
      }
      return
    }
    if (index = this.size - 1) {
      this.pop()
      return
    }


    let leftNode = this.head
    for (let i = 0; i < index - 1; i++) {
      leftNode = leftNode.next
    }

    const nodeToRemove = leftNode.next
    leftNode.next = nodeToRemove.next

    this.size--

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

console.log(`tamaño: ${list.size}`);
console.log("--LISTA--");
console.log(list.toString());

list.insertAt("frog", 4)

console.log(`tamaño: ${list.size}`);
console.log("--LISTA--");
console.log(list.toString());

list.removeAt(4)


console.log(`tamaño: ${list.size}`);
console.log("--LISTA--");
console.log(list.toString());

