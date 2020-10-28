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
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    let removed = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    removed.next = null;
    this.size--;
    return removed.val;
  }
}

const q = new Queue();
q.enqueue(1);
q.enqueue(2);
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
