class ListNode<T> {
    next?: ListNode<T>; // Optional property
    constructor(public value:T) {
        
    }
}
class LinkedList<T> {
    private root?:ListNode<T>; // Optional property
    private tail?:ListNode<T>; // Optional property
    private length = 0;

    getLength(): number {
        return this.length;
    }

    

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

    print(){
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}

const numberList = new LinkedList<number>();
numberList.add(1);
numberList.add(2);
numberList.add(3);
numberList.print();
console.log("Length of numberList:", numberList.getLength());
const nameList = new LinkedList<string>();

