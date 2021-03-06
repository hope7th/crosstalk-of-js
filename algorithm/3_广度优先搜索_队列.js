function Graph() {
    var vertices = [];
    var adjList = new Dictionary();
    this.addVertex = function (v) {
        vertices.push(v);
        adjList.set(v, []);
    };
    this.addEdge = function (v, w) {
        adjList.get(v).push(w);
        adjList.get(w).push(v);
    };
    this.toString = function () {
        var s = "";
        for (var i = 0; i < vertices.length; i++) {
            s += vertices[i] + "->";
            var neighbors = adjList.get(vertices[i]);
            for (var j = 0; j < neighbors.length; j++) {
                s += neighbors[j] + "  "
            }
            s += "\n";
        };
        return s;
    }
    //广度优先，bfs
    var initializeColor = function () {
        var color = [];
        for (var i = 0; i < vertices.length; i++) {
            color[vertices[i]] = "white";
        }
        return color;
    }
    this.bfs = function (v, callback) {
        var color = initializeColor(),
            queue = new Queue();
        queue.enqueue(v);
        while (!queue.isEmpty()) {
            var u = queue.dequeue(),
                neighbors = adjList.get(u);
            color[u] = "grey";
            for (var i = 0; i < neighbors.length; i++) {
                var w = neighbors[i];
                if (color[w] == "white") {
                    color[w] = "grey";
                    queue.enqueue(w);
                }
            }
            color[u] = "black";
            if (callback) {
                callback(u)
            }
        }
    };
    this.BFS=function(v){
        var color = initializeColor(),
        queue = new Queue(),
        d = [],
        pred = [];
        queue.enqueue(v);
        for(var i=0;i<vertices.length;i++){
            d[vertices[i]] = 0;
            pred[vertices[i]] = null;
        }
        while(!queue.isEmpty()){
            var  u = queue.dequeue(),
            neighbors = adjList.get(u);
            color[u] = "grey";
            for(i=0;i<neighbors.length;i++){
                var w = neighbors[i];
                if(color[w]==="white"){
                    color[w] = "grey";
                    d[w] = d[u] +1;
                    pred[w] = u;
                    queue.enqueue(w);
                }
            }
            color[u] = "black";
        }

        return {
            distances:d,
            predecessors:pred
        };

    }
}

function printNode(value) {
    console.log('Visited vertex: ' + value);
}

var graph = new Graph();
var myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (var i = 0; i < myVertices.length; i++) {
    graph.addVertex(myVertices[i]);
}
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("A", "D");
graph.addEdge("C", "D");
graph.addEdge("C", "G");
graph.addEdge("D", "H");
graph.addEdge("D", "G");
graph.addEdge("B", "E");
graph.addEdge("B", "F");
graph.addEdge("E", "I");

graph.bfs(myVertices[0], printNode)

var shortestPathA = graph.BFS(myVertices[0]);
console.log(shortestPathA);
var fromVertex = myVertices[0];
for(var i=1;i<myVertices.length;i++){
    var toVertex = myVertices[i],
    path = new Stack();
    for(var v=toVertex;v!==fromVertex;v=shortestPathA.predecessors[v]){
        path.push(v);
    }
    path.push(fromVertex);
    var s = path.pop();
    while(!path.isEmpty()){
        s +="-"+path.pop();
    }
    console.log(s)
}
