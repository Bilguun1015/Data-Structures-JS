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
}

const g = new Graph();
g.addVertex('Tokyo');
g.addVertex('Mongolia');
g.addVertex('Korea');
g.addEdge('Tokyo', 'Mongolia');
g.addEdge('Tokyo', 'Korea');
console.log(g.adjacencyList);
g.removeVertex('Tokyo');
g.removeVertex('Mongolia');
// g.removeEdge('Korea', 'Tokyo');
console.log(g.adjacencyList);
