//100Daysofcode
//Day40

class TweetNode {
    constructor(content) {
        this.content = content;
        this.prev = null;
        this.next = null;
    }
}

class TwitterFeed {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    postTweet(content) {
        const newNode = new TweetNode(content);
        if (!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    deleteOldest() {
        if (!this.tail) return;
        if (this.head === this.tail) {
            this.head = this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
        }
    }

    deleteAtIndex(index) {
        if (index < 0 || !this.head) return;

        let current = this.head;
        let i = 0;

        while (current && i < index) {
            current = current.next;
            i++;
        }
        if (!current) return;

        if (current === this.head) {
            this.head = current.next;
            if (this.head) this.head.prev = null;
            else this.tail = null;
        } else if (current === this.tail) {
            this.tail = current.prev;
            if (this.tail) this.tail.next = null;
            else this.head = null;
        } else {
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
    }

    showFeedForward() {
        let result = [];
        let current = this.head;
        while (current) {
            result.push(current.content);
            current = current.next;
        }
        console.log(result.join(" → "));
    }

    showFeedBackward() {
        let result = [];
        let current = this.tail;
        while (current) {
            result.push(current.content);
            current = current.prev;
        }
        console.log(result.join(" → "));
    }
}

const feed = new TwitterFeed();

feed.postTweet("Hello");
feed.postTweet("DSA Day 40");
feed.postTweet("Linked Lists are fun!");
feed.showFeedForward();       // Linked Lists are fun! → DSA Day 40 → Hello
feed.deleteAtIndex(1);
feed.showFeedForward();       // Linked Lists are fun! → Hello
feed.deleteOldest();
feed.showFeedForward();       // Linked Lists are fun!
feed.showFeedBackward();      // Linked Lists are fun!