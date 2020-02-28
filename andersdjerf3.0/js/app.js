
const navSlide =()=>{
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navLinks=document.querySelectorAll('.nav-links li');
   

    burger.addEventListener('click',()=>{
        //Toggle nav
        nav.classList.toggle('nav-active');

            // animate links
    navLinks.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=''
        }
        else{
        link.style.animation=`navLinkFade 0.5s ease forwards ${index / 7 + 0.65}s`
        }
    });
    //burger animation
    burger.classList.toggle('toggle');
    
    
});
}


const Slide =()=>{
    const headline=document.querySelector('.headline');
    const hero=document.querySelector(".hero");

    headline.addEventListener('click',()=>{
        const tl=new TimelineMax();
        tl.fromTo(hero,1, {height: "0%"}, {height: '45%',ease: Power2.easeInOut})
        .fromTo(hero,1.2, {width:"100%"},{width:'60%',ease: Power2.easeInOut}); 
    })
}
navSlide();
Slide();

