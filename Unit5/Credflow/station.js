    function findPlatform(arrive, depart, n){
     // combining data or arrival time and departure time
    let mat=arrive.map((ele,i)=>([ele,depart[i]])); 
     // sorting data corresponding to the train
    mat=mat.sort((a,b)=>a[0]-b[0]);
    let required_platform=0;   
    for(let i=0;i<n;i++){
        let min=1
        for(let j=i+1;j<n;j++){
            if(mat[i][1]>=mat[j][0]){
                min++;
            }
        }
        if(min>required_platform){
            required_platform=min;
        }
    }
    return required_platform;
    }
 