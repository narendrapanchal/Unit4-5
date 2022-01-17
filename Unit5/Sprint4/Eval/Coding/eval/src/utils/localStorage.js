function loadData(key){
    try{
        let data=localStorage.getItem(key);
        let tempdata=JSON.parse(data);
        return data;
    }catch(err){
        console.log(err);
        return undefined;
    }
}
function saveData(key,value){
    localStorage.setItem(key,JSON.stringify(value));
}
export {saveData,loadData};
