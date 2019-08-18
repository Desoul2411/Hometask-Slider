(function() {

let nextButton = document.querySelector('.next');
let prevButton = document.querySelector('.prev');


var slideIndex = 1;

nextButton.addEventListener('click', function() {
	showSlides(slideIndex += 1);
})


prevButton.addEventListener('click', function() {
	showSlides(slideIndex += -1);
})



showSlides(slideIndex);









function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('slider');
	var dots = document.getElementsByClassName('dot');
	let dot1= document.querySelector('.dot_1');
	let dot2= document.querySelector('.dot_2');
	let dot3= document.querySelector('.dot_3');
	dot1.addEventListener('click', function() {
		showSlides(slideIndex = 1);
	})

	dot2.addEventListener('click', function() {
		showSlides(slideIndex = 2);
	})

	dot3.addEventListener('click', function() {
		showSlides(slideIndex = 3);
	})

	
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	for (i = 0; i < slides.length; i++ ) {
		slides[i].style.display = "none";
	}

	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace("active-dot","");

	}



	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+= " active-dot";
}





setInterval(() => showSlides(slideIndex += 1), 7000);


}());
