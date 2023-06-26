function quotes() {
	decrease();
	const api = fetch('https://type.fit/api/quotes');
	api
		.then(res => res.json())
		.then(data => {
			const randomIndex = Math.floor(Math.random() * data.length + 1);
			const quote = data[randomIndex].text;
			const author = data[randomIndex].author;
			updateQuoteAndAuthor(quote, author);
		});
}

function updateQuoteAndAuthor(quote, author) {
	const quotesElement = document.querySelector('.quo');
	const authorElement = document.querySelector('.aut');
	quotesElement.innerHTML = `<p>"${quote}"</p>`;
	authorElement.innerHTML = `<p>${author}</p>`;
}

const btn = document.querySelector('.btn');
btn.addEventListener('click', quotes);

const icon = document.querySelector('.icon');
const count = document.querySelector('.count');
let like = false;

icon.addEventListener('click', function () {
	if (like) {
		decrease();
	} else {
		increase();
	}
});

function increase() {
	icon.style.color = 'red';
	count.textContent = 1;
	like = true;
}

function decrease() {
	icon.style.color = 'white';
	count.textContent = 0;
	like = false;
}

quotes();
