const quotes = [
    "Believe you can and you're halfway there.",
    "Your only limit is your mind.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
    "Dream it. Wish it. Do it.",
    "Stay focused and never give up.",
    "Don't watch the clock; do what it does. Keep going.",
    "Great things never come from comfort zones.",
    "It always seems impossible until it's done.",
    "Small steps every day."
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("new-quote-btn");

function getRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  return quotes[index];
}

function showNewQuote() {
  quoteElement.classList.remove("show");
  setTimeout(() => {
    quoteElement.textContent = getRandomQuote();
    quoteElement.classList.add("show");
  }, 200);
}

// On page load
quoteElement.textContent = getRandomQuote();
setTimeout(() => {
  quoteElement.classList.add("show");
}, 100);

// Button click
button.addEventListener("click", showNewQuote);

  