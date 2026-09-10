const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imagesPath = "./assets/images/slideshow/";
let dots = document.querySelectorAll('.dot');
let bannerImg = document.getElementById("banner-img");
let tagLine = document.getElementById("tag-line");
let currentIndex = 0;

function updateCarousel() {
		document.querySelectorAll('.dot').forEach(el => {
		el.classList.remove('dot_selected');
	});
	bannerImg.src = imagesPath + slides[currentIndex].image;
	tagLine.innerHTML = slides[currentIndex].tagLine;
	dots[currentIndex].classList.add('dot_selected');
};

document.getElementById('next').addEventListener('click', () => {
	currentIndex = (currentIndex + 1) % slides.length;
	updateCarousel();
});

document.getElementById('previous').addEventListener('click', () => {
	currentIndex = (currentIndex - 1 + slides.length) % slides.length;
	updateCarousel();
});
