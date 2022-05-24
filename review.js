const name = document.querySelector('.name');
const words = document.querySelector('.reviewWords');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const reviewImg = document.querySelector('.reviewImg');
let count = 0;

class reviewers {
	constructor(name, text, img) {
		this.name = name;
		this.text = text;
		this.img = img;
	}
}

let users = [];

users[0] = new reviewers(
	'Ervin Pangilinan',
	'Excepteur quis adipisicing labore esse. Quis sint laborum duis fugiat Ullamco consequat sunt occaecat adipisicing minim excepteur exercitation idLorem id',
	'/images/blm.jpg'
);
users[1] = new reviewers(
	'Ernest Monticalvo',
	'Fugiat mollit minim proident qui ullamco dolore occaecat. Officia sunt incididunt consequat voluptate enim eiusmod. Mollit pariatur officia qui enim aliquip duis excepteur exercitation exercitation ea esse sint velit.',
	'/images/monti.jpg'
);
users[2] = new reviewers(
	'Chinita',
	'Excepteur velit aliquip nostrud ex sunt laboris voluptate mollit aliqua. Adipisicing amet voluptate cillum incididunt anim consequat quis do est id ex eiusmod. Excepteur officia exercitation amet sit officia anim.',
	'/images/chinita.jpg'
);
users[3] = new reviewers(
	'Blix Quirante',
	'Enim ex id est nostrud ea consectetur ullamco anim. Non consequat sunt nulla culpa aliquip labore reprehenderit excepteur sint fugiat. Mollit nisi sunt ut dolore non enim magna consectetur proident veniam. ',
	'/images/pogi.jpg'
);
name.textContent = users[count].name;
words.textContent = users[count].text;
reviewImg.src = users[count].img;

nextBtn.addEventListener('click', () => {
	count++;

	if (count > 3) {
		count = 0;
	}
	name.textContent = users[count].name;
	words.textContent = users[count].text;
	reviewImg.src = users[count].img;
});
prevBtn.addEventListener('click', () => {
	count--;

	if (count < 0) {
		count = 3;
	}
	name.textContent = users[count].name;
	words.textContent = users[count].text;
	reviewImg.src = users[count].img;
});
