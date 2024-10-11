let navProfile= document.getElementById("nav-profile");
let navProfileMenu= document.getElementById("nav-profile-menu");

let navCartIcon=document.getElementById("nav-cart-icon");
let navcartList=document.getElementById("nav-cart-list");


window.addEventListener("click",(e)=>{
    if(e.target == navCartIcon){

    }else{
        navcartList.classList.remove("active");
    }
})


navProfile.addEventListener("click",()=>{
    navProfileMenu.classList.toggle("active");
    navcartList.classList.toggle("active");
});

navCartIcon.addEventListener("click",()=>{
    navcartList.classList.toggle("active");
    navProfileMenu.classList.remove("active");
});

