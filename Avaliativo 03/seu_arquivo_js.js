

const quoteDisplay = document.getElementById('quoteDisplay');
const authorDisplay = document.getElementById('authorDisplay');
const newQuoteButton = document.getElementById('newQuoteButton');

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    quoteDisplay.textContent = `"${randomQuote.quote}"`;
    authorDisplay.textContent = `- ${randomQuote.author}`;
}

newQuoteButton.addEventListener('click', generateRandomQuote);