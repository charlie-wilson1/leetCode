/*
Design a HashMap without using any built-in hash table libraries.

To be specific, your design should include these functions:

put(key, value) : Insert a (key, value) pair into the HashMap. If the value already exists in the HashMap, update the value.
get(key): Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
remove(key) : Remove the mapping for the value key if this map contains the mapping for the key.

Example:
MyHashMap hashMap = new MyHashMap();
hashMap.put(1, 1);          
hashMap.put(2, 2);         
hashMap.get(1);            // returns 1
hashMap.get(3);            // returns -1 (not found)
hashMap.put(2, 1);          // update the existing value
hashMap.get(2);            // returns 1 
hashMap.remove(2);          // remove the mapping for 2
hashMap.get(2);            // returns -1 (not found) 

Note:

All keys and values will be in the range of [0, 1000000].
The number of operations will be in the range of [1, 10000].
Please do not use the built-in HashMap library.
*/

class ListNode {
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}
class MyHashMap {
    constructor() {
        this.size = 19997
        this.mult = 12582917
        this.data = new Array(this.size)
    }
    hash(key) {
        return key * this.mult % this.size
    }
    put(key, value) {
        this.remove(key)
        let hashed = this.hash(key);
        let node = new ListNode(key, value, this.data[hashed]);
        this.data[hashed] = node;
    }
    get(key) {
        let hashed = this.hash(key);
        if (this.data[hashed] === undefined) {
            return -1;
        }
        if (this.data[hashed].key === key) {
            return this.data[hashed].val;
        } else {
            let node = this.data[hashed].next;
            while (node.next !== undefined) {
                if (node.key === key) {
                    return node.val;
                }
                node = node.next;
            } 
        }
        return -1;
    }
    remove(key) {
        let hashed = this.hash(key);
        if (this.data[hashed] === undefined) {
            return
        }
        if (this.data[hashed].key === key) {
            this.data[hashed] = this.data[hashed].next;
        } else {
            let node = this.data[hashed.next];
            while (node.next !== undefined) {
                if (node.key === key) {
                    node.next = node.next.next;
                    return;
                }
            }
        }

    }

}

let test = () => {
    let hashMap = new MyHashMap();
    hashMap.put(1, 1);  
    hashMap.put(2, 2);         
    console.log(hashMap.get(1));            // returns 1
    console.log(hashMap.get(3));            // returns -1 (not found)
    hashMap.put(2, 1);          // update the existing value
    console.log(hashMap.get(2));            // returns 1 
    hashMap.remove(2);          // remove the mapping for 2
    console.log(hashMap.get(2));            // returns -1 (not found) 
}
test()