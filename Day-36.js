//100Daysofcode
//Day36

class SongNode {
  constructor(name) {
    this.name = name;
    this.prev = null;
    this.next = null;
  }
}

class PlaylistManager {
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

    if (index === 1 && this.head.next === current) this.head.next = newNode;
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

const playlist = new PlaylistManager();
playlist.addAtHead("SongA");
playlist.addAtTail("SongB");
playlist.addAtTail("SongC");
playlist.addAtIndex(1, "SongX");
playlist.showForward();   // SongA → SongX → SongB → SongC
playlist.showBackward();  // SongC → SongB → SongX → SongA
