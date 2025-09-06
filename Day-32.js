//100Dysofcode
//Day32

class Node {
  constructor(url) {
    this.url = url;
    this.next = null;
  }
}

class BrowserHistory {
  constructor() {
    this.head = null;
    this.current = null;
  }

  visit(url) {
    const newNode = new Node(url);
    if (!this.head) {
      this.head = newNode;
      this.current = newNode;
    } else {
      // Remove forward history
      this.current.next = null;
      this.current.next = newNode;
      this.current = newNode;
    }
    console.log(this.current.url);
  }

  back() {
    if (this.current === this.head) {
      console.log("No previous page");
      return;
    }

    let temp = this.head;
    while (temp.next !== this.current) {
      temp = temp.next;
    }
    this.current = temp;
    console.log(this.current.url);
  }

  forward() {
    if (this.current.next) {
      this.current = this.current.next;
      console.log(this.current.url);
    } else {
      console.log("No forward page");
    }
  }

  showCurrentPage() {
    if (this.current) {
      console.log(this.current.url);
    } else {
      console.log("No page visited yet");
    }
  }
}

const browser = new BrowserHistory();

browser.visit("google.com");
browser.visit("github.com");
browser.visit("linkedin.com");
browser.back();
browser.forward();
browser.visit("stackoverflow.com");
browser.showCurrentPage(); 