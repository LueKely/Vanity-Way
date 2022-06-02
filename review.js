const name = document.querySelector('.name');
const words = document.querySelector('.reviewWords');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
const reviewImg = document.querySelector('.reviewImg');
let count = 0;

class reviewers {
	constructor(userInfo) {
		// here , userInfo is a single object from userInfos
		for (const key of Object.keys(userInfo)) {
			this[key] = userInfo[key];
		}
	}
}
let users = [];

//A way to make it easy to extend (when you want to add a new user for instance, you can just add an object here)
const userInfos = [
	{
		name: 'Ervin Pangilinan',
		text: 'Excepteur quis adipisicing labore esse. Quis sint laborum duis fuonsequatsicing minim excepion idLorem id',
		img: './images/george.jpg',
	},
	{
		name: 'Ernest Monticalvo',
		text: 'Fugiat mollit minim proident qui  pariatur officia qui enim xercitation exercitation ea esse sint velit.',
		img: './images/monti.jpg',
	},
	{
		name: 'Anna Williams',
		text: 'Excepteur velit aliquip nostrud ex sunt laboris voluptate moicing amnim con id ex er officamet sit nim.',
		img: './images/chinita.jpg',
	},
	{
		name: 'Blix Quirante',
		text: 'Enim ex id est nostrud ea consectetur ullamco anim. Non conndersint fugiat. Mollint ut dolore non enim magna consectetur proident veniam. ',
		img: './images/pogi.jpg',
	},
];

userInfos.forEach((userInfo) => {
	// push each instance of reviewers based on userInfo's content
	users.push(new reviewers(userInfo));
});

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
