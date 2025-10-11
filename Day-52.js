//100Daysofcode
//Day52

class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  printForward() {
    let current = this.head;
    let result = '';
    while (current) {
      result += current.data;
      if (current.next) result += ' -> ';
      current = current.next;
    }
    console.log('Forward Traversal:', result);
  }

  printBackward() {
    let current = this.tail;
    let result = '';
    while (current) {
      result += current.data;
      if (current.prev) result += ' -> ';
      current = current.prev;
    }
    console.log('Backward Traversal:', result);
  }
}

const name = "ASIA";
const dll = new DoublyLinkedList();

for (let char of name) {
  dll.insert(char);
}

dll.printForward();   // Output: A -> S -> I -> A
dll.printBackward();  // Output: A -> I -> S -> A