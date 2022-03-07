function spiralTraversal(M, N, Mat){
    //write code here
    var top=0;
    var bottom=M-1;
    var left=0;
    var right=N-1;
    var size=0;
    var output="";
 while (size<M*N){

     for(var i=top;i<=bottom;i++){
        if(size<N*M)
        output+=Mat[i][left]+ " " ;
        size++;
    }
    left++;
    
    for(var j=left;j<=right;j++){
        if(size<N*M)
        output+=Mat[bottom][j]+" ";
        size++;
    }
    bottom--;

    for(var j=bottom; j>=top;j--){
        if(size<N*M)
        output+=Mat[j][right] +" ";
        size++;
    }
    right--;

    for(var j=right;j>=left;j--){
        if(size<N*M)
        output+=Mat[top][j]+" ";
    size++;
    }
    top++;
    
  }
  console.log(output.split(" ").map(Number));
  
}
