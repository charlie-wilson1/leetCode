class BucketNode {
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = next || null;
    }
}

class HashTable {
    constructor(size) {
        this.storage = new Array(size);
        this.storageSize = this.storage.length;
    }

    hash(string) {
        let hashedNum = 0;
        for (let i = 0; i < string.length; i++) {
            hashedNum += string.charCodeAt(i);
        }
        return (hashedNum % this.storageSize);
    }

    insert(key, value) {
        //set index to hased value of input key
        let index = this.hash(key)
        //if there is already something stored at that index in the storage array
        if (this.storage[index]) {
            //start to iterate over the linked list stored at this index
            let node = this.storage[index];
            while (node) {
                //if the current nodes key equals the input key
                if (node.key === key) {
                    //update that nodes value with the input value
                    node.val = value;
                    //return to break loop
                    return;
                }
                //if the nodes next value is null and the nodes key isnt the input key
                if (node.next === null && node.key !== key) {
                    //instantiate a new BucketNode with the input key, value and current LinkedList at the index as its next value and set that BucketNode to be the element at the index
                    let next = this.storage[index];
                    let newNode = new BucketNode(key, value, next);
                    this.storage[index] = newNode;
                }
                //move to next node
                node = node.next;
            }
        } else {
            //otherwise there is currently nothing at this idex and just create a new BucketNode with key and val and insert at index
            let newBucketNode = new BucketNode(key, value);
            this.storage[index] = newBucketNode;
        }
    }

    get(key) {
        //set index to hased value of input key
        let index = this.hash(key);
        // if the next value of the element at the index is null that means that there is only one node and just return its value
        if (this.storage[index].next === null) {
            return this.storage[index].val;
        } else {
            //otherwise iterate over the LinkedList and once you find the node with the same key, return its value
            let node = this.storage[index].next;
            while (node) {
                if (node.key === key) {
                    return node.val;
                }
                node = node.next;
            }
        }
    }
}

let test = () => {
    let newHT = new HashTable(10);
    newHT.insert('Brian', 'cool');
    newHT.insert('Brian', 'fast');
    newHT.insert('Jamie', 'mighty');
    newHT.insert('June', 'baby');
    newHT.insert('here we', 'wang')
    console.log(newHT.get('June'))
    console.log(newHT.storage)
}
test();