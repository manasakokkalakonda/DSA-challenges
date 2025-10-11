//100Daysofcode
//Day53

class Stack {
  constructor(size) {
    this.size = size;
    this.stack = new Array(size);
    this.top = -1;
  }

  push(element) {
    if (this.top >= this.size - 1) {
      console.log("Stack Overflow");
      return;
    }
    this.stack[++this.top] = element;
    console.log(`Pushed ${element}`);
  }

  pop() {
    if (this.top < 0) {
      console.log("Stack Underflow");
      return;
    }
    const popped = this.stack[this.top--];
    console.log(`Popped ${popped}`);
  }

  peek() {
    if (this.top < 0) {
      console.log("Stack is empty");
      return;
    }
    console.log(`Top element: ${this.stack[this.top]}`);
  }

  display() {
    if (this.top < 0) {
      console.log("Stack is empty");
      return;
    }
    let result = "Stack elements:";
    for (let i = this.top; i >= 0; i--) {
      result += ` ${this.stack[i]}`;
    }
    console.log(result);
  }
}

const stack = new Stack(5);

stack.push(10);
stack.push(20);
stack.push(30);
stack.pop();
stack.push(40);
stack.peek();
stack.display();