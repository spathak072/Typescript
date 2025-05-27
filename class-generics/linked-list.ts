class ListNode<T> {
    next?: ListNode<T>; // Optional property
    constructor(public value:T) {
        
    }
}
class LinkedList<T> {
    private root?:ListNode<T>; // Optional property
    private tail?:ListNode<T>; // Optional property
    private length = 0;

    add(value:T): void {
       const node = new ListNode(value);
         if (!this.root) {
            this.root = node;
            this.tail = node;
            this.length++;
            return;     
         }
        this.tail!.next = node; // Use non-null assertion operator
        this.tail = node; // Update tail to the new node
            this.length++;
    }

}

const numberList = new LinkedList<number>();
const nameList = new LinkedList<string>();

