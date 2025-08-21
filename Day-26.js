//100Daysofcode
//Day26

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

    // Insert at Head
    insertAtHead(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    // Insert at Tail
    insertAtTail(data) {
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

    // Insert at specific Position (1-based)
    insertAtPosition(data, pos) {
        if (pos <= 0) {
            console.log(`❌ Invalid position: ${pos}`);

            return;
        }

        if (pos === 1) {
            this.insertAtHead(data);
            return;
        }

        let newNode = new Node(data);
        let current = this.head;
        let prev = null;
        let count = 1;

        while (current && count < pos) {
            prev = current;
            current = current.next;
            count++;
        }

        if (count === pos) {
            prev.next = newNode;
            newNode.next = current;
        } else if (count === pos - 1 && current === null) {
            // Insert at tail if pos == length + 1
            prev.next = newNode;
        } else {
            console.log(`❌ Position ${pos} is out of bounds.`);
        }
    }

    // Print linked list
    printList() {
        let result = "";
        let current = this.head;
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        result += "null";
        console.log(result);
    }
}

const list = new LinkedList();

list.insertAtHead(10);
list.insertAtTail(20);
list.insertAtPosition(15, 2);  // Insert between 10 and 20
list.insertAtPosition(5, 1);   // New head
list.insertAtPosition(30, 10); // Invalid position
list.insertAtTail(25);

list.printList();  // Output: 5 -> 10 -> 15 -> 20 -> 25 -> null