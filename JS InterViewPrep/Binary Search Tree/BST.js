class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        let node = new BST(val);
        if (val < this.val) {
            if (!this.left) {
                this.left = node;
            } else {
                this.left.insert(val);
            }
        } else {
            if (!this.right) {
                this.right = node;
            } else {
                this.right.insert(val);
            }
        }
    }
}


let test = () => {
    let root = new BST(50);
    root.insert(25);
    root.insert(100);
    root.insert(35);
    root.insert(20);
    root.insert(105)
    root.insert(90)
    console.log(root)
}
test()