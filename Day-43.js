//100Daysofcode
//Day43

class TaskNode {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class RoundRobinScheduler {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addTaskEnd(name) {
    const newNode = new TaskNode(name);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.tail.next = this.head;
    }
  }

  addTaskBeginning(name) {
    const newNode = new TaskNode(name);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      newNode.next = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = this.head;
    }
  }

  displayTasks() {
    if (!this.head) {
      console.log("No tasks in the scheduler.");
      return;
    }
    let current = this.head;
    const result = [];
    do {
      result.push(current.name);
      current = current.next;
    } while (current !== this.head);
    console.log(result.join(" -> "));
  }

  simulateRound() {
    if (!this.head) {
      console.log("No tasks to execute.");
      return;
    }
    let current = this.head;
    do {
      console.log(`Executing: ${current.name}`);
      current = current.next;
    } while (current !== this.head);
  }
}

const scheduler = new RoundRobinScheduler();
scheduler.addTaskEnd("Task1");
scheduler.addTaskEnd("Task2");
scheduler.addTaskBeginning("Task3");

scheduler.displayTasks();
scheduler.simulateRound();
