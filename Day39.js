//100Daysofcode
//Day39

class TabNode {
  constructor(name) {
    this.name = name;
    this.prev = null;
    this.next = null;
  }
}

class BrowserTabs {
  constructor() {
    this.head = null;
    this.tail = null;
    this.currentTab = null;
  }

  openTabEnd(name) {
    const newNode = new TabNode(name);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.currentTab = newNode;
  }

  openTabAt(position, name) {
    const newNode = new TabNode(name);
    if (position === 0) {
      newNode.next = this.head;
      if (this.head) this.head.prev = newNode;
      this.head = newNode;
      if (!this.tail) this.tail = newNode;
      this.currentTab = newNode;
      return;
    }

    let current = this.head;
    let i = 0;

    while (current && i < position) {
      current = current.next;
      i++;
    }

    if (!current) {
      this.openTabEnd(name);
      return;
    }

    newNode.prev = current.prev;
    newNode.next = current;
    if (current.prev) current.prev.next = newNode;
    current.prev = newNode;
    this.currentTab = newNode;
  }

  closeTabAt(position) {
    if (!this.head) return;

    if (position === 0) {
      if (this.head === this.tail) {
        this.head = this.tail = this.currentTab = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
        this.currentTab = this.head;
      }
      return;
    }

    let current = this.head;
    let i = 0;

    while (current && i < position) {
      current = current.next;
      i++;
    }

    if (!current) return;

    if (current === this.tail) {
      this.tail = this.tail.prev;
      this.tail.next = null;
      this.currentTab = this.tail;
    } else {
      if (current.prev) current.prev.next = current.next;
      if (current.next) current.next.prev = current.prev;
      this.currentTab = current.prev;
    }
  }

  moveNext() {
    if (this.currentTab && this.currentTab.next) {
      this.currentTab = this.currentTab.next;
      console.log(this.currentTab.name);
    } else {
      console.log("No next tab.");
    }
  }

  movePrev() {
    if (this.currentTab && this.currentTab.prev) {
      this.currentTab = this.currentTab.prev;
      console.log(this.currentTab.name);
    } else {
      console.log("No previous tab.");
    }
  }

  showForward() {
    let result = [];
    let temp = this.head;
    while (temp) {
      result.push(temp.name);
      temp = temp.next;
    }
    console.log(result.join(" → "));
  }

  showBackward() {
    let result = [];
    let temp = this.tail;
    while (temp) {
      result.push(temp.name);
      temp = temp.prev;
    }
    console.log(result.join(" → "));
  }
}
const tabs = new BrowserTabs();
tabs.openTabEnd("Google");
tabs.openTabEnd("YouTube");
tabs.openTabEnd("GitHub");
tabs.openTabAt(1, "LinkedIn");
tabs.showForward();         // Google → LinkedIn → YouTube → GitHub
tabs.closeTabAt(2);
tabs.showForward();         // Google → LinkedIn → GitHub
tabs.moveNext();            // LinkedIn
tabs.movePrev();            // Google
tabs.showBackward();        // GitHub → LinkedIn → Google
