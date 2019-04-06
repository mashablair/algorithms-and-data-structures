// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

// very simple
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// most action happens here:
class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    // if head already exists, it will be moved
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    console.log(`list size is ${counter}`);
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!node) {
      return null;
    }

    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    let node = this.head;
    let previous = null;

    // if list is empty
    if (!node) {
      return;
    }

    // if only 1 Node
    if (!node.next) {
      this.head = null;
      return;
    }

    // when more than 1 Node
    while (node.next) {
      previous = node;
      node = node.next;
    }

    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    if (!this.head) {
      return null;
    }

    let counter = 0;
    let node = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      node = node.next;
      counter++;
    }
  }
}

const list = new LinkedList();
list.insertFirst("red");
list.insertFirst("blue");
list.insertFirst("green");
// list; // {"head":{"data":20,"next":{"data":5,"next":null}}}
list.size();
// list.getAt(6);
