//100Daysofcode
//Day50

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function reverseLinkedList(head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}

function traverse(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  console.log("Reversed Linked List:", result.join(" -> "));
}

// Example usage
let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

head = reverseLinkedList(head);
traverse(head); // Reversed Linked List: 5 -> 4 -> 3 -> 2 -> 1