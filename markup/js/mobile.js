$(document).ready(initPage);
function initPage(){
	initSearch();
	swiperGallery();
	mobileMenu();
	//ロールオーバー：透明度で処理
	$('.allbtn_ro a img, a img.btn_ro, .allbtn_ro input:image, input.btn_ro:image, .allbtn_txt a, .btn_txt').hover(function(){
		$(this).stop().fadeTo(200, 0.6);
	},function(){
		$(this).stop().fadeTo(200, 1.00);
	});
}
/* Mobile Menu */
function mobileMenu(){
	$('a.mobile-opener').click(function(e) {
		e.preventDefault();
		$('body').toggleClass('nav-visible');
		$('.menu .slide-box').slideToggle(300);
	});
	$('a.cloze-menu').click(function(e) {
		e.preventDefault();
		$('body').removeClass('nav-visible');
		$('.menu .slide-box').slideUp(300);
	});
}
function initSearch() {
	if(!$('.search-box').length)return;
	$('.open-search').click(function (e) {
		e.preventDefault();
		$('.search-box').slideToggle(300);
	});
}
var allGallery = {}
function swiperGallery(){
	allGallery.swiperTop = new Swiper('.swiper-top .swiper-container', {
		nextButton: '.swiper-top .swiper-button-next',
		prevButton: '.swiper-top .swiper-button-prev',
		autoplay: 2500,
		spaceBetween: 20,
		autoplayDisableOnInteraction: false,
		pagination: '.swiper-top .swiper-pagination',
		paginationClickable: true,
		loop: true
	});
	allGallery.swiperTeacher = new Swiper('.swiper-teacher .swiper-container', {
		nextButton: '.swiper-teacher .swiper-button-next',
		prevButton: '.swiper-teacher .swiper-button-prev',
		slidesPerView: 5,
		autoplay: 2500,
		autoplayDisableOnInteraction: false,
		loop: true,
		spaceBetween: 20
	});
	allGallery.swiperBanner = new Swiper('.swiper-footer-banner .swiper-container', {
		pagination: '.swiper-footer-banner .swiper-pagination',
		paginationClickable: true,
		autoplay: 2500,
		autoplayDisableOnInteraction: false,
		loop: true
	});
	if($(window).width() <= 782){
		allGallery.swiperTeacher.destroy(true,true);
		allGallery.swiperTeacher = new Swiper('.swiper-teacher .swiper-container', {
	        nextButton: '.swiper-teacher .swiper-button-next',
			prevButton: '.swiper-teacher .swiper-button-prev',
			slidesPerView: 1,
			autoplay: 2500,
			autoplayDisableOnInteraction: false,
			loop: true,
			spaceBetween: 20
		});
	}else{
		allGallery.swiperTeacher.destroy(true,true);
		allGallery.swiperTeacher = new Swiper('.swiper-teacher .swiper-container', {
			nextButton: '.swiper-teacher .swiper-button-next',
			prevButton: '.swiper-teacher .swiper-button-prev',
			slidesPerView: 5,
			autoplay: 2500,
			autoplayDisableOnInteraction: false,
			loop: true,
			spaceBetween: 20
		});
	}
	$(window).resize(function(){
		if($(window).width() <= 782){
			allGallery.swiperTeacher.destroy(true,true);
			allGallery.swiperTeacher = new Swiper('.swiper-teacher .swiper-container', {
		        nextButton: '.swiper-teacher .swiper-button-next',
				prevButton: '.swiper-teacher .swiper-button-prev',
				slidesPerView: 1,
				autoplay: 2500,
				autoplayDisableOnInteraction: false,
				loop: true,
				spaceBetween: 20
			});
		}else{
			allGallery.swiperTeacher.destroy(true,true);
			allGallery.swiperTeacher = new Swiper('.swiper-teacher .swiper-container', {
				nextButton: '.swiper-teacher .swiper-button-next',
				prevButton: '.swiper-teacher .swiper-button-prev',
				slidesPerView: 5,
				autoplay: 2500,
				autoplayDisableOnInteraction: false,
				loop: true,
				spaceBetween: 20
			});
		}
	})
}