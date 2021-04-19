const burger = document.querySelector(".dropbtn");
const overLay = document.querySelector(".overlay");
const menue = document.querySelector(".drop-down-menu");
const herO = document.querySelector(".hero");
var content = document.querySelectorAll(".drop-top");
const product= document.querySelector(".product-content"); 
const company = document.querySelector(".company-content");
const connect = document.querySelector(".connect-content");


function resetMenu(){
    company.style.display = "none";
    connect.style.display = "none";
    product.style.display = "none";
  }

burger.addEventListener("mouseup", function(){
    burger.style.display="none";
    herO.style.display="none";
    overLay.style.display="block"
})

document.querySelector(".site-title").addEventListener("mouseup", function(){
    burger.style.display="block";
    menue.style.display="none";
    herO.style.display="block";

    resetMenu()
})


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
                //  resetMenu();
                console.log("bbb")
                }
        
        
    })

    // overLay.addEventListener("click", function(){
    //     resetMenu()
    // })
