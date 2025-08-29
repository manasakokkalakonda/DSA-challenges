//100Daysofcode
//Day29

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

  insertAtPosition(data, position) {
    const newNode = new Node(data);
    if (position < 1) {
      console.log("Invalid Position");
      return;
    }

    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 1;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    if (count !== position) {
      console.log("Invalid Position");
      return;
    }

    prev.next = newNode;
    newNode.next = current;
  }

  deleteAtPosition(position) {
    if (position < 1 || !this.head) {
      console.log("Invalid Position");
      return;
    }

    if (position === 1) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let prev = null;
    let count = 1;

    while (current && count < position) {
      prev = current;
      current = current.next;
      count++;
    }

    if (!current) {
      console.log("Invalid Position");
      return;
    }

    prev.next = current.next;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + (current.next ? " -> " : "");
      current = current.next;
    }
    console.log(result);
  }
}
// 🔹 Sample Execution
const list = new LinkedList();
list.insertAtPosition(10, 1);
list.insertAtPosition(20, 2);
list.insertAtPosition(30, 2);
list.deleteAtPosition(1);
list.printList(); // Output: 20 -> 30