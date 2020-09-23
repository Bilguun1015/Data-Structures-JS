class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.prev;
      this.tail.next = null;
      removed.prev = null;
    }
    this.length--;
    return removed;
  }

  shift() {
    if (this.length === 0) return undefined;

    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(i) {
    if (i < 0 || i >= this.length) return null;

    let counter, node;
    if (i <= this.length / 2) {
      counter = 0;
      node = this.head;
      while (i !== counter) {
        node = node.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      node = this.tail;
      while (i !== counter) {
        node = node.prev;
        counter--;
      }
    }
    return node;
  }

  set(i, val) {
    let node = this.get(i);

    if (node !== null) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return !!this.unshift(val);
    if (i === this.length) return !!this.push(val);

    let newNode = new Node(val);
    let prev = this.get(i - 1);
    let next = prev.next;

    (prev.next = newNode), (newNode.prev = prev);
    (next.prev = newNode), (newNode.next = next);

    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return undefined;
    if (i === 0) return this.shift();
    if (i === this.length - 1) return this.pop();

    let removed = this.get(i);
    let prev = removed.prev;
    let next = removed.next;

    prev.next = next;
    next.prev = prev;

    removed.prev = null;
    removed.next = null;

    this.length--;
    return removed;
  }

  reverse() {
    if (!this.head) return undefined;
    let current = this.head;
    [this.head, this.tail] = [this.tail, this.head];
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = current.next; // 10
      current.next = prev; // null
      current.prev = next;
      prev = current;
      current = next;
    }
    return this;
  }
}

let list = new DoublyLinkedList();

list.push(100);
list.push(99);
list.push(98);

list.reverse();

console.log(list);
