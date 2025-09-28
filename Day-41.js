//100Daysofcode
//Day41

class PlayerNode {
    constructor(name) {
        this.name = name;
        this.next = null;
    }
}

class CircularQueue {
    constructor() {
        this.tail = null; // tail.next will be head
        this.size = 0;
    }

    insertEnd(name) {
        const newNode = new PlayerNode(name);
        if (!this.tail) {
            newNode.next = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    insertBeginning(name) {
        const newNode = new PlayerNode(name);
        if (!this.tail) {
            newNode.next = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.tail.next;
            this.tail.next = newNode;
        }
        this.size++;
    }

    traverseForward() {
        if (!this.tail) return console.log("Queue is empty");

        let result = [];
        let current = this.tail.next; // head
        do {
            result.push(current.name);
            current = current.next;
        } while (current !== this.tail.next);

        console.log(result.join(" → "));
    }

    traverseRounds(k) {
        if (!this.tail) return console.log("Queue is empty");

        let result = [];
        let current = this.tail.next; // head
        for (let i = 0; i < k * this.size; i++) {
            result.push(current.name);
            current = current.next;
        }

        console.log(result.join(" → "));
    }
}

const gameQueue = new CircularQueue();
gameQueue.insertEnd("Alice");
gameQueue.insertEnd("Bob");
gameQueue.insertEnd("Charlie");
gameQueue.insertBeginning("Zara");

gameQueue.traverseForward();      // Zara → Alice → Bob → Charlie
gameQueue.traverseRounds(2);      // Zara → Alice → Bob → Charlie → Zara → Alice → Bob → Charlie
