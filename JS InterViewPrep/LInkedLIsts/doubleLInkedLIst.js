class Node {
    constructor(val, next, prev) {
        this.val = val; this.next = next; this.prev = prev;
    }
}
class LinkedList {
    constructor() {
        this.head = null; this.tail = null;
    }
    // add to head and
    addToHead(val) {
        let newNode = new Node(val, this.head, null);
        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
    }
    //remove from head
    removeFromHead() {
        //if there is no head return null
        if (!this.head) {
            return null;
        } 
        //set a temp var to the current head value
        let temp = this.head.val;
        //point the head at the heads next value
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
        return temp
    }
    // add to tail
    addToTail(val) {
        if (this.tail) {
            let newNode = new Node(val, null, this.tail);
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.addToHead(val)
        }
    }
    //remove from tail
    removeFromTail() {
        //if theres no tail return null
        if (!this.tail) {
            return null;
        }
        //create a temp var set to tails value
        let temp = this.tail.val;
        //point curretn tail to the curretns tails prev value
        this.tail = this.tail.prev;
        //if there is still a tail
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
        return temp;
    }
    //search for
    searchList(val) {
        if (this.head.val === val || this.tail.val === val) {
            return true;
        }
        let root = this.head.next;
        while (root.next !== null) {
            if (root.val === val) {
                return true;
            }
            root = root.next;
        }
        return false;
    }
}

let test = () => {
    let newList = new LinkedList();
    newList.addToHead(14);
    newList.addToTail(15);
    newList.addToTail(16);
    newList.addToHead(17);
    console.log(newList.searchList());
}
test()