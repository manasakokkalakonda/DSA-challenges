//100Daysofcode
//Day45

class PrinterNode {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class PrinterQueue {
  constructor() {
    this.tail = null; // Points to the last printer in the circular queue
  }

  addPrinter(name) {
    const newPrinter = new PrinterNode(name);
    if (!this.tail) {
      newPrinter.next = newPrinter;
      this.tail = newPrinter;
    } else {
      newPrinter.next = this.tail.next;
      this.tail.next = newPrinter;
      this.tail = newPrinter;
    }
  }

  showPrinters() {
    if (!this.tail) {
      console.log("No printers available.");
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

  assignJobs(k) {
    if (!this.tail) {
      console.log("No printers available to assign jobs.");
      return;
    }

    let current = this.tail.next;
    for (let i = 0; i < k; i++) {
      console.log(`Job assigned to: ${current.name}`);
      current = current.next;
    }
  }
}

const queue = new PrinterQueue();
queue.addPrinter("Printer1");
queue.addPrinter("Printer2");
queue.addPrinter("Printer3");

queue.showPrinters();       // Printer1 -> Printer2 -> Printer3
queue.assignJobs(7);        // Round-robin assignment for 7 jobs
