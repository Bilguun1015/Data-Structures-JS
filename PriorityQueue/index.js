class Node {
  constructor(val, priority) {
    this.priority = priority;
    this.val = val;
  }
}

class MinBinaryHeap {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp(newNode);
  }

  bubbleUp(node) {
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (node.priority >= parent) break;
      this.values[parentIdx] = node;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {}
}
