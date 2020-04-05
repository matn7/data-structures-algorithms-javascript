class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            var temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) {
            return null;
        }
        var temp = this.first;
        if (this.size === 1) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }
        this.size--;
        return temp.value;
    }

}

var stack = new Stack();
stack.push(9);
stack.push(99);
console.log(stack);
stack.pop();
stack.pop();
console.log("---------------------")
console.log(stack);