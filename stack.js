class StackNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Stack{
    constructor(){
        this.root = null
        this.n = 0
    }

    isEmpty(){
        return this.n = 0
    }

    size(){
        return this.n
    }

    push(value){
        let oldFirst = this.root
        this.root = new StackNode(value)
        this.root.next = oldFirst
        this.n++
    }

    pop(){

    }
}