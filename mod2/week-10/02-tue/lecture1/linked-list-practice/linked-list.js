class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.length = 0;

  }


  addToHead(val) {
    const newNode = new LinkedListNode(val);
    if(this.length === 0){
      this.head = newNode;
    } else{
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length ++;



  }

  addToTail(val) {
    // create a new node
    const newNode = new LinkedListNode(val);
    if(this.length === 0){
      // tail is the head when only 1 node
      this.head = newNode;
    } else{
      // create a new pointer
      let curr = this.head;
      while(curr.next){
        curr = curr.next;
      }
      // we should be at the tail,
      // tail pointer would be curr
      curr.next = newNode;

    }
    this.length ++;


  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}




module.exports = LinkedList;
