const slide = document.querySelector('.slider');
const images = document.querySelectorAll('.slider img');

const prevbtn = document.querySelector('#prev');
const nextbtn = document.querySelector('#next');

let counter = 1;
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextbtn.addEventListener('click', () => {
	slide.style.transition = "transform 0.4s ease-in-out";
	counter++;
	slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevbtn.addEventListener('click', () => {
	slide.style.transition = "transform 0.4s ease-in-out";
	counter--;
	slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', () =>{
	if(images[counter].id === 'last'){
		slide.style.transition = "none";
		counter = images.length - 2;
		slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
	if(images[counter].id === 'first'){
		slide.style.transition = "none";
		counter = images.length - counter;
		slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
	}
});