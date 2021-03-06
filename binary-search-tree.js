class Node {
    constructor(data){
        this.data = data
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(data){
        let newNode = new Node(data)

        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    inOrderTraverse(node, callback){
        if (node !== null) {
            this.inOrderTraverse(node.left, callback)
            callback(node.data)
            this.inOrderTraverse(node.right, callback)
        }
    }
    preOrderTraverse(node, callback){
        if (node !== null) {
            callback(node.data)
            this.preOrderTraverse(node.left, callback)
            this.preOrderTraverse(node.right, callback)
        }
    }
    postOrderTraverse(node, callback){
        if (node !== null) {
            this.postOrderTraverse(node.left, callback)
            this.postOrderTraverse(node.right, callback)
            callback(node.data)
        }
    }
    search(node,data){
        if (node === null) {
            return null
        } else if (data < node.data) {
            return this.search(node.left, data)
        } else if (data > node.data) {
            return this.search(node.right, data)
        } else return node
    }

    remove(data){
        this.root = this.removeNode(this.root, data)
    }

    removeNode(node, data){
        if (node === null){
            return null
        } else if (data < node.data){
            node.left = this.removeNode(node.left, data)
            return node
        } else if (data > node.data){
            node.right = this.removeNode(node.right, data)
            return node
        } else {
            if (node.left === null && node.right === null){
                node = null
                return node
            }
            if (node.left === null){
                node = node.right
                return node
            } else if (node.right === null){
                node = node.left
                return node
            }

            let newNode = this.minNode(node.right)
            node.data = newNode.data
            node.right = this.removeNode(node.right, newNode.data)
            return node
        }
    }

    minNode(node){
        if (node.left === null) {
            return node
        } else {
            return this.minNode(node.left)
        }
    }
}

const BST = new BinarySearchTree()
BST.insert(11)
BST.insert(7)
BST.insert(9)
BST.insert(15)
BST.insert(6)
console.log(JSON.stringify(BST, null, 2))
console.log('search',BST.search(BST.root, 7))
console.log('remove',BST.remove(7))
console.log(JSON.stringify(BST, null, 2))