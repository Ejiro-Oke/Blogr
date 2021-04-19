const burger = document.querySelector(".dropbtn");
const menue = document.querySelector(".drop-down-menu");
const herO = document.querySelector(".hero");
var content = document.querySelectorAll(".drop-top");
const product= document.querySelector(".product-content"); 
const company = document.querySelector(".company-content");
const connect = document.querySelector(".connect-content");

let pArrow =  document.querySelector(".p-arrow");
let cArrow =  document.querySelector(".c-arrow");
let conArrow =  document.querySelector(".con-arrow");
 
// (function(document){
//     var dropTrigger = document.getElementById('content-trigger');
//     var v = document.getElementsByClassName('arrow');
//     var open = false;
  
//     dropTrigger.addEventListener('click', function(){
//       if(open){
//         v.className = 'arrow-down';  
//       } else{
//         v.className = 'arrow-up';
//       }
  
//       open = !open;

//     });
    
//   })(document);

function resetMenu(){
    company.style.display = "none";
    connect.style.display = "none";
    product.style.display = "none";

    // pArrow.style.transform= "none";  
    // cArrow.style.transform= "none";  
    // conArrow.style.transform= "none";  
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

//for onhoverEvent

let dropTrigger= document.querySelectorAll("#content-trigger");
for ( let i = 0; i < dropTrigger.length; ++i){

     dropTrigger[i].addEventListener('mouseover', function(){
        for (let i = 0; i < content.length; ++i);{

            if(content[i].style.display !== 'block'){
                content[i].style.display= 'block';
               
            }else {
                
                    content[i].style.display = "none";
            }
     
        }
    });

    dropTrigger[i].addEventListener('mouseout', function(){
        for (let i = 0; i < content.length; ++i);{
        if(content[i].style.display === 'block'){
            content[i].style.display= 'none';
           
        }
    }
    });
    
    dropTrigger[i].addEventListener('click', function(){
        for (let i = 0; i < content.length; ++i);{
            content[i].style.display= 'block';
    }
    });


}

let koN = document.querySelectorAll(".kon");
for (let i = 0; i < koN.length; ++i);{
    let konOpen = koN.style.display ="block"
    let konClose = koN.style.display =
}

let konTrigger = document.querySelectorAll("#dropdown-trigger");
    for (let i = 0; i < content.length; ++i);{
        konTrigger[0].addEventListener("click", function(){
            console.log("clickec")
                if (product.style.display !== "block"){
                    product.style.display = "block";
                }
                else{
                    product.style.display="none";
                }

        })
       
        konTrigger[1].addEventListener("click", function(){
            console.log("clickec")
                if (company.style.display !== "block"){
                    company.style.display = "block";
                }
                else{
                    company.style.display="none";
                }

        })

        konTrigger[2].addEventListener("click", function(){
            console.log("clickec")
                if (connect.style.display !== "block"){
                    connect.style.display = "block";
                }
                else{
                    connect.style.display="none";
                }

        })

    }


// var dropTrig0= document.querySelector(".product-drop").addEventListener("click", function(){
//     console.log("meow")
//     // if(product.style.display !== 'block'){
//     //     product.style.display= 'block';
//     //     pArrow.style.transform = 'rotate(180deg)';
       
//     // }else {
//     //     product.style.display= 'none';
//     //     pArrow.style.transform = 'rotate(0deg)';
//     // }
// });



//for onclick Event





// document.querySelector(".product-drop").addEventListener("mouseup", function(){

//     company.style.display = "none";
//     connect.style.display = "none";
//     product.style.display = "block";

//   pArrow.style.transform= "rotateZ(-180deg)";  
//   cArrow.style.transform= "none";  
//   conArrow.style.transform= "none";  

// })

// document.querySelector(".company-drop").addEventListener("mouseup", function(){
//     company.style.display = "block";
//     connect.style.display = "none";
//     product.style.display = "none";

//     cArrow.style.transform= "rotateZ(-180deg)";  
//     pArrow.style.transform= "none";  
//     conArrow.style.transform= "none";  


// })

// document.querySelector(".connect-drop").addEventListener("mouseup", function(){
//     company.style.display = "none";
//     connect.style.display = "block";
//     product.style.display = "none";

//     conArrow.style.transform= "rotateZ(-180deg)"; 
//     pArrow.style.transform= "none";  
//     cArrow.style.transform= "none";  
 
    
// })

// window.addEventListener('mouseup', function(event){
//     var dropTrigger = document.querySelectorAll('#content-trigger');
//     for (i = 0; i < dropTrigger.length; ++i){
//     if (event.target != dropTrigger[0] && event.target.parentNode != dropTrigger[0]);
//     if (event.target != dropTrigger[1] && event.target.parentNode != dropTrigger [1]);
//     if (event.target != dropTrigger[2] && event.target.parentNode != dropTrigger [2]){
//         console.log([0][1][2]);
//         resetMenu();

//     }

    
    
//     // {
//     //     resetMenu();
//     // }
// }
// });