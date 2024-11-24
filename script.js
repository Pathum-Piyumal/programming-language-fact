// script.js
const facts = [
    {
        language: "BASIC",
        year: 1964,
        fact: "Created at Dartmouth College to teach non-science students about computers. Its name stands for 'Beginner's All-purpose Symbolic Instruction Code.'"
    },
    {
        language: "First Programming",
        year: 1840,
        fact: "Ada Lovelace was the first programmer in history, writing the first algorithm for Charles Babbage's Analytical Engine."
    },
    {
        language: "Python",
        fact: "Named after Monty Python's Flying Circus, not the snake. Creator Guido van Rossum was a fan of the comedy series."
    },
    {
        language: "First Bug",
        year: 1947,
        fact: "The first computer bug was an actual moth found trapped in Harvard University's Mark II computer, coined by Grace Hopper."
    },
    {
        language: "JavaScript",
        year: 1995,
        fact: "Created in just 10 days by Brendan Eich. Originally called 'Mocha,' then 'LiveScript' before becoming JavaScript."
    }
];

function displayFacts() {
    const container = document.getElementById('facts-container');
    facts.forEach(fact => {
        const card = document.createElement('div');
        card.className = 'fact-card';
        card.innerHTML = `
            <h3>${fact.language} ${fact.year ? `(${fact.year})` : ''}</h3>
            <p>${fact.fact}</p>
        `;
        container.appendChild(card);
    });
}

function share(platform) {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Check out these amazing programming language fun facts!');
    
    if (platform === 'twitter') {
        window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`);
    } else if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayFacts);
