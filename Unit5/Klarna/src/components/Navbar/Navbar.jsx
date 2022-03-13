import "./Navbar.css"
export const Navbar=()=>{
return (<div>
    <div id="header" className="header">
    <div><h4><b>Klarna.</b></h4>  <h6>Shop</h6>  <h6>How it works</h6> <h6>The shopping app</h6> <h6>Help</h6></div>
    <div>
        <button>Log in</button>
        <button>Get the app</button>
        <ion-icon name="menu" onClick={(e)=>{
            if(e.target.name=="menu"){
                e.target.name="close-circle-outline";
                let optiions=document.getElementById("optiions");
                optiions.style.display="block";
                console.log(optiions);
            }else{
                e.target.name="menu";
                let optiions=document.getElementById("optiions");
                optiions.style.display="none";
            }
        }}></ion-icon>
    </div>
</div>
<div id="optiions"><h6>Shop</h6> <h6>How it works</h6> <h6>The shopping app</h6> <h6>Help</h6></div>
</div>)
}