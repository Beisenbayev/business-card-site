"use strict";

	//sidebar
let sidebar = document.getElementById("sidebar");

	//content 
let content = document.getElementById("content");
let contentItems = content.querySelectorAll('.content__item');
let contentSidebarButton = content.querySelector('.content__btn-sidebar');

	//navbar
let navbar = document.getElementById("navbar");
let navbarButtons = navbar.querySelectorAll('.navbar__btn');

   //work
let work = document.getElementById("work");
let workSlider = work.querySelector('.work__slider');
let workSliderTrack = work.querySelector('.work__slider__track');
let workSliderItems = work.querySelectorAll('.work__slider__item');
let workButtonPrev = work.querySelector('.work__slider__prev');
let workButtonNext = work.querySelector('.work__slider__next');
let workNavigation = work.querySelector('.work__slider__navigation');




	//CONTENT-FUNCTIONS
contentSidebarButton.onclick = function() {
	sidebar.classList.toggle("is_active");

	window.addEventListener("click", function(event) {
		if (!sidebar.classList.contains("is_active")) return;

		let target = event.target;

		if (!contentSidebarButton.contains(target))
			sidebar.classList.remove("is_active");
	});
}



	//NAVBAR-FUNCTIONS
for (let button of navbarButtons) {
	button.onclick = function(event) {
		let target = event.currentTarget;
		let index = +target.dataset.index;

		for (let item of contentItems) 
			item.classList.remove("is_active");

		for (let btn of navbarButtons) 
			btn.classList.remove("is_active");

		this.classList.add("is_active");
		contentItems[index].classList.add("is_active");
	}
}



   //WORK-FUNCTIONS
let workSliderIndex = 0;

function workSliderMove(index) {
   if (index > workSliderItems.length-1) index = 0;
   if (index < 0) index = workSliderItems.length-1;

   let width = workSliderItems[0].offsetWidth;
   let translate = -(width * index);

   for (let item of workNavigation.children)
      item.classList.remove("is_active");

   workNavigation.children[index].classList.add("is_active");
   workSliderTrack.style.transform = `translate(${translate}px, 0)`;
   workSliderIndex = index;
}

function workScreenResize() {
   let width = workSlider.offsetWidth;
   
   workSliderMove(0);
}
window.addEventListener("resize", workScreenResize);

workButtonPrev.onclick = function() {
   workSliderMove(--workSliderIndex);
}

workButtonNext.onclick = function() {
   workSliderMove(++workSliderIndex);
}