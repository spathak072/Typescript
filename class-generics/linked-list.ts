class ListNode<T> {
    next?: ListNode<T>; // Optional property
    constructor(public value:T) {
        
    }
}
class LinkedList<T> {
    private root?:ListNode<T>; // Optional property
    private length = 0;

    add(value:T): void {
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

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();

