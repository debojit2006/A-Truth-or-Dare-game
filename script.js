// Get the elements from the HTML
const card = document.getElementById('challenge-card');
const cardType = document.getElementById('card-type');
const cardText = document.getElementById('card-text');
const cardFront = document.querySelector('.card-front');
const playAgainBtn = document.getElementById('play-again-btn');

// --- Your List of Truths and Dares ---
// You can add as many as you want!
const truths = [
    "What's the most embarrassing thing you've ever worn?",
    "If you could be invisible for a day, what would you do?",
    "What's a secret you've never told anyone?",
    "What's your biggest fear?",
    "What's the last lie you told?",
    "What's something you regret doing?"
];

const dares = [
    "Do your best chicken impression.",
    "Sing a song in a funny voice.",
    "Talk in a robot voice for the next 3 minutes.",
    "Try to lick your elbow.",
    "Do 10 pushups.",
    "Let someone else post a status on your social media."
];

// Combine them into a single list of challenges
const challenges = [];
truths.forEach(t => challenges.push({ type: 'Truth', text: t }));
dares.forEach(d => challenges.push({ type: 'Dare', text: d }));


// Function to handle clicking the card
card.addEventListener('click', () => {
    // If card is already flipped, do nothing
    if (card.classList.contains('is-flipped')) {
        return;
    }

    // 1. Get a random challenge
    const randomIndex = Math.floor(Math.random() * challenges.length);
    const randomChallenge = challenges[randomIndex];

    // 2. Update the card front with the challenge details
    cardType.textContent = randomChallenge.type;
    cardText.textContent = randomChallenge.text;

    // 3. Set the color based on the type
    cardFront.classList.remove('truth', 'dare'); // Reset colors
    if (randomChallenge.type === 'Truth') {
        cardFront.classList.add('truth');
    } else {
        cardFront.classList.add('dare');
    }

    // 4. Flip the card
    card.classList.add('is-flipped');
});


// Function to reset the card
playAgainBtn.addEventListener('click', () => {
    card.classList.remove('is-flipped');
});
