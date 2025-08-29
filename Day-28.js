//100Daysofcode
//Day28

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

  // Check for duplicate roll number
  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  // Get length of the list
  getLength() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Insert at given position
  insertAt(data, position) {
    const length = this.getLength();

    if (position < 1 || position > length + 1) {
      console.log("Invalid Position");
      return;
    }

    if (this.contains(data)) {
      console.log("Duplicate Entry Not Allowed");
      return;
    }

    const newNode = new Node(data);

    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let prev = null;
      let count = 1;

      while (count < position) {
        prev = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      prev.next = newNode;
    }

    this.printList();
  }

  // Print the linked list
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

// 🚀 Example Usage
const list = new LinkedList();
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(4, 3);
list.insertAt(5, 4);
list.insertAt(3, 3); // Insert 3 at position 3