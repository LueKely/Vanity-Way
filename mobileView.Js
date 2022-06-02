const button = document.querySelector('.btnMobile');
const list = document.querySelector('.nbList');
const listItems = document.querySelectorAll('.nbItems');
button.addEventListener('click', () => {
	list.classList.toggle('nblA');
});

listItems.forEach((items) => {
	items.addEventListener('click', () => {
		list.classList.remove('nblA');
	});
});
