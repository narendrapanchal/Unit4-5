
const ListNode = class {
    constructor(nodeData) {
        this.val = nodeData;
        this.next = null;
    }
};

// Complete the function below

var mergeTwoLists = function(l1, l2) {
   let arr1=[];
   let arr2=[];
   while(l1!=null){
    arr1.push(l1.val);
    l1=l1.next;
   }
   while(l2!=null){
    arr2.push(l2.val);
    l2=l2.next;
   }
   let i1=0;
   let i2=0;
   let l3;
   while(i1!=arr1.length || i2!=arr2.length){
       if(i1==arr1.length){
           let node= new ListNode(arr2[i2]);
           i2++
           if(l3==null)
           l3=node;
           else{
               l3.next=node;
           }
       }else if(i2!=arr2.length){
        let node= new ListNode(arr1[i1]);
        i1++
        if(l3==null)
        l3=node;
        else{
            l3.next=node;
        }
       }else{
           if(arr2[i2]>=arr1[i1]){
            let node= new ListNode(arr1[i1]);
            i1++
            if(l3==null)
            l3=node;
            else{
                l3.next=node;
            }
           }else{
            let node= new ListNode(arr2[i2]);
            i2++
            if(l3==null)
            l3=node;
            else{
                l3.next=node;
            }
           }
       }
   }
   console.log(i1,i2)
   return l3

};

