let menuIcon = document.querySelector("#menu-icon")
let closeIcon = document.querySelector("#close-icon")
let mobileMenu = document.querySelector(".mobile-menu")
let lists = document.querySelectorAll(".list")
menuIcon.addEventListener("click",function(){
     gsap.to(mobileMenu,{
        transform:"translateX(0%)"
     })
     gsap.to(lists,{
        stagger:0.2
     })
     
})
closeIcon.addEventListener("click",function(){
    gsap.to(mobileMenu,{
        transform:"translateX(-100%)"
    })
})

lists.forEach((list)=>{
    list.addEventListener("click",function(){
        gsap.to(mobileMenu,{
        transform:"translateX(-100%)",
    })
    list.addEventListener("mousemove",function(){
        
    })
    })
})

// scroll reveal

ScrollReveal({ 
    distance:"800px",
    duration:2000,
    delay: 200,
 });
