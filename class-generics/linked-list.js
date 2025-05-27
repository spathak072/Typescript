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
    length = 0;
    add(value) {
        const node = new ListNode(value);
        if (!this.root) {
            this.root = node;
            this.length++;
            return;
        }
        let current = this.root;
        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.length++;
    }
}
const numberList = new LinkedList();
const nameList = new LinkedList();
