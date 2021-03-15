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
        let index = this.hash(key)
        if (this.storage[index]) {
            let node = this.storage[index];
            while (node) {
                if (node.key === key) {
                    node.val = value;
                    return;
                }
                if (node.next === null && node.key !== key) {
                    let next = this.storage[index];
                    let newNode = new BucketNode(key, value, next);
                    this.storage[index] = newNode;
                }
                node = node.next;
            }
        } else {
            let newBucketNode = new BucketNode(key, value);
            this.storage[index] = newBucketNode;
        }
    }

    get(key) {
        let index = this.hash(key);
        console.log(index)
        if (this.storage[index].next === null) {
            return this.storage[index].val;
        } else {
            let node = this.storage[index];
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