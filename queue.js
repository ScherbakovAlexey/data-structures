class QueueNode{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class Queue{
    constructor(){
        this.first = null
        this.last = null
        this.n = 0
    }

    isEmpty(){
        return this.first === null
    }

    size(){
        return this.n
    }

    enqueue(value){
        let oldLast = this.last
        this.last = new QueueNode(value)

        if(this.isEmpty()) this.first = this.last
        else oldLast.next = this.last

        this.n++
    }

    dequeue(){
        if(this.isEmpty()){
            this.last = null
            return null
        }

        let item = this.first.value
        this.first = this.first.next

        this.n--

        return item
    }
}

const q = new Queue()
q.enqueue(1)
console.log('q',q)
q.enqueue(2)
console.log('q',q)
q.enqueue(3)
console.log('q',q)
q.dequeue()
console.log('q',q)