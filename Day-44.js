//100Daysofcode
//Day44

class SongNode {
  constructor(title) {
    this.title = title;
    this.next = null;
  }
}

class MusicPlaylist {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addSongEnd(title) {
    const newNode = new SongNode(title);
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

  addSongBeginning(title) {
    const newNode = new SongNode(title);
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

  showPlaylist() {
    if (!this.head) {
      console.log("Playlist is empty.");
      return;
    }
    let current = this.head;
    const result = [];
    do {
      result.push(current.title);
      current = current.next;
    } while (current !== this.head);
    console.log(result.join(" -> "));
  }

  playSongs(k) {
    if (!this.head) {
      console.log("No songs to play.");
      return;
    }
    let current = this.head;
    for (let i = 0; i < k; i++) {
      console.log(`Playing: ${current.title}`);
      current = current.next;
    }
  }
}

const playlist = new MusicPlaylist();
playlist.addSongEnd("Shape of You");
playlist.addSongEnd("Believer");
playlist.addSongBeginning("Senorita");

playlist.showPlaylist();
playlist.playSongs(5);