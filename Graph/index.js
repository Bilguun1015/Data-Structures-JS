class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(v1) {
    this.adjacencyList[v1].forEach((v2) => {
      this.removeEdge(v1, v2);
    });

    delete this.adjacencyList[v1];
  }

  dftRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(v) {
      if (!adjacencyList[v]) return null;
      visited[v] = true;
      result.push(v);

      adjacencyList[v].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return result;
  }

  dftIteritive(start) {
    const result = [],
      visited = {},
      stack = [start];
    let vertex;
    visited[start] = true;

    while (stack.length) {
      vertex = stack.pop();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  bft(start) {
    const queue = [start],
      result = [],
      visited = {};
    let vertex;
    visited[start] = true;

    while (queue.length) {
      vertex = queue.shift();
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }
}

const g = new Graph();
g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');
g.addEdge('A', 'B');
g.addEdge('A', 'C');
g.addEdge('B', 'D');
g.addEdge('C', 'E');
g.addEdge('D', 'E');
g.addEdge('D', 'F');
g.addEdge('E', 'F');

console.log(g.dftRecursive('A'));
console.log(g.dftIteritive('A'));
console.log(g.bft('A'));
