const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
menuToggle.addEventListener("click", function () {
	menuHeader.classList.add(expandClass);
});
window.addEventListener("click", function (e) {
	if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
		menuHeader.classList.remove(expandClass);
	}
});
// Slick Slider
$(document).ready(function () {
	$(".quote-container").slick({
		autoplay: true,
		autoplaySpeed: 2000,
		prevArrow: "<img src='./images/arrow-left-icon.png' class='slick-prev quote-arrow-img quote-arrow-left' />",
		nextArrow: "<img src='./images/arrow-right-icon.png' class='slick-prev quote-arrow-img quote-arrow-right' />",
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
				},
			},
		],
	});
});
