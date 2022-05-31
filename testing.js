const faqP = document.querySelectorAll('.faq-p');
const faqH1 = document.querySelectorAll('.faq-h1');
const faqIcons = document.querySelectorAll('.faq-icon');
const faqItems = document.querySelectorAll('.faq-items');
const faqIcon = document.querySelectorAll('.faq-icon');
for (let index = 0; index < faqIcons.length; index++) {
	faqIcons[index].addEventListener('click', () => {
		faqItems[index].classList.toggle('items-active');
		faqP[index].classList.toggle('p-active');
		faqIcon[index].classList.toggle('icon-active');
		faqH1[index].classList.toggle('h1-active');
	});
}
