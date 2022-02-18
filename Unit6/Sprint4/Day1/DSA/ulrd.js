// Definition of Binary Tree Node
// class Node {
//     constructor(val) {
//         this.val = val;
//         this.left = null;
//         this.right = null;
//     }
// }
// Complete the function below

function isSameTree(a,b){
    let str1=[],str2=[];str1.push(a.va);str2.push(b.val);
    find2(0,a);
    find(0,b);
    function find2(level,tree){
        if(tree==null){
            return
        }
        find(level+1,tree.right);
        find(level+1,tree.left);
        if(tree.right!=null){
            str1.push("r"+tree.right);
        }
        if(tree.left!=null){
            str1.push("l"+tree.left);
        }
    }
    function find(level,tree){
        if(tree==null){
            return
        }
        find(level+1,tree.right);
        find(level+1,tree.left);
        if(tree.right!=null){
            str2.push("r"+tree.right);
        }
        if(tree.left!=null){
            str2.push("l"+tree.left);
        }
        
    }
    for(let i=0;i<str2.length;i++){
        if(str2[i]!=str1[i])
        return false
    }
    return  true;
}
