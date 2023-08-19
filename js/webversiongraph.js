var GraphNode = /** @class */ (function () {
    function GraphNode(name, description, parents) {
        this.parents = Array();
        this.name = name;
        this.description = description;
        this.parents = parents;
    }
    return GraphNode;
}());
;
// Put content into div
function InitGraphNode(divId) {
    document.getElementById(divId).innerHTML = "Hello World!";
}
