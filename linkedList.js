function LinkedList() {
    this.head = null;
    this.tail = null;
};

// function Node(value, next, prev) 
// {
//     this.value = value;
//     this.next = next;
//     this.prev = prev;
// };

class Node {
    constructor(value, next, prev) {
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  }


  //ADD TO HEAD FUNCTION 
LinkedList.prototype.addToHead = 
function(value) {
    const newNode = new Node(value,
 this.head, null);
        if (this.head) this.head.prev =
     newNode;
        else this.tail = newNode;
        this.head = newNode;
};


    // ADD TO TAIL FUNCTION
LinkedList.prototype.addToTail = 
function(value) {
    const newNode = new Node(value,
null, this.tail);
        if (this.tail) this.tail.next =
     newNode;
        else this.head = newNode;
        this.tail = newNode;
};


//list.removeHead();


LinkedList.prototype.removeHead =
function() {
    if (!this.head) return null;;
    let value = this.head.value;
    this.head = this.head.next;

    if (this.head) this.head.prev =
null;
    else this.tail = null;

    return value;
}


//list.removeTail();

LinkedList.prototype.removeTail =
function() {
    if(!this.tail) return null;
    let value = this.tail.value;
    this.tail = this.tail.prev;

    if (this.tail) this.tail.next =
null;
    else this.head = null;
     return value;
};

LinkedList.prototype.search = 
function(searchValue) {
    let currentNode = this.head;

    while(currentNode) {
        if (currentNode.value === 
        searchValue) return currentNode;
        currentNode = 
        currentNode.next;
    }
    return null;
}

var testArray = [10,1,9,22,34,123,443];
var testJson = {
    "name": "puggy",
    "version": "0.0.0",
    "private": true,
    "scripts": {
      "start": "node app.js"
    },
    "dependencies": {
      "cookie-parser": "^1.4.3",
      "debug": "~2.6.9",
      "express": "~4.16.0",
      "http-errors": "~1.6.2",
      "morgan": "^1.9.0",
      "mysql2": "^1.5.3",
      "pug": "^2.0.0-beta11",
      "pug-loader": "^2.4.0",
      "sequelize": "^4.38.0",
      "sequelize-cli": "^4.0.0"
    }
  };

const list = new LinkedList();
list.addToHead(400);
list.addToHead(300);
list.addToHead(200);
list.addToHead(100);
list.addToHead(testArray);
list.addToTail(600);
list.addToTail(700);
list.addToTail(testJson);
// console.log(list.head.next.next.value)

console.log(list);
// console.log(list);

console.log(list.search(200));