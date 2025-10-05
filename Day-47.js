//100Daysofcode
//Day47

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let prev = null;

    do {
      if (value < current.value) break;
      prev = current;
      current = current.next;
    } while (current !== this.head);

    if (!prev) {
      let tail = this.head;
      while (tail.next !== this.head) {
        tail = tail.next;
      }
      newNode.next = this.head;
      tail.next = newNode;
      this.head = newNode;
    } else {
      prev.next = newNode;
      newNode.next = current;
    }
  }

  delete(value) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;

    do {
      if (current.value === value) {
        if (prev) {
          prev.next = current.next;
          if (current === this.head) this.head = current.next;
        } else {
          if (current.next === this.head) {
            this.head = null;
          } else {
            let tail = this.head;
            while (tail.next !== this.head) {
              tail = tail.next;
            }
            tail.next = current.next;
            this.head = current.next;
          }
        }
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }

  traverse() {
    const result = [];
    if (!this.head) return result;

    let current = this.head;
    do {
      result.push(current.value);
      current = current.next;
    } while (current !== this.head);

    console.log(result);
  }
}

// Example usage
const scheduler = new CircularLinkedList();
scheduler.insert(3);
scheduler.insert(1);
scheduler.insert(2);
scheduler.traverse(); // [1, 2, 3]
scheduler.insert(0);
scheduler.traverse(); // [0, 1, 2, 3]
scheduler.delete(2);
scheduler.traverse(); // [0, 1, 3]
scheduler.delete(5);
scheduler.traverse(); // [0, 1, 3]