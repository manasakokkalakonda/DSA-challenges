//100Daysofcode
//Day38

class ActionNode {
  constructor(action) {
    this.action = action;
    this.prev = null;
    this.next = null;
  }
}

class TextEditor {
  constructor() {
    this.head = null;
    this.tail = null;
    this.current = null;
  }

  insertAction(action) {
    const newNode = new ActionNode(action);

    if (this.current && this.current !== this.tail) {
      let temp = this.current.next;
      while (temp) {
        let next = temp.next;
        temp.prev = temp.next = null;
        temp = next;
      }
      this.current.next = null;
      this.tail = this.current;
    }

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.current = newNode;
  }

  undo() {
    if (this.current && this.current.prev) {
      this.current = this.current.prev;
      console.log(this.current.action);
    } else {
      console.log("No previous action to undo.");
    }
  }

  redo() {
    if (this.current && this.current.next) {
      this.current = this.current.next;
      console.log(this.current.action);
    } else {
      console.log("No next action to redo.");
    }
  }

  deleteLastAction() {
    if (!this.tail) return;

    if (this.tail === this.head) {
      this.head = this.tail = this.current = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.current = this.tail;
    }
  }

  showHistoryForward() {
    let result = [];
    let temp = this.head;
    while (temp) {
      result.push(temp.action);
      temp = temp.next;
    }
    console.log(result.join(" → "));
  }

  showHistoryBackward() {
    let result = [];
    let temp = this.tail;
    while (temp) {
      result.push(temp.action);
      temp = temp.prev;
    }
    console.log(result.join(" → "));
  }
}
const editor = new TextEditor();
editor.insertAction("Type A");
editor.insertAction("Type B");
editor.insertAction("Type C");
editor.undo();               // Type B
editor.redo();               // Type C
editor.deleteLastAction();
editor.showHistoryForward(); // Type A → Type B
editor.showHistoryBackward();// Type B → Type A
