"use strict";
class ListNode {
    value;
    next; // Optional property
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root; // Optional property
    tail; // Optional property
    length = 0;
    getLength() {
        return this.length;
    }
    add(value) {
        const node = new ListNode(value);
        if (!this.root) {
            this.root = node;
            this.tail = node;
            this.length++;
            return;
        }
        this.tail.next = node; // Use non-null assertion operator
        this.tail = node; // Update tail to the new node
        this.length++;
    }
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
const numberList = new LinkedList();
numberList.add(1);
numberList.add(2);
numberList.add(3);
numberList.print();
console.log("Length of numberList:", numberList.getLength());
const nameList = new LinkedList();
