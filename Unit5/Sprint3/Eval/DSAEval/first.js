const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var removeMaximum = function (head) {
    let arr=[];
    while(head!=null){
        arr.push(head.data);
    }
    if(arr.length<=1){
        return null
    }else{
        let max=Math.max();
        for(let i=0;i<arr.length;i++){
            if(arr[i]>max)
            max=arr[i];
        }
        let maxcount=0;
        for(let i=0;i<arr.length;i++){
            if(arr[i]==max)
            maxcount++;
         } 
         
            for(let i=arr.length-1;i>=0;i--){
                if(max==arr[i])
               {
                arr[i]=null
                break;
               }
        }
        let arr2=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i]!=null)
            arr2.push(arr[i]);
        }

     }
}