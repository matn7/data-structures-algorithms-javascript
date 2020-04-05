class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        var poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.head = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        var oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        var newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
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
        var middle = Math.floor(this.length / 2);
        if (index <= middle) {
            var current = this.head;
            var counter = 0;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            var current = this.tail;
            var counter = this.length - 1;
            while (counter !== index) {
                current = current.prev;
                counter--;
            }
        }
        return current;
    }

    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode != null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return !!this.unshift(val);
        }
        if (index === this.length) {
            return !!this.push(val);
        }

        var newNode = new Node(val);
        var beforeNode = this.get(index - 1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;

        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
            return undefined;
        }
        if (index === 0) {
            return this.shift();
        }
        if (index === this.length - 1) {
            return this.pop();
        }

        var toRemove = this.get(index);
        var beforeNode = toRemove.prev;
        var afterNode = toRemove.next;

        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;
        toRemove.next = null;
        toRemove.prev = null;
        this.length--;
        return toRemove;
    }

    reverse() {
        
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

}

list = new DoublyLinkedList();

list.push(12);
list.push(23);
list.push(99);
list.push("Hello");
list.push("END");

// list.pop();
// list.shift();
// list.unshift(88);
// list.get(4);
// list.set(0, 22222);
// list.insert(1, "After 22222");
// list.remove(1);
list.print();
list.reverse();
list.print();

// console.log(list);
