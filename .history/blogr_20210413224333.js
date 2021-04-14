const burger = document.querySelector(".dropbtn");
const menue = document.querySelector(".drop-down-menu");
const herO = document.querySelector(".hero");
var content = document.querySelectorAll("dropdown-content");
const product= document.querySelector(".product-content"); 
const company = document.querySelector(".company-content");
const connect = document.querySelector(".connect-content");

let pArrow =  document.querySelector(".p-arrow");
let cArrow =  document.querySelector(".c-arrow");
let conArrow =  document.querySelector(".con-arrow");


(function(document){
    var dropTrigger = document.querySelectorAll('content-trigger');{}
    console.log("meow" dropTrigger[i])
    var v = document.getElementsByClassName('arrow');
    var open = false;
  
    dropTrigger.addEventListener('click', function(){
      if(open){
        v.className = 'arrow-down';  
      } else{
        v.className = 'arrow-up';
      }
  
      open = !open;
    });
  })(document);
function resetMenu(){
    company.style.display = "none";
    connect.style.display = "none";
    product.style.display = "none";

    pArrow.style.transform= "none";  
    cArrow.style.transform= "none";  
    conArrow.style.transform= "none";  
  }

burger.addEventListener("mouseup", function(){
    burger.style.display="none";
    herO.style.display="none";
    menue.style.display="block";
})

document.querySelector(".site-title").addEventListener("mouseup", function(){
    burger.style.display="block";
    menue.style.display="none";
    herO.style.display="block";

    resetMenu()
})


document.querySelector(".product-drop").addEventListener("mouseup", function(){

    company.style.display = "none";
    connect.style.display = "none";
    product.style.display = "block";

  pArrow.style.transform= "rotateZ(-180deg)";  
  cArrow.style.transform= "none";  
  conArrow.style.transform= "none";  

})

document.querySelector(".company-drop").addEventListener("mouseup", function(){
    company.style.display = "block";
    connect.style.display = "none";
    product.style.display = "none";

    cArrow.style.transform= "rotateZ(-180deg)";  
    pArrow.style.transform= "none";  
    conArrow.style.transform= "none";  


})

document.querySelector(".connect-drop").addEventListener("mouseup", function(){
    company.style.display = "none";
    connect.style.display = "block";
    product.style.display = "none";

    conArrow.style.transform= "rotateZ(-180deg)"; 
    pArrow.style.transform= "none";  
    cArrow.style.transform= "none";  
 
    
})

window.addEventListener('mouseup', function(event){
    var dropTrigger = document.querySelectorAll('#content-trigger');
    for (i = 0; i < dropTrigger.length; ++i){
    if (event.target != dropTrigger[0] && event.target.parentNode != dropTrigger[0]);
    if (event.target != dropTrigger[1] && event.target.parentNode != dropTrigger [1]);
    if (event.target != dropTrigger[2] && event.target.parentNode != dropTrigger [2]){
        console.log([0][1][2]);
        resetMenu();

    }

    
    
    // {
    //     resetMenu();
    // }
}
});