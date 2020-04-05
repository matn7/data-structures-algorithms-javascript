class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            newNode.next = null;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        } else {
            var current = this.head;
            var newTail = current;
            while (current.next) {
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;
            this.length--;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
            }
            return current;
        }
    }

    shift() {
        if (!this.head) {
            return undefined;
        } else {
            var currentHead = this.head;
            this.head = currentHead.next;
            this.length--;
            if (this.length === 0) {
                this.tail = null;
            }
            return currentHead;
        }
    }

    unshift(val) {
        var newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            newNode.next = null;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        var counter = 0;
        var current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        var foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = value;
            return true;
        }
        return false;   
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            return !!this.push(val);
        }
        if (index === 0) {
            return !!this.unshift(val);
        } 
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        // newNode.next = prev.next;  
        prev.next = newNode; 
        newNode.next = temp;
        
        this.length++;
        return true;

    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === this.length - 1) {
            return this.pop();
        }
        if (index === 0) {
           return  this.shift();
        }
        var prev = this.get(index - 1);
        var removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    print() {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.val);
            current = current.next;
        }
        console.log(arr);
    }

    reverse() {
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;

        for (var i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;
    }


    // traverse() {
    //     var current = this.head;
    //     while (current) {
    //         console.log(current.val);
    //         current = current.next;
    //     }
    // }
}

// var first = new Node("Hi");
// first.next = new Node("there");
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");

var list = new SinglyLinkedList();
list.push("Hello");
list.push("World");
list.push("How");
list.push("Are");
list.push("YOU");

// list.pop();
// list.pop();
// list.pop();

// list.push("9999");
// list.shift();
// list.shift();
list.unshift("Pierwszy");


console.log(list.insert(5, "INSERTED"));

console.log(list);

list.print();
list.reverse();
list.print();

