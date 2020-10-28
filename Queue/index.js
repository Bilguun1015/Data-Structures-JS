// FIFO FIrst In First Out
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newItem = new Node(val);
    if (this.first === null) {
      this.first = newItem;
      this.last = newItem;
    } else {
      this.last.next = newItem;
      this.tail = newItem;
    }
    this.size++;
  }

  dequeue() {}
}
