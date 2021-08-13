
gsap.from('.anim2', {opacity: 0, duration: 1, y: "-30%", stagger: 0.6});
gsap.from('.anim1', {opacity: 0, duration: 1, x: "-30%", stagger: 0.6});
gsap.from('.img', {opacity: 0, duration: 1, x: 50, delay: 1});


const navSlide = () => {
    const burger = document.querySelector(".ham");
    const nav = document.querySelector(".nav-items");
    const navItem = document.querySelectorAll(".nav-item");
   


    burger.addEventListener('click', () => {
        nav.classList.toggle("nav-active");
        burger.classList.toggle('toggle');

        navItem.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation = '';
               
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
              
            }
        })
    })

   
}

navSlide();