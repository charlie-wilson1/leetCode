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
    removeFromHead() {
        //if there is no head return null
        if (!this.head) {
            return null;
            //point the head at the heads next value
        } else {
            let temp = this.head.val;
            this.head = this.head.next;
            return temp
        }

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
    //remove from head
}




//remove from tail

let test = () => {
    let newList = new LinkedList();
    // newList.addToHead(14);
    newList.addToTail(15)
    newList.addToTail(16)
    newList.addToHead(17)
    console.log(newList.removeFromHead())
    console.log(newList)
    console.log()
}
test()