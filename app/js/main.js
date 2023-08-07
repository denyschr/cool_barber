const body = document.querySelector('body');
const header = document.querySelector('.header');
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
const navItems = nav.querySelectorAll('.nav__link');
const headerHeight = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-adaptive-height', `${headerHeight}px`);

burger.addEventListener('click', ()=>{
	burger.classList.toggle('burger--active');
	nav.classList.toggle('nav--active');
	body.classList.toggle('noscroll');
});

navItems.forEach(el => {
	el.addEventListener('click', () => {
		burger.classList.remove('burger--active');
		nav.classList.remove('nav--active');
		body.classList.remove('noscroll');
	});
});

gsap.config({
	nullTargetWarn: false,
});
gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();
const mm = gsap.matchMedia();

mm.add("(min-width: 1200px)", () => {
	tl.fromTo(
		'.hero-section__title',
		{
			yPercent: 40,
			opacity: 0,
		},
		{
			yPercent: 0,
			opacity: 1,
			duration: 1,
		},
	)
		.fromTo(
			'.hero-section__frame',
		{
			yPercent: 30,
			opacity: 0,
		},
		{
			yPercent: 0,
			opacity: 1,
			duration: 0.7,
		},
		)
		.fromTo(
			'.hero-section__text',
		{
			opacity: 0,
		},
		{
			opacity: 1,
			duration: 0.7,
		},
	)
		.fromTo(
			'.hero__title',
		{
			xPercent: -40,
			opacity: 0,
		},
		{
			xPercent: 0,
			opacity: 1,
			duration: 1,
		},
		0.1
	)
		.fromTo(
			'.hero__text',
		{
			yPercent: 40,
			opacity: 0,
		},
		{
			yPercent: 0,
			opacity: 1,
			duration: 1,
		},
		0.8
	)
})

mm.add("(min-width: 1200px)", () => {
	gsap.from('.features__list .features__item', {
		scrollTrigger: {
			trigger: '.features',
			start: '20% center',
			end: '+=400px',
		},
		opacity: 0,
		transformOrigin: 'left center',
		duration: 1,
		stagger: 0.20,
	});
	
	gsap.from('.about__title', {
		scrollTrigger: {
			trigger: '.about',
			start: '-18% center',
			end: '+=300px',
		},
		opacity: 0,
		scale: 0,
		duration: 1,
	});
	
	gsap.from('.about__subtitle', {
		scrollTrigger: {
			trigger: '.about',
			start: 'top center',
			end: '+=300px',
		},
		xPercent: -60,
		opacity: 0,
		duration: 1,
	});
	
	gsap.from('.about__img', {
		scrollTrigger: {
			trigger: '.about',
			start: '10% center',
			end: '+=300px',
		},
		opacity: 0,
		duration: 1,
		stagger: 0.20,
	});
	
	gsap.from('.about__row', {
		scrollTrigger: {
			trigger: '.about',
			start: '15% center',
			end: '+=300px',
		},
		opacity: 0,
		duration: 1,
		stagger: 0.20,
	});

	gsap.from('.about__actions', {
		scrollTrigger: {
			trigger: '.about',
			start: '50% center',
			end: '+=300px',
		},
		xPercent: 80,
		opacity: 0,
		duration: 1,
	});

	gsap.from('.testimonials__title', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '-10% center',
			end: '+=300px',
		},
		opacity: 0,
		scale: 0,
		duration: 1,
	});
	
	gsap.from('.testimonials__subtitle', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: 'top center',
			end: '+=300px',
		},
		xPercent: -60,
		opacity: 0,
		duration: 1,
	});

	gsap.from('.testimonials__slider .testimonials__slider-item', {
		scrollTrigger: {
			trigger: '.testimonials',
			start: '15% center',
			end: '+=300px',
		},
		yPercent: 40,
		opacity: 0,
		duration: 1,
		stagger: 0.20
	});

	gsap.from('.pricing__title', {
		scrollTrigger: {
			trigger: '.pricing',
			start: '-10% center',
			end: '+=300px',
		},
		opacity: 0,
		scale: 0,
		duration: 1,
	});
	
	gsap.from('.pricing__subtitle', {
		scrollTrigger: {
			trigger: '.pricing',
			start: 'top center',
			end: '+=300px',
		},
		xPercent: 60,
		opacity: 0,
		duration: 1,
	});

	gsap.from('.pricing__items .pricing__item', {
		scrollTrigger: {
			trigger: '.pricing',
			start: '20% center',
			end: '+=300px',
		},
		yPercent: -20,
		opacity: 0,
		duration: 1,
		stagger: 0.20,
	});


	gsap.from('.form__title', {
		scrollTrigger: {
			trigger: '.appointment',
			start: '-10% center',
			end: '+=300px',
		},
		yPercent: -20,
		opacity: 0,
		duration: 1,
	});

	gsap.from('.form__subtitle', {
		scrollTrigger: {
			trigger: '.appointment',
			start: 'top center',
			end: '+=300px',
		},
		opacity: 0,
		duration: 1,
	});

	gsap.from('.form__content .form__input', {
		scrollTrigger: {
			trigger: '.appointment',
			start: '10% center',
			end: '+=300px',
		},
		opacity: 0,
		duration: 1,
		stagger: 0.15,
	});

	gsap.from('.form__button', {
		scrollTrigger: {
			trigger: '.appointment',
			start: '10% center',
			end: '+=300px',
		},
		scale: 0,
		duration: 1,
	});

	gsap.from('.custom-checkbox__text', {
		scrollTrigger: {
			trigger: '.appointment',
			start: '15% center',
			end: '+=300px',
		},
		xPercent: -30,
		duration: 1,
	});

	gsap.from('.contacts__content', {
		scrollTrigger: {
			trigger: '.contacts',
			start: '-15% center',
			end: '+=300px',
		},
		xPercent: 80,
		opacity: 0,
		duration: 1,
	});
});

const swiper = new Swiper(".swiper", {
	slidesPerView: 4,
	spaceBetween: 20,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints:{
		1024:{
			slidesPerView: 4,
		},
		768:{
			slidesPerView: 3,
		},
		420:{
			slidesPerView: 2,
		},
		320:{
			slidesPerView: 1,
		},
	}
});
