//100Daysofcode
//Day42

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function insert(head, insertVal) {
    const newNode = new Node(insertVal);

    if (!head) {
        newNode.next = newNode;
        return newNode;
    }

    let current = head;
  
    while (true) {
        if (current.val <= insertVal && insertVal <= current.next.val) {
            break;
        }
        if (current.val > current.next.val) {
            if (insertVal >= current.val || insertVal <= current.next.val) {
                break;
            }
        }

        current = current.next;

        if (current === head) break;
    }

    newNode.next = current.next;
    current.next = newNode;
    return head;
}

function traverse(head) {
    if (!head) return console.log("List is empty");

    let result = [];
    let current = head;
    do {
        result.push(current.val);
        current = current.next;
    } while (current !== head);

    console.log(result.join(" → "));
}

let node1 = new Node(1);
let node3 = new Node(3);
let node4 = new Node(4);

node1.next = node3;
node3.next = node4;
node4.next = node1; // Circular link

let head = node1;
head = insert(head, 2); // Insert 2
traverse(head);         // Output: 1 → 2 → 3 → 4 → 1