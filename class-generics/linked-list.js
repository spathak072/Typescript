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

    insertAt(index, value) {
        if (index < 0 || index > this.length) {
            throw new Error("Index out of bounds");
        }
        const node = new ListNode(value);
        if (index === 0) {
            node.next = this.root;
            this.root = node;
            if (!this.tail) {
                this.tail = node; // If the list was empty, set tail to the new node
            }
        } else {
            let current = this.root;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            node.next = current.next;
            current.next = node;
            if (node.next === null) {
                this.tail = node; // Update tail if we inserted at the end
            }
        }
        this.length++;
    }
    removeAt(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        if (index === 0) {
            this.root = this.root.next;
            if (!this.root) {
                this.tail = null; // If the list is now empty, set tail to null
            }
        } else {
            let current = this.root;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next ? current.next.next : null;
            if (current.next === null) {
                this.tail = current; // Update tail if we removed the last node
            }
        }
        this.length--;
    }
    get(index) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        let current = this.root;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.value;
    }
    set(index, value) {
        if (index < 0 || index >= this.length) {
            throw new Error("Index out of bounds");
        }
        let current = this.root;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        current.value = value;
    }
    clear() {
        this.root = null;
        this.tail = null;
        this.length = 0;
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
