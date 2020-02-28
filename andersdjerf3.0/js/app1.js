var hem =document.getElementById("hem");
var sida1=document.getElementById("anders1");
var text1=document.getElementById("and1");
var hästarna=document.getElementById("hästarna");
var sida2=document.getElementById("anders2");

hem.addEventListener("click", function(){
    if(sida1.className ==="hide"){
        sida1.className = "";
        
    }
    else{
        sida1.className="hide";
    }
})
hästarna.addEventListener("click", function(){
    if(sida2.className ==="hide"){
        sida2.className = "";
    }
    else{
        sida2.className="hide";
    }
})