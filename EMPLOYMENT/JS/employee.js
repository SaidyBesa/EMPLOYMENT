const menubtn=document.querySelector("#menu-btn");
const navlist=document.querySelector("#sidenav");

menubtn.addEventListener("click",()=>{
    if (navlist.style.display=="none") {
        navlist.style.display="block";
    }
    else
    {
        navlist.style.display="none";
    }
})