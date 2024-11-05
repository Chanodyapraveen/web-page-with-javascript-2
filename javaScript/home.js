let navProfile= document.getElementById("nav-profile");
let navProfileMenu= document.getElementById("nav-profile-menu");

let navCartIcon=document.getElementById("nav-cart-icon");
let navcartList=document.getElementById("nav-cart-list");

navProfile.addEventListener("click",(e)=>{
    navProfileMenu.classList.toggle("active");
    navcartList.classList.remove("active");
});

navCartIcon.addEventListener("click",(e)=>{
    navcartList.classList.toggle("active");
    navProfileMenu.classList.remove("active");
});


let searchIcon=document.getElementById("search-icon");
let searchBar=document.querySelector(".search-bar");

searchIcon.addEventListener("click", function(){
    searchBar.classList.toggle("active");
});

window.addEventListener("click",(e)=>{
    if(!searchBar.contains(e.target) && !searchIcon.contains(e.target)){
        searchBar.classList.remove("active")

    }
    if(!navProfileMenu.contains(e.target) && !navProfile.contains(e.target)) {
        navProfileMenu.classList.remove("active");
    }
    if(navcartList.contains(e.target) && !navProfile.contains(e.target)){
        navcartList.classList.remove("active");
    }
});






