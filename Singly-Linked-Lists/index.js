// piece of data - val
// reference to next node - next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    // adds to the end of the list
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    // removes from the end of the list
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    // removes from the beginning of the list
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    // adds to the beginning of the list
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(i) {
    // finds value with a given index
    if (i < 0 || i >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== i) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(i, val) {
    // changes a node with given val
    const node = this.get(i);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(i, val) {
    // inserts a node in a give position
    if (i < 0 || i > this.length) return false;
    if (i === this.length) return !!this.push(val);
    if (i === 0) return !!this.unshift(val);

    let newNode = new Node(val);
    let prevNode = this.get(i - 1);
    let nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(i) {
    // removes a node with a given index
    if (i < 0 || i >= this.length) return undefined;
    if (i === this.length - 1) return this.pop();
    if (i === 0) return this.shift();

    let prevNode = this.get(i - 1);
    let removed = prevNode.next;
    prevNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next; // hi number
      node.next = prev; // hello.null hi.hello
      prev = node; // hello hi
      node = next; // hi number
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push('hello');
list.push('hi');
list.push('number');
list.push('hojo');

// list.unshift(100);
// list.set(3, 'bye');
console.log(list);
list.reverse();
console.log(list);
