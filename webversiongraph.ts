


class GraphNode {
    name: string;
    description: string;
    parents = Array<GraphNode>();
    
    constructor(name: string, description: string, parents: GraphNode[]) {
        this.name = name;
        this.description = description;
        this.parents = parents;
    }

};


// Put content into div
function InitGraphNode(divId : string) {
    document.getElementById(divId).innerHTML = "Hello World!";  
}  