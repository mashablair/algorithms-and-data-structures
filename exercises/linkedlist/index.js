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
}

const list = new LinkedList();
list.insertFirst(5);
list.insertFirst(20);
// list; // {"head":{"data":20,"next":{"data":5,"next":null}}}
list.size();

module.exports = { Node, LinkedList };
