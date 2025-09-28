//100Daysofcode
//Day46

class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class TokenRing {
  constructor() {
    this.tail = null; // Points to the last node in the ring
  }

  addNode(name) {
    const newNode = new Node(name);
    if (!this.tail) {
      newNode.next = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.tail.next;
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  showNetwork() {
    if (!this.tail) {
      console.log("No nodes in the network.");
      return;
    }

    let result = [];
    let current = this.tail.next;
    do {
      result.push(current.name);
      current = current.next;
    } while (current !== this.tail.next);

    console.log(result.join(" -> "));
  }

  passToken(k) {
    if (!this.tail) {
      console.log("No nodes to pass the token.");
      return;
    }

    let current = this.tail.next;
    for (let i = 0; i < k; i++) {
      console.log(`Token at: ${current.name}`);
      current = current.next;
    }
  }
}

const ring = new TokenRing();
ring.addNode("ComputerA");
ring.addNode("ComputerB");
ring.addNode("ComputerC");

ring.showNetwork();     // ComputerA -> ComputerB -> ComputerC
ring.passToken(6);      // Simulate token passing 6 times