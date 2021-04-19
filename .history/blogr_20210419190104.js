const burger = document.querySelector(".dropbtn");
const overLay= document.querySelector(".overlay");
const menue = document.querySelector(".drop-down-menu");
const herO = document.querySelector(".hero");
var content = document.querySelectorAll(".drop-top");
const product= document.querySelector(".product-content"); 
const company = document.querySelector(".company-content");
const connect = document.querySelector(".connect-content");
const learN= document.querySelector(".learn")
const lgnForm = document.querySelector(".login-form");
const sinupForm = document.querySelector(".signup-form");
const blogr = document.querySelector(".site-head");
const blogR2 = document.querySelector(".site-head-two");

    

function resetMenu(){
    company.style.display = "none";
    connect.style.display = "none";
    product.style.display = "none";
  }

function learnMore(){
    blogr.style.display="none";
    burger.style.display="none";
    herO.style.display="none";
    overLay.style.display="block";
    menue.style.display= "block";

}

burger.addEventListener("mouseup", function(){
learnMore();    
})

learN.addEventListener("mouseup", function(){
    learnMore();    
    })
    
    blogR2.addEventListener("mouseup", function(){
        overLay.style.display= "none";
        sinupForm.style.display="none";
        lgnForm.style.display="none";
        blogr.style.display="block";
        burger.style.display="block";
        herO.style.display="block";

        resetMenu()

    
    })

    const lgn = document.querySelectorAll(".login");
    for (let i = 0; i < lgn.length; ++i){
    lgn[i].addEventListener("click", function(){
            menue.style.display= "none";
            sinupForm.style.display="none";
           lgnForm.style.display= "block";

    })
}

    const sinup = document.querySelectorAll(".signup");
    for (let i = 0; i < sinup.length; ++i){
    sinup[i].addEventListener("click", function(){
        menue.style.display="none";
        lgnForm.style.display="none"
        sinupForm.style.display= "block";
    })
    }

    const closeForm = document.querySelectorAll(".closebtn");
    for (let i = 0; i < closeForm.length; ++i){
        closeForm[i].addEventListener("click", function(){
            lgnForm.style.display="none";
            sinupForm.style.display= "none";
            menue.style.display= "block";

            resetMenu()
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
    
    dropTrigger[i].addEventListener('click', function(){
        for (let i = 0; i < content.length; ++i);{
            content[i].style.display= 'block';
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
                    product.style.display = "block";
                }
                else{
                    product.style.display="none";
                }

                modifyStylesOf(Array.from(koN), [1, 2], 'display', 'none');
        })
       
        konTrigger[1].addEventListener("click", function(){
                if (company.style.display !== "block"){
                    company.style.display = "block";
                }
                else{
                    company.style.display="none";
                }

                modifyStylesOf(Array.from(koN), [0, 2], 'display', 'none');

        })

        konTrigger[2].addEventListener("click", function(){
                if (connect.style.display !== "block"){
                    connect.style.display = "block";
                }
                else{
                    connect.style.display="none";
                }

                modifyStylesOf(Array.from(koN), [0, 1], 'display', 'none');

        })


    }


    document.addEventListener("click", function(event){
    
            if ((event).target === overLay) {
                 resetMenu();
                }
            
            if ((event).target === menue){
                resetMenu();
            }

            if (window.outerWidth >= 767 && 
                (event).target === blogr){
                    overLay.style.display= "none";
                    sinupForm.style.display="none";
                    lgnForm.style.display="none";
                    herO.style.display="block";
                }

            if (window.outerWidth >= 767 && 
                (event).target === learN){
                    burger.style.display="none";
                    blogr.style.display="block";
                    blogR2.style.display="none";
                    herO.style.display="block";
                    overLay.style.display="block";
                    menue.style.display= "block";
                }
                if (window.outerWidth >= 767 && 
                    (event).target === blogr){
                        overLay.style.display= "none";
    
        })

        function onWidth() {
           if (window.outerWidth >= 767){
               overLay.style.display= "none";
               sinupForm.style.display="none";
               lgnForm.style.display="none";
               blogr.style.display="block";
               herO.style.display="block";
              
           }
           if (window.outerWidth <= 766){
            burger.style.display= "block";
            sinupForm.style.display="none";
            lgnForm.style.display="none";

           }
        }