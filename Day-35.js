//100Daysofcode
//Day35

class PhotoNode {
  constructor(photoName) {
    this.photo = photoName;
    this.prev = null;
    this.next = null;
  }
}

class PhotoGallery {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addPhotoAtEnd(photoName) {
    const newNode = new PhotoNode(photoName);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
  }

  addPhotoAtBeginning(photoName) {
    const newNode = new PhotoNode(photoName);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
  }

  viewForward() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.photo);
      current = current.next;
    }
    console.log("Forward:", result.join(" → "));
  }

  viewBackward() {
    let current = this.tail;
    const result = [];
    while (current) {
      result.push(current.photo);
      current = current.prev;
    }
    console.log("Backward:", result.join(" → "));
  }
}

const gallery = new PhotoGallery();

gallery.addPhotoAtEnd("P1");
gallery.addPhotoAtEnd("P2");
gallery.addPhotoAtBeginning("P0");

gallery.viewForward();   // Forward: P0 → P1 → P2
gallery.viewBackward();  // Backward: P2 → P1 → P0
