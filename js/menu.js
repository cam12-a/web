
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

});	