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
        return this.n === 0
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
        if(this.isEmpty()) return null
        let oldFirst = this.root
        this.root = oldFirst.next
        this.n--
        return oldFirst.value
    }
}

const stack = new Stack()
stack.push(1)
console.log('stack',stack)
console.log('size',stack.size())
stack.push(2)
console.log('stack',stack)
console.log('size',stack.size())
stack.push(3)
console.log('stack',stack)
console.log('size',stack.size())
const del = stack.pop()
console.log('del',del)
console.log('stack',stack)
console.log('size',stack.size())
