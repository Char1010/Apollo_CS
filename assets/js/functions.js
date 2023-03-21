$( document ).ready(function() {

	
	// ajoputer une function
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

});

let sliderImages = document.querySelectorAll(".active"),
    btnPrev = document.getElementById('btn-prev'),
    btnRight = document.getElementById('btn-right'),
    current = 0;

    //console.log(sliderImages);

    // Nettoyage des images
    function reset() {
    for (let i = 0; i < sliderImages.length; i++) {
    	sliderImages[i].style.display = "none";
        }
    }
    
    // Démarrage 
    function startSlide() {
    reset();
    sliderImages[0].style.display = "block";
    }
    
    // Montrer photo vers la gauche
    function slidePrev() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
    }
    
    // montrer photo vers la droite
    function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
    }
    
    // bouton previous
    btnPrev.addEventListener("click", function () {
    if (current === 0) {
    	current = sliderImages.length;
    }
    slideLeft();
    });
    
    // bouton right 
    btnRight.addEventListener("click", function () {
    if (current === sliderImages.length - 1) {
    	current = -1;
    }
    slideRight();
    });
    
    startSlide();



// smooth scroll with javascript

const links = document.querySelectorAll(".nav  li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}







    
