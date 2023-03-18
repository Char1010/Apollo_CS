$( document ).ready(function() {

	
	// ajoputer une function
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});


let currentImage = 0;
let elements, slides , slideWidth, showImage, speed;

window.onload =()=>{
  const image = document.querySelector ('full-slide')
 /**  speed = image.dataset.speed;


  /**image.forEach((active, indx)=>{
    active.style.transform = 'translateX(${indx * 100}%)';
  });**/

  elements = document.querySelector('.banner')


  console.log(elements);

  let firstImage = elements.firstElementChild.cloneNode(true);


slides = Array.from(elements.children)
console.log(slides);

/**slideWidth = image.getBoundingClientRect().width;**/


  let prev = document.querySelector(".icon-chevron-thin-left prev");
  let next = document.querySelector(".icon-chevron-thin-left next");

  prev = addEventListener('click', slidePrev)
  next = addEventListener('click', slidenext)

  console.log(prev);

  //automatiser 
  timer = setInterval (slidenext,speed);

  window.addEventListener("DOMContentLoaded", showImage);

  console.log(timer);
}

function slidePrev() {
  currentImage --;
  elements.style.transition ='is linear';
  if (currentImage < 0 ) {
    currentImage = slides.length-1;
    let decal = -slideWidth * currentImage;
    elements.style.transition = 'unset';
    elements.style.transform = 'translateX(0)';

  }
  /**showImage(currentImage);**/
};
console.log(currentImage);

function slidenext(){
  currentImage ++;

    if (currentImage > slides.length - 1) {
      currentImage = 0;
    }
   /**  showImage(currentImage);**/
  };
;



/** 

// the variables of the image slider
const image = document.querySelector(".active");
const prevBtn = document.querySelector(".icon-chevron-thin-left prev");
const nextBtn = document.querySelector(".icon-chevron-thin-right next");

// the image array
const images = [
	"../img/full-slide/thumb-1.jpg","../img/full-slide/thumb-2.jpg","../img/full-slide/thumb-1.jpg",
];

// the index of the image on page load
let currentImage = 0;

// the image details that shows when the webpage loads
window.addEventListener("DOMContentLoaded", showImage);

// function to select and change the image details
function showImage() {
  image.src = images[currentImage];
}


// the next button function
nextBtn.addEventListener("click", function () {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  showImage(currentImage);
});

// the prev button function
prevBtn.addEventListener("click", function () {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  showImage(currentImage);
});

**/