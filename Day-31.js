//100Dysofcode
//Day31

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
    let temp = this.head;
    while (temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  insertAtBeginning(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteByValue(value) {
    if (!this.head) return;

    if (this.head.data === value) {
      this.head = this.head.next;
      return;
    }

    let temp = this.head;
    while (temp.next && temp.next.data !== value) {
      temp = temp.next;
    }

    if (temp.next) {
      temp.next = temp.next.next;
    }
  }

  deleteByPosition(pos) {
    if (pos < 1 || !this.head) return;

    if (pos === 1) {
      this.head = this.head.next;
      return;
    }

    let temp = this.head;
    let count = 1;

    while (temp.next && count < pos - 1) {
      temp = temp.next;
      count++;
    }

    if (temp.next) {
      temp.next = temp.next.next;
    }
  }

  printList() {
    let temp = this.head;
    let result = "";
    while (temp) {
      result += temp.data + (temp.next ? " → " : "");
      temp = temp.next;
    }
    console.log(result);
  }
}
const list = new LinkedList();

list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
list.insertAtBeginning(5);
list.deleteByValue(20);
list.deleteByPosition(2);
list.printList(); // Output: 5 → 10 → 30
