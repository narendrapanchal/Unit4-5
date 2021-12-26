class Node{
    constructor(element){
        this.element=element
        this.next=null
    }
}
class LinkedList{
    //constructor 
    //methods
    constructor(){
        this.head=null
        this.size=0
    }
    //mdthods=>
    //add
    //insert
    //delete
    //print
    add(element){
        var node = new Node(element);
        if(!this.head){
            this.head=node
        }else{
            var current=this.head
            while(current.next){
                current=current.next
            }
            current.next=node;
        }
        this.size++;
        }
        insertAt(element,index){
            if(index>this.size||index<0 && this.size){
                return false;
            }
            var node =new Node(element);
            var current=this.head;
            var prev=null;
            var i=0;
            if(index==0){
                node.next=current;
                this.head=node;
            }else{
                while(i<index){
                    prev=current;
                    current=current.next;
                    i++
                }
                //insertAt the index
                prev.next=node;
                //move to the inserted node
                prev=prev.next
                //add the rest of the current to the inserted node
                prev.next=current;
                this.size++;
            }
        }
        removeElement(element){
            var current=this.head;
            var prev=null;
            while(current){
                if(current.element===element){
                    //null
                    if(prev===null){
                        this.head=current.next;

                    }else{
                        prev.next=current.next
                    }
                    this.size--;
                    return true;
                }
                prev=current;
                current=current.next;
            }
        }
        isEmpty(){
            return this.size===0?true:false
        }
        sizeOfLL(){
            return this.size
        }
        printList(){
            var current=this.head;
            var index=0;
            while(current){
                console.log(current.element,index++);
                current=current.next;
            }
        }
}

const list=new LinkedList();
list.add(1);
list.add(2);
list.insertAt(5,0)
list.printList()
list.sizeOfLL()
list.removeElement(5)
console.log(list.sizeOfLL());
list.printList()

// function Elem(name,score){
//     this.name=name
//     this.score=score
// }
// const elem=new Element('sudhir',50);
// const node =new Node(elem);
// console.log(node)