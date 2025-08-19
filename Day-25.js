//100Daysofcode
//Day25

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.printList();
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.printList();
  }

  insertAtPosition(position, data) {
    if (position <= 0) {
      console.log("❌ Invalid position. Must be >= 1.");
      return;
    }

    const newNode = new Node(data);
    if (position === 1) {
      this.insertAtHead(data);
      return;
    }

    let current = this.head;
    let count = 1;
    while (current && count < position - 1) {
      current = current.next;
      count++;
    }

    if (!current) {
      console.log("❌ Position out of bounds.");
      return;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.printList();
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log("📤 List:", result);
  }
}
const ll = new SinglyLinkedList();
ll.insertAtHead(10); // List: 10 -> null
ll.insertAtTail(20); // List: 10 -> 20 -> null
ll.insertAtPosition(2, 15); // List: 10 -> 15 -> 20 -> null

