//100Daysofcode
//Day49

class Node {
  constructor(adName) {
    this.adName = adName;
    this.next = null;
  }
}

class CarouselAds {
  constructor() {
    this.head = null;
  }

  addAd(adName) {
    const newNode = new Node(adName);
    if (!this.head) {
      newNode.next = newNode;
      this.head = newNode;
      return;
    }

    let tail = this.head;
    while (tail.next !== this.head) {
      tail = tail.next;
    }
    tail.next = newNode;
    newNode.next = this.head;
  }

  removeAd(adName) {
    if (!this.head) return;

    let current = this.head;
    let prev = null;

    do {
      if (current.adName === adName) {
        if (prev) {
          prev.next = current.next;
          if (current === this.head) this.head = current.next;
        } else {
          if (current.next === this.head) {
            this.head = null;
          } else {
            let tail = this.head;
            while (tail.next !== this.head) {
              tail = tail.next;
            }
            tail.next = current.next;
            this.head = current.next;
          }
        }
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }

  showAds() {
    if (!this.head) {
      console.log("No ads to display");
      return;
    }

    let result = [];
    let current = this.head;
    do {
      result.push(current.adName);
      current = current.next;
    } while (current !== this.head);

    console.log(result.join(" -> "));
  }

  rotateAndShow(k) {
    if (!this.head || k <= 0) {
      console.log("Current Ad: None");
      return;
    }

    let current = this.head;
    for (let i = 0; i < k; i++) {
      current = current.next;
    }
    console.log("Current Ad:", current.adName);
  }
}

// Example usage
const carousel = new CarouselAds();
carousel.addAd("Nike");
carousel.addAd("Adidas");
carousel.addAd("Puma");
carousel.addAd("Reebok");
carousel.showAds();           // Nike -> Adidas -> Puma -> Reebok
carousel.rotateAndShow(5);    // Current Ad: Adidas
carousel.removeAd("Puma");
carousel.showAds();           // Nike -> Adidas -> Reebok
carousel.rotateAndShow(3);    // Current Ad: Reebok