const bgImage=document.querySelector(".bg-image img");
const detect=document.querySelector("#detect");
const conte=document.querySelector("#content");
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry )=>{
        if(entry.isIntersecting){
            conte.style.opacity="1";
            conte.style.transition="all ease-in-out 0.5s";

        }   
        else{
            conte.style.opacity="0";
        }
    });
});
observer.observe(detect);
window.addEventListener("scroll", () => {
    if(window.scrollY > 1000){
        bgImage.style.clipPath="circle("+2000+"px at center)";
    
    }
    else{

        bgImage.style.clipPath="circle("+window.scrollY+"px at center)";
    }
    
});