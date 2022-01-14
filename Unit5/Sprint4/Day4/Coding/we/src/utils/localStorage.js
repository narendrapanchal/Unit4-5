/**
 * @param {string} key
 */


function loadData(key){
    try{
        let loadData=localStorage.getItem(key);
        let data=JSON.parse(loadData);
        return data;

    }catch(err){
      return  undefined
    }
}


/***
 * @param {string} key
 * @param {any} 
 * 
 */
function saveData(key,data){
    localStorage.setItem(key,JSON.stringify(data));
}
export{saveData,loadData};