//100Daysofcode
//Day34

class SongNode {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class Playlist {
  constructor() {
    this.head = null;
  }

  addSongAtEnd(name) {
    const newNode = new SongNode(name);
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

  addSongAtBeginning(name) {
    const newNode = new SongNode(name);
    newNode.next = this.head;
    this.head = newNode;
  }

  deleteSongByName(name) {
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

  deleteSongByPosition(pos) {
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

  showPlaylist() {
    let current = this.head;
    let output = [];
    while (current) {
      output.push(current.name);
      current = current.next;
    }
    console.log(output.join(" → "));
  }
}
const myPlaylist = new Playlist();

myPlaylist.addSongAtEnd("Shape of You");
myPlaylist.addSongAtEnd("Believer");
myPlaylist.addSongAtBeginning("Perfect");
myPlaylist.showPlaylist(); // Perfect → Shape of You → Believer

myPlaylist.deleteSongByName("Believer");
myPlaylist.showPlaylist(); // Perfect → Shape of You

myPlaylist.deleteSongByPosition(2);
myPlaylist.showPlaylist(); // perfect
