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
        //base case: if the current nodes value is the same as the input value return true
        if (this.val === val) {
            return true;
        }
        //if the input value is less than the current nodes value
        if (val < this.val) {
            //first check if theres a left child, if not return false
            if (!this.left) return false;
            //if there is a left child return the left child calling the contains method on it with the input value
            return this.left.contains(val);
            //otherwise that means the input value is greater than the current n odes value 
        } else {
            //first check if theres a right child of the current node, if not return false
            if (!this.right) return false;
            //if there is return the right child calling the contains method on it with the input value passed in
            return this.right.contains(val);
        }
        return false;
    }
    //in order depth first traversal
    depthFirstTraverse(func) {
        //if there is a left child of the current node, run the depthFirstTraverse method on it passing in the input func
        if (this.left) {
            this.left.depthFirstTraverse(func);
        }
        //run the  input func on the current nodes values
        func(this.val);
        //if there is a right child of the current node run the depthFirstTraverse method on it passing in the input func
        if (this.right) {
            this.right.depthFirstTraverse(func);
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
    // console.log(root)
    console.log(root.depthFirstTraverse((val) => {
        console.log(val)
    }))
}
test()