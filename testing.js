const faqP = document.querySelectorAll('.faq-p');
const faqIcons = document.querySelectorAll('.faq-icon');
const faqItems = document.querySelectorAll('.faq-items');
const faqIcon = document.querySelectorAll('.faq-icon');
for (let index = 0; index < faqIcons.length; index++) {
	faqIcons[index].addEventListener('click', () => {
		faqItems[index].classList.toggle('items-active');
		faqP[index].classList.toggle('p-active');
		faqIcon[index].classList.toggle('icon-active');
	});
}
