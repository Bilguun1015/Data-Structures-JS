class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let current = this.root;

    while (true) {
      if (val === current.value) return undefined;
      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
  contains(val) {
    if (this.root === null) return false;

    let current = this.root,
      found = false;

    while (current && !found) {
      if (current.value === val) return true;
      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(9);
tree.insert(8);
tree.insert(11);
tree.insert(12);
// console.log(tree);
console.log(tree.search(13));
