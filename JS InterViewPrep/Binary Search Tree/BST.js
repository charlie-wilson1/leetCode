class BST {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    insert(val) {
        //instantiate a new BST node with passed in value
        let node = new BST(val);
        //if the input value is less than the parents value
        if (val < this.val) {
            //check if there is no left node on the current node
            if (!this.left) {
                //if there isnt add the new node as this nodes left child
                this.left = node;
            } else {
                //otherwise call the insert method on the current nodes left node (recurse);
                this.left.insert(val);
            }
            //otherwise that means the input value is greater than the current nodes value
        } else {
            //if the current node doesnt have a right child
            if (!this.right) {
                //add the new node as this nodes right child
                this.right = node;
            } else {
                //otherwise call the insert method on the current modes right child with the input value
                this.right.insert(val);
            }
        }
    }

    contains(val) {
        if (this.val === val) {
            return true;
        }
        if (val < this.val) {
            if (!this.left) return false;
            return this.left.contains(val);
        } else {
            if (!this.right) return false;
            return this.right.contains(val);
        }
        return false;
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
    console.log(root.contains(107))
}
test()