const faqP = document.querySelectorAll('.faq-p');
const faqH1 = document.querySelectorAll('.faq-h1');
const faqIcons = document.querySelectorAll('.faq-icon');
const faqItems = document.querySelectorAll('.faq-items');

for (let i = 0; i < faqIcons.length; i++) {
	faqItems[i].addEventListener('click', () => {
		if (faqItems[i].classList.contains('items-active')) {
			faqItems[i].classList.remove('items-active');
			faqH1[i].classList.remove('h1-active');
			faqIcons[i].classList.remove('icon-active');
			faqP[i].classList.remove('p-active');
		} else {
			removeFaqH1();
			removeFaqIcons();
			removeFaqItems();
			removeFaqP();
			faqItems[i].classList.add('items-active');
			faqH1[i].classList.add('h1-active');
			faqIcons[i].classList.add('icon-active');
			faqP[i].classList.add('p-active');
		}
	});
}

function removeFaqP() {
	faqP.forEach((ami) => {
		ami.classList.remove('p-active');
	});
}
function removeFaqH1() {
	faqH1.forEach((b) => {
		b.classList.remove('h1-active');
	});
}
function removeFaqIcons() {
	faqIcons.forEach((b) => {
		b.classList.remove('icon-active');
	});
}

function removeFaqItems() {
	faqItems.forEach((c) => {
		c.classList.remove('items-active');
	});
}
