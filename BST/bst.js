class BST {
    constructor(val = null) {
        this.key = val;
        this.right = null;
        this.left = null;
    }
    insert(val) {
        if (this.key === null) {
            return this.key = val;
        }
        if (this.key === val) {
            return console.log(val, " already exist in the tree");
        }
        else if (val < this.key) {
            if (this.left) {
                this.left.insert(val);
            } else {
                this.left = new BST(val);
            }
        } else {
            if (this.right) {
                this.right.insert(val);
            } else {
                this.right = new BST(val);
            }
        }
    }

    search(val) {
        if (this.key === val) {
            console.log(val, " found in the tree")
            return true;
        } else if (this.key > val) {
            if (this.left) {
                this.left.search(val);
            } else {
                console.log(val, ' does not exist in the tree');
                return false;
            }
        } else {
            if (this.right) {
                this.right.search(val);
            } else {
                console.log(val, ' does not exist in the tree');
                return false;
            }
        }


    }
    preorder() {
        const arr = []
        function _preorder(node) {
            arr.push( node.key);
            if (node.left) {
                _preorder(node.left);
            }
            if (node.right) {
                _preorder(node.right);
            }
        }
        _preorder(this)
        return arr;
    }
    postorder() {
        const arr = []
        function _postorder(node) {
            if (node.left) {
                _postorder(node.left);
            }
            if (node.right) {
                _postorder(node.right);
            }
            arr.push( node.key);
        }
        _postorder(this)
        return arr;
    }
    inorder() {
        const arr = []
        function _inorder(node) {
            if (node.left) {
            
                _inorder(node.left);
            }
            arr.push( node.key);
            if (node.right) {
                _inorder(node.right);
            }
        }
        _inorder(this)
        return arr;
    }
    delete(target) {
        if(this.key === null) {
            console.log('Tree is empty');
            return;
        }
        if(this.key > target) {
            if(this.left) {
                this.left = this.left.delete(target)
            } else {
                console.log(target, " does not exist in the tree");
            }
        } else if(this.key < target ) {
            if(this.right) {
                this.right = this.right.delete(target);
            } else {
                console.log(val, " does not exit in the tree");
            }
        } else {
            if(!this.right) {
                let temp = this.left;
                this.key = null;
                return temp;
                            
            }
            if(!this.left) {
                let temp = this.right;
                this.key = null;
                return temp;
            }
            let node = this.right;
            while(node.left) {
                node = node.left;
            }
            this.key = node.key;
            this.right = this.right.delete(node.key);

        }
        return this;
    }

    minimumValue() {
        let node = this;
        while(node.left) {
            node = node.left;
        }
        console.log("minimum value in the tree is ", node.key);
        return node.key;
    }
    
    maximumValue() {
        let node = this;
        while(node.right) {
            node = node.right;
        }
        console.log("maximum value in the tree is ", node.key);
        return node.key;
    }
    hight() {
        let highest = 0;
        function _findHeight(node, count) { 
            if(node === null) {
                console.log( count)
                if (count > highest){
                    highest = count; 
                } 
                return ;
            }
            _findHeight(node.left, count+1);
            _findHeight(node.right, count+1);

        }
        _findHeight(this, 0)
        return highest;
    }


    // invertBst(node=this) {
    //     if(node == null) return null;

    //     let right = this.invertBst(node.left);
    //     let left = this.invertBst(node.right);

    //     node.left = left;
    //     node.right = right;

        
    //     return this;
    // }


}

const bst = new BST();
[34, 2, 55, 64, 322, 5, 77, 42, 56, 752, 3245, 6].forEach(elem => bst.insert(elem));
bst.search(3245);
console.log(bst.search(2))
bst.delete(2)
console.log(bst.search(2))
bst.maximumValue()
bst.minimumValue()
console.log(bst.hight());
// bst.invertBst()

// console.log(bst.inorder())
// console.log(bst.preorder())
// console.log(bst.postorder())