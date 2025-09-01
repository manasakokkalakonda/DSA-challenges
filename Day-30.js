//100Daysofcode
//Day30

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtEnd(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteFromBeginning() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    this.head = this.head.next;
  }

  deleteFromEnd() {
    if (!this.head) {
      console.log("List is empty");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  }
}

// Execution
const list = new LinkedList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtBeginning(5);
list.deleteFromEnd();
list.deleteFromBeginning();
list.printList(); // Output: 10 -> null