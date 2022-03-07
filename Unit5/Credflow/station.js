    let arrive = [940,900, 950, 1100, 1500, 1800];
    let depart = [1200, 910, 1120, 1130, 1900, 2000];
    let n = arrive.length;
    console.log(" Required Minimum Number of Platforms are " + findPlatform(arrive, depart, n));
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
 