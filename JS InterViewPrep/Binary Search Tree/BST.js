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

    dftPreorder(func) {
        //start by running the input function on the current nodes value
        func(this.val);
        //then go all the way through the left branch of the tree
        if (this.left) {
            this.left.dftPreorder(func);
        }
        //once youve gone through the entire left side of the root nodethen start checking for right nodes 
        if (this.right) {
            this.right.dftPreorder(func);
        }
    }

    dftPostOrder(func) {
        //if the current node has a left child traverse dount to that one
        if (this.left) {
            this.left.dftPostOrder(func);
        }
        //if the current node has a right child, traverse down to that
        if (this.right) {
            this.right.dftPostOrder(func);
        }
        //first if the current node doesnt have a right or left child then run the input function on its value
        func(this.val)
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
    console.log(root.dftPostOrder((val) => {
        console.log(val)
    }))
}
test()