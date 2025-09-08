//100Daysofcode
//Day33

class TaskNode {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class TaskManager {
  constructor() {
    this.head = null;
  }

  addTaskAtEnd(name) {
    const newNode = new TaskNode(name);
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

  addTaskAtBeginning(name) {
    const newNode = new TaskNode(name);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteTaskByName(name) {
    if (!this.head) return;

    if (this.head.name === name) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.name !== name) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  deleteTaskByPosition(pos) {
    if (pos < 1 || !this.head) return;

    if (pos === 1) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    let count = 1;

    while (current.next && count < pos - 1) {
      current = current.next;
      count++;
    }

    if (current.next) {
      current.next = current.next.next;
    }
  }

  showTasks() {
    let current = this.head;
    const tasks = [];
    while (current) {
      tasks.push(current.name);
      current = current.next;
    }
    console.log(tasks.join(" → "));
  }
}
const manager = new TaskManager();
manager.addTaskAtEnd("Finish Homework");
manager.addTaskAtEnd("Buy Groceries");
manager.addTaskAtBeginning("Morning Workout");
manager.showTasks(); // Morning Workout → Finish Homework → Buy Groceries

manager.deleteTaskByName("Buy Groceries");
manager.showTasks(); // Morning Workout → Finish Homework

manager.deleteTaskByPosition(2);
manager.showTasks(); // Finish Homework

