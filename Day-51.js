//100Daysofcode
//Day51

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function findMiddle(head) {
  if (!head) return null;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow.val;
}
function createLinkedList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;
  for (let val of arr) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

let head1 = createLinkedList([1, 2, 3, 4, 5]);
console.log(findMiddle(head1)); // Output: 3

let head2 = createLinkedList([10, 20, 30, 40, 50, 60]);
console.log(findMiddle(head2)); // Output: 40
