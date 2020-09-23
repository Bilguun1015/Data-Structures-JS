// Stack is FILO first in last out

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.length;
  }

  pop() {
    if (!this.first) return null;
    let popped = this.first;
    if (this.length === 1) {
      this.first = null;
      this.last = null;
    } else {
      this.first = popped.next;
      popped.next = null;
    }
    this.length--;
    return popped.val;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack);
