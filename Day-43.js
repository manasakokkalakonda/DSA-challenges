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

  // Add task at the end
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

  // Add task at the beginning
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

  // Display tasks once
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

  // Simulate one round of execution
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

// Example usage
const scheduler = new RoundRobinScheduler();
scheduler.addTaskEnd("Task1");
scheduler.addTaskEnd("Task2");
scheduler.addTaskBeginning("Task3");

scheduler.displayTasks();
scheduler.simulateRound();