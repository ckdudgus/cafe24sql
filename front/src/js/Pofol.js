$(window).load(function(){
    AOS.init();

	function aosMobile() {
		if (matchMedia("screen and (max-width: 768px)").matches) {
			$('.pofolul').attr('data-aos-delay', '0');
		}
	}
	aosMobile();

})