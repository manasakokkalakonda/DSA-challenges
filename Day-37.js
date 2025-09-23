//100Daysofcode
//Day37

class SongNode {
  constructor(name) {
    this.name = name;
    this.prev = null;
    this.next = null;
  }
}

class PlaylistEditor {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addAtHead(name) {
    const newNode = new SongNode(name);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  addAtTail(name) {
    const newNode = new SongNode(name);
    if (!this.tail) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  addAtIndex(index, name) {
    if (index === 0) return this.addAtHead(name);

    let current = this.head;
    let i = 0;

    while (current && i < index) {
      current = current.next;
      i++;
    }

    if (!current) return this.addAtTail(name);

    const newNode = new SongNode(name);
    newNode.prev = current.prev;
    newNode.next = current;

    if (current.prev) current.prev.next = newNode;
    current.prev = newNode;
  }

  deleteAtHead() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
  }

  deleteAtTail() {
    if (!this.tail) return;
    if (this.head === this.tail) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
  }

  deleteAtIndex(index) {
    if (index === 0) return this.deleteAtHead();

    let current = this.head;
    let i = 0;

    while (current && i < index) {
      current = current.next;
      i++;
    }

    if (!current) return;
    if (current === this.tail) return this.deleteAtTail();
    if (current.prev) current.prev.next = current.next;
    if (current.next) current.next.prev = current.prev;
  }

  showForward() {
    let result = [];
    let current = this.head;
    while (current) {
      result.push(current.name);
      current = current.next;
    }
    console.log(result.join(" → "));
  }

  showBackward() {
    let result = [];
    let current = this.tail;
    while (current) {
      result.push(current.name);
      current = current.prev;
    }
    console.log(result.join(" → "));
  }
}

const playlist = new PlaylistEditor();
playlist.addAtHead("SongA");
playlist.addAtTail("SongB");
playlist.addAtTail("SongC");
playlist.addAtIndex(1, "SongX");
playlist.showForward();       // SongA → SongX → SongB → SongC
playlist.deleteAtIndex(2);
playlist.showForward();       // SongA → SongX → SongC
playlist.showBackward();      // SongC → SongX → SongA
playlist.deleteAtHead();
playlist.deleteAtTail();
playlist.showForward();       // SongX
