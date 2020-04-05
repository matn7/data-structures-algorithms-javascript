class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size =  0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode
        }
        return ++this.size;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        var temp = this.first;
        if (this.first === this.last) {
            this.first = null;
            this.last = null;
        } else {
            this.first = temp.next;
        }
        this.size--;
        return temp;

    }
}

var queue = new Queue();

queue.enqueue("FIRST");
queue.enqueue("SECOND");
queue.enqueue("THIRD");
console.log(queue);
queue.dequeue();
console.log("----------");
console.log(queue);