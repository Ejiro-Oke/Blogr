const burger = document.querySelector(".dropbtn");
const overLay= document.querySelector(".overlay");
const menue = document.querySelector(".drop-down-menu");
const herO = document.querySelector(".hero");
const content = document.querySelectorAll(".drop-top");
const product= document.querySelector(".product-content"); 
const company = document.querySelector(".company-content");
const connect = document.querySelector(".connect-content");
const learN= document.querySelector(".learn")
const lgnForm = document.querySelector(".login-form");
const sinupForm = document.querySelector(".signup-form");
const blogr = document.querySelector(".site-head");

function homeScreen(){
    overLay.style.display="none";
    herO.style.display="block";
    sinupForm.style.display="none";
    lgnForm.style.display="none";
    burger.style.display="block";

    resetMenu()
}

function openP(){
    product.style.display = "block";
   let pArrow = document.querySelectorAll(".p-arrow");
   for (let i = 0; i < pArrow.length; i++) {
       pArrow[i].style.transform ="rotate(180deg)"
       
   }}

   function openC(){
    company.style.display = "block";
   let cArrow = document.querySelectorAll(".c-arrow");
   for (let i = 0; i < cArrow.length; i++) {
       cArrow[i].style.transform ="rotate(180deg)"
       
   }}

   function openCon(){
    overLay.style.display = "block";
    connect.style.display = "block";
   let conArrow = document.querySelectorAll(".con-arrow");
   for (let i = 0; i < conArrow.length; i++) {
       conArrow[i].style.transform ="rotate(180deg)"
       
   }}


function presentMenu(){
    burger.style.display="none";
    herO.style.display="none";
    sinupForm.style.display="none";
    lgnForm.style.display="none";
    overLay.style.display="block";
    menue.style.display= "block";
}
function resetMenu(){
    company.style.display = "none";
    connect.style.display = "none";
    product.style.display = "none";

    let v = document.querySelectorAll(".arrow")
    for(let i = 0; i < v.length; ++i){
        v[i].style.transform = "rotate(0deg)"
    }
  }

// function learnMore(){
//     burger.style.display="none";
//     herO.style.display="none";
//     overLay.style.display="block";
//     menue.style.display= "block";

// }

burger.addEventListener("mouseup", function(){
presentMenu();    
})

learN.addEventListener("mouseup", function(){
    presentMenu();    
    })
    

    const lgn = document.querySelectorAll(".login");
    for (let i = 0; i < lgn.length; ++i){
    lgn[i].addEventListener("click", function(){
        herO.style.display="none";
            overLay.style.display= "none";
            sinupForm.style.display="none";
           lgnForm.style.display= "block";

    })
}

    const sinup = document.querySelectorAll(".signup");
    for (let i = 0; i < sinup.length; ++i){
    sinup[i].addEventListener("click", function(){
        herO.style.display="none";
        overLay.style.display="none";
        lgnForm.style.display="none"
        sinupForm.style.display= "block";
    })
    }

    const closeForm = document.querySelectorAll(".closebtn");
    for (let i = 0; i < closeForm.length; ++i){
        closeForm[i].addEventListener("click", function(){
            
            homeScreen();
        })
    }

    


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
    
    dropTrigger[0].addEventListener('click', function(){
        if (product.style.display !== "block"){
        resetMenu();
        presentMenu()
        openP();
        
        }
        else{
            resetMenu()
        }
    });

    dropTrigger[1].addEventListener('click', function(){
        if (company.style.display !== "block"){
        resetMenu();
        presentMenu()
        openC();
    }
        else{
            resetMenu()
        }

    });

    dropTrigger[2].addEventListener('click', function(){
        if (connect.style.display !== "block"){
        resetMenu();
        presentMenu();
        openCon();
        }
        else{
            resetMenu()
        }

    });


}


function modifyStylesOf(arr, indices, prop, newValue) {
    arr.filter(function(el, index) {
      return indices.indexOf(index) !== -1;
    }).forEach(function(el) {
      el.style[prop] = newValue;
    });
  }
let koN = document.querySelectorAll(".kon");

let konTrigger = document.querySelectorAll("#dropdown-trigger");
    for (let i = 0; i < konTrigger.length; ++i);{
        konTrigger[0].addEventListener("click", function(){
                if (product.style.display !== "block"){
                    resetMenu();
                    openP();
                }
                else{
                    product.style.display="none";
                }

                modifyStylesOf(Array.from(koN), [1, 2], 'display', 'none');
        })
       
        konTrigger[1].addEventListener("click", function(){
                if (company.style.display !== "block"){
                    resetMenu();
                    openC();
                }
                else{
                    company.style.display="none";
                }

                modifyStylesOf(Array.from(koN), [0, 2], 'display', 'none');

        })

        konTrigger[2].addEventListener("click", function(){
                if (connect.style.display !== "block"){
                    resetMenu();
                    openCon();
                }
                else{
                    connect.style.display="none";
                }

                modifyStylesOf(Array.from(koN), [0, 1], 'display', 'none');

        })


    }


    document.addEventListener("click", function(event){
    
            if ((event).target === overLay) {
                homeScreen()

                 resetMenu();

                }
            
            if ((event).target === menue){
                resetMenu();
            }

            if ((event).target === blogr){
                   homeScreen()
                    burger.style.display="block";

                    resetMenu()
            
                }

            if (window.outerWidth >= 767 && 
                (event).target === learN){
                   presentMenu()

                }

                // if (window.outerWidth >= 767 && 
                //     (event).target === overLay){
                //         overLay.style.display= "none";
                //         herO.style.display="block"
                //     }
    
        })

        // function onWidth() {
            // if (window.outerWidth >= 767){
            //     resetMenu()}

            //     if (window.outerWidth <= 767){
            //         resetMenu()}

        //    if (window.outerWidth >= 767){
        //        overLay.style.display= "none";
        //        sinupForm.style.display="none";
        //        lgnForm.style.display="none";
        //        blogr.style.display="block";
        //        herO.style.display="block";
              
        //    }
        //    if (window.outerWidth <= 766){
        //     burger.style.display= "block";
        //     sinupForm.style.display="none";
        //     lgnForm.style.display="none";
        //     overLay.style.display="none";

        //     herO.style.display="block";


        //    }
        // }