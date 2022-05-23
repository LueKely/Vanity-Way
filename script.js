const aboutMeItems = document.querySelectorAll('.aboutMeItems');

const aboutMeText = document.querySelectorAll('.aboutMeText');

const titleIco = document.querySelectorAll('.titleIco');

const itemTitle = document.querySelectorAll('.itemTitle');

for (let i = 0; i < aboutMeItems.length; i++) {
	aboutMeItems[i].addEventListener('click', () => {
		if (aboutMeItems[i].classList.contains('amiActive')) {
			aboutMeItems[i].classList.remove('amiActive');
			aboutMeText[i].classList.remove('amtActive');
			titleIco[i].classList.remove('tiActive');
			itemTitle[i].classList.remove('itActive');
		} else {
			removeAmi();
			removeText();
			removeTia();
			remoiveIta();
			aboutMeItems[i].classList.add('amiActive');
			aboutMeText[i].classList.add('amtActive');
			titleIco[i].classList.add('tiActive');
			itemTitle[i].classList.add('itActive');
		}
	});
}
function removeAmi() {
	aboutMeItems.forEach((ami) => {
		ami.classList.remove('amiActive');
	});
}
function removeText() {
	aboutMeText.forEach((b) => {
		b.classList.remove('amtActive');
	});
}
function removeTia() {
	titleIco.forEach((b) => {
		b.classList.remove('tiActive');
	});
}

function remoiveIta() {
	itemTitle.forEach((c) => {
		c.classList.remove('itActive');
	});
}

//reviews starts here
