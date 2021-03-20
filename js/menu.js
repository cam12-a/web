
$(document).ready(function() {
	$('.menu-salat').click(function(){
		$('.salat').slideToggle("slow");
	});
	$('.menu-bake').click(function(){
		$('.bake').slideToggle("slow");
	});

	$('.menu-salat').animate({transform: 'translateY(-20px) rotate(-180deg)'});

	function menu() {
	document.getElementById("rightHeader").style.display='block';
}
function closeMenu() {
	document.getElementById("rightHeader").style.display='none';
}
const carouselSlide =document.querySelector('.carousel-slide');
const carouselImages=document.querySelectorAll('.carousel-slide img');
//button
const nextBtn=document.querySelector('#nextBtn');
const prevBtn=document.querySelector('#prevBtn');
//Counter

let counter=1;
const size=carouselImages[0].clientWidth;
carouselSlide.style.transform='translateX('+ (-size*counter)+'px)';		
// Button listener
nextBtn.addEventListener('click',()=>{
	if (counter>= carouselImages.length-1) return;
	carouselSlide.style.transition=" transform 0.4s ease-in-out";
	counter++;
	carouselSlide.style.transform='translateX('+ (-size*counter)+'px)';		

});
prevBtn.addEventListener('click',()=>{
	if (counter<=0) return;
	carouselSlide.style.transition=" transform 0.4s ease-in-out";
	counter--;
	carouselSlide.style.transform='translateX('+ (-size*counter)+'px)';		

});

carouselSlide.addEventListener('transitionend',()=>{
	if(carouselImages[counter].id==='lastClone'){
		carouselSlide.style.transition="none";
		counter=carouselImages.length-2;
		carouselSlide.style.transform='translateX('+ (-size*counter)+'px)';		
	}
	if(carouselImages[counter].id==='firstClone'){
		carouselSlide.style.transition="none";
		counter=carouselImages.length-counter;
		carouselSlide.style.transform='translateX('+ (-size*counter)+'px)';		
	}
})
var myIndex = 0;
 carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
	

});	