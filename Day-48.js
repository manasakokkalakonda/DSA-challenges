//100Daysofcode
//Day48

class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class RoundTable {
  constructor() {
    this.head = null;
    this.current = null;
  }

  addParticipant(name) {
    const newNode = new Node(name);
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      this.current = newNode;
      return;
    }

    let tail = this.head;
    while (tail.next !== this.head) {
      tail = tail.next;
    }
    tail.next = newNode;
    newNode.next = this.head;
  }

  removeParticipant(name) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;

    do {
      if (current.name === name) {
        if (prev) {
          prev.next = current.next;
          if (current === this.head) this.head = current.next;
          if (current === this.current) this.current = current.next;
        } else {
          if (current.next === this.head) {
            this.head = null;
            this.current = null;
          } else {
            let tail = this.head;
            while (tail.next !== this.head) {
              tail = tail.next;
            }
            tail.next = current.next;
            this.head = current.next;
            this.current = this.head;
          }
        }
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }

  showParticipants() {
    if (!this.head) {
      console.log("No participants");
      return;
    }

    let result = [];
    let current = this.head;
    do {
      result.push(current.name);
      current = current.next;
    } while (current !== this.head);

    console.log(result.join(" -> "));
  }

  skipAndSelect(k) {
    if (!this.current || k <= 0) {
      console.log("Selected: None");
      return;
    }

    for (let i = 0; i < k; i++) {
      this.current = this.current.next;
    }
    console.log("Selected:", this.current.name);
  }
}

// Example usage
const meeting = new RoundTable();
meeting.addParticipant("Alice");
meeting.addParticipant("Bob");
meeting.addParticipant("Charlie");
meeting.addParticipant("Diana");
meeting.showParticipants();       // Alice -> Bob -> Charlie -> Diana
meeting.skipAndSelect(3);         // Selected: Diana
meeting.removeParticipant("Charlie");
meeting.showParticipants();       // Alice -> Bob -> Diana
meeting.skipAndSelect(4);         // Selected: Bob