// parallax............

// const parallax = document.getElementById
//   ("parallax");

// window.addEventListener("scroll", function () {
//   let offset = window.pageYOffset;
//   parallax.style.backgroundPositionY = (offset)
//     * -.7 + "px"
// })

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  let parallaxDiv = document.getElementById('parallax');
  var distanceToTop = parallaxDiv.getBoundingClientRect().top;


  parallax.style.backgroundPositionY = (distanceToTop)* .4 +"px";
  // console.log(distanceToTop)
})

// Animation............

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // if (entry.isIntersecting) {
    //   entry.target.classList.add('show');
    // }
    // else {
    //   entry.target.classList.remove('show');
    // }


    if (entry.isIntersecting) {
      entry.target.classList.add('Dshow');
    }
    else {
      entry.target.classList.remove('Dshow');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const tastElements = document.querySelectorAll('.tast');
tastElements.forEach((el) => observer.observe(el));

const slideupElements = document.querySelectorAll('.slideup');
slideupElements.forEach((el) => observer.observe(el));




// var scrollTop  = $(window).scrollTop();




window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  let parallaxDiv = document.getElementById('parallaxTwo');
  var distanceToTop = parallaxDiv.getBoundingClientRect().top;


  parallaxTwo.style.backgroundPositionY = (distanceToTop)*.3+"px";
  // console.log(distanceToTop)
})


window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  let parallaxDiv = document.getElementById('parallaxThree');
  var distanceToTop = parallaxDiv.getBoundingClientRect().top;


  parallaxThree.style.backgroundPositionY = (distanceToTop)*.3+"px";
  // console.log(distanceToTop)
})


// window.addEventListener("scroll", function () {
//   let offset = window.pageXOffset;
//   let parallaxDiv = document.getElementById('slide');
//   var w = parallaxDiv.getBoundingClientRect().top;
  

//     slide.style.webkitTransform = "translateX("+w*5+"px)"; 
  

//     // slide.style.opacity = w/100;
 
//   // slide.style.webkitTransform = `translate(${w*10}px, 0)`

//   console.log(w);
// })


window.addEventListener('scroll',()=>{
  let content = document.querySelector('.CroissantSide');
  let contentPosition = content.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.5;
  if(contentPosition < screenPosition){
    content.classList.add('lay');
  }else{
    content.classList.remove('lay');

  }

  if(contentPosition < 0){
    content.classList.remove('lay');
  }
  console.log(contentPosition)
})




// const observers = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('slide');
//     }
//     else {
//       entry.target.classList.remove('slide');
//     }
//   });
// });
// const CroissantSideElements = document.querySelectorAll('.CroissantSide');
// CroissantSideElements.forEach((el) => observers.observe(el));