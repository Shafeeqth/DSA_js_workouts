class Graph {
    constructor() {
        this.graph = {};

    }
    addVertex(ver) {
        if(ver in this.graph) {
            return console.log(ver, ' already exist in graph');
        }
        this.graph[ver] = [];
    }
    addEdge(ver1, ver2) {
        if(!(ver1 in this.graph)) {
            return console.log(ver1, ' not exist in the graph');
        } if(!(ver2 in this.graph)) {
            return console.log(ver2, ' not exist in the graph');
        }
        this.graph[ver1].push(ver2);
        this.graph[ver2].push(ver1);

    }
    removeEdge(ver1, ver2) {
        if(!(ver1 in this.graph)) {
            return console.log(ver1, ' not exist in the graph');
        } if(!(ver2 in this.graph)) {
            return console.log(ver2, ' not exist in the graph');
        }
        let idx1 = this.graph[ver1].findIndex((item) => item === ver2);
        this.graph[ver1].splice(idx1, 1);
        let idx2 = this.graph[ver2].findIndex(item => item === ver2);
        this.graph[ver2].splice(idx2, 1);

        
    }
    removeVertex(ver) {
        if(!(ver in this.graph)) {
            return console.log(ver, ' not exist in the graph');
        }
        for(let ver in graph) {
            
            
        }
        delete this.graph[ver]
    }
    BFS(ver) {
        let queue = [ver];
        let seen = new Set();
        while (queue.length) {
            let node = queue.shift();
            
            for(let vert of this.graph[node]) {
                if(!seen.has(vert)) {
                    queue.push(vert);
                    console.log(node)
                    seen.add(vert);
                }
            }
        }
    }
    DFS(node, seen=new Set()) {
        if(!(node in this.graph)) {
           return console.log(node, " not found in the graph");
        }
        if(!seen.has(node)) {
            console.log(node);
            
            for(let ver of this.graph[node]) {
                console.log(ver);
                seen.add(ver);
                this.DFS(ver, seen);
            }
        }
    }
  
}
let graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')
graph.addVertex('D')
graph.addVertex('E')
graph.addVertex('F')


graph.addEdge('A', "B")
graph.addEdge('A', "F")
graph.addEdge('A', "C")
graph.addEdge('A', "E")
graph.addEdge('B', "D")
graph.addEdge('C', "B")
graph.addEdge('E', "F")
// graph.BFS("A")
// graph.removeEdge('A', "B")
graph.DFS('A')