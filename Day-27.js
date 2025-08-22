//100Daysofcode
//Day27

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
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = newNode;
    }
    this.printList();
  }

  insertAtPosition(pos, data) {
    if (pos < 1) {
      console.log("Invalid Position");
      return;
    }

    const newNode = new Node(data);

    if (pos === 1) {
      this.insertAtHead(data);
      return;
    }

    let temp = this.head;
    let count = 1;

    while (temp && count < pos - 1) {
      temp = temp.next;
      count++;
    }

    if (!temp) {
      console.log("Invalid Position");
      return;
    }

    newNode.next = temp.next;
    temp.next = newNode;
    this.printList();
  }

  printList() {
    let temp = this.head;
    let output = "";
    while (temp) {
      output += temp.data + " -> ";
      temp = temp.next;
    }
    console.log(output + "null");
  }
}
const ll = new SinglyLinkedList();
ll.insertAtHead(10);         // 10 -> null
ll.insertAtTail(20);         // 10 -> 20 -> null
ll.insertAtPosition(2, 15);  // 10 -> 15 -> 20 -> null
ll.insertAtPosition(5, 25);  // Invalid Position