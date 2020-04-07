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
    insert(value) {
        var newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        } else {
            var current = this.root;
            while(true) {
                // handle duplicates
                if (value === current.value) {
                    return undefined;
                }
                if (value < current.value) {
                    // left
                    if (current.left === null) {
                        // found spot
                        current.left = newNode;
                        return this;
                    } else {
                        // move dipper in left
                        current = current.left;
                    }
                } else if (value > current.value) {
                    // right
                    if (current.right === null) {
                        // found spot
                        current.right = newNode;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }
    contains(value) {
        if (this.root === null) {
            return false;
        }
        var current = this.root;
        var found = false;
        while (current && !found) {
            if (value < current.value) {
                current = current.left;
            } else if (value = current.value) {
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }

    bfs() {
        var data = [];
        var queue = [];
        var node = this.root;
        queue.push(this.root); // 10
        while (queue.length) {
            node = queue.shift();
            data.push(node);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    dfsPreOrder() {
        var data = [];
        function traverse(node) {
            data.push(node);
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);

        return data;
    }

    dfsPostOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            if (node.right) {
                traverse(node.right);
            }
            data.push(node);
        }

        traverse(this.root);

        return data;
    }

    dfsInOrder() {
        var data = [];
        function traverse(node) {
            if (node.left) {
                traverse(node.left);
            }
            data.push(node);
            if (node.right) {
                traverse(node.right);
            }
        }

        traverse(this.root);

        return data;
    }
}

//          10
//      5       13
//     2  7   11   16 
// QUEUE: [10]
// DATA:  [10]
var tree = new BinarySearchTree();
