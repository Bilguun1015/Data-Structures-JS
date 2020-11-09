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

  bfs() {
    let visited = [],
      queue = [],
      node = this.root;

    queue.push(node);
    while (queue.length !== 0) {
      node = queue.shift();
      visited.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visited;
  }
  // depth first search - preorder
  dfsPreOrder() {
    let visited = [],
      current = this.root;

    const traverse = (node) => {
      visited.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(current);

    return visited;
  }
  //depth first search - postorder
  dfsPostOrder() {
    let visited = [],
      current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visited.push(node.value);
    };
    traverse(current);

    return visited;
  }

  dfsInOrder() {
    let visited = [],
      current = this.root;

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      visited.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(current);

    return visited;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(9);
tree.insert(8);
tree.insert(8.5);
tree.insert(7);
tree.insert(13);
tree.insert(3);
tree.insert(12);
tree.insert(14);
tree.insert(11);
// console.log(tree);
// console.log(tree.contains(11));
// console.log(tree.bfs());
console.log(tree.dfsInOrder());
//         10
//     9         13
//   8         12   14
// 7      11
// 3
//[3,7,8,9,10,13,12,11,14]
