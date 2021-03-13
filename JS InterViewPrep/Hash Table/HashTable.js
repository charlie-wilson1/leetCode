class BucketNode {
    constructor(key, val, next) {
        this.key = key;
        this.val = val;
        this.next = null;
    }
}

class HashTable {
    constructor(size) {
        this.storage = new Array(size);
        this.storageSize = this.storage.length;
    }
}

let test = () => {
    let newHT = new HashTable(10);
    console.log(newHT)
}
test()