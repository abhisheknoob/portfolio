




// ==========
// swiper Selectio
// ==========

 new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  autoplay:{
   delay:2500,
  
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// ===========
// responsive swipe
// ==========

const jsmedia=(widthSize)=>{
if(widthSize.matches){
  new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
     delay:2500,
    
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}else{
  new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
     delay:2500,
    
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}
}
const widthSize=window.matchMedia('(max-width:780px)')
jsmedia(widthSize)

widthSize.addEventListener('change',jsmedia)

// scroll element //
const footerEle=document.querySelector(".section-footer")
const scrollElement=document.createElement('div');
scrollElement.classList.add('ScrollTop-Style');
scrollElement.innerHTML=`<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;
footerEle.after(scrollElement);
const HeroSection=document.querySelector('.section-hero')


scrollElement.addEventListener('click',()=>{
  HeroSection.scrollIntoView({behavior:"smooth"})
})

// animate number counter 
const counterNum = document.querySelectorAll('.counter-numbers');
const speed = 10;

const startIncrement = (curEle, targetNumber) => {
  const incrementNum = Math.floor(targetNumber / speed);
  let initialNum = 0;

  const updateNumber = () => {
    if (initialNum < targetNumber) {
      initialNum += incrementNum;
      curEle.innerText = `${initialNum}+`;

      setTimeout(updateNumber, 100);
    }
  };

  updateNumber();
};

const handleIntersection = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const curEle = entry.target;
      const targetNumber = parseInt(curEle.dataset.numbers);

      startIncrement(curEle, targetNumber);
      observer.unobserve(curEle);
    }
  });
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2, // Adjust this threshold as needed
};

const observer = new IntersectionObserver(handleIntersection, observerOptions);

counterNum.forEach((curEle) => {
  observer.observe(curEle);
});
//  ===========
//  responsive navbar
//  ===========


// const mobile_nav=document.querySelector('.mobile-navbar-button')
// const heading=document.querySelector('.header')

// mobile_nav.addEventListener('click',()=>{
//   heading.classList.toggle('active')
// })

const mobile_nav = document.querySelector(".mobile-navbar-button");
const nav_header = document.querySelector(".header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());