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
}
const numberList = new LinkedList();
const nameList = new LinkedList();
