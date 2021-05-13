/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "Float like a butterfly, sting like a bee.",
    source: "Muhammad Ali",
    citation: "WJZ CBS Baltimore",
    year: "1964"  
  },
  {
    quote: "Say 'hello' to my little friend!",
    source: "Tony Montana",
    citation: "Scarface",
    year: "1983"
  },
  {
    quote: "Come on, Let's get serious.",
    source: "Arnold Schwarzenegger",
    citation: "Pumping Iron",
    year: "1977"
  },
  {
    quote: "It's a lot more than mind over matter. It takes relentless self discipline to schedule suffering into your day, every day.",
    source: "David Goggins",
    citation: "Can't Hurt Me",
    year: "2018"
  },
  {
    quote: "Don't worry about a thing cause every little thing gonna be all right.",
    source: "Bob Marley",
    citation: "Three Little Birds",
    year: "1997"
  }
];

// colors array
const colors = ['green','red','black','blue','purple'];
const button = document.querySelector('button');
const body = document.querySelector('body');

body.style.backgroundColor = 'green'
button.addEventListener('click',changeBackground)


//change background color 
function changeBackground() {
  const colorIndex = parseInt(Math.random() * colors.length);
  body.style.backgroundColor = colors[colorIndex];
};

/***
 * `getRandomQuote` function
***/
function getRandomQuote(quotes) {
  var randomIndex = Math.floor(Math.random() * quotes.length); 
  console.log(randomIndex)
  return quotes[randomIndex]
};
for (i = 0; i < quotes.length; i++);

// Run console log to see if it works properly 
{
  console.log(getRandomQuote(quotes))
};

/***
 * `printQuote` function
***/
function printQuote(){
  var fmsQuote = document.querySelector(".quote-box");
  var randomQuote = getRandomQuote(quotes); 
  var htmlQuote = `<p class="quote">${randomQuote.quote}`;

  if (randomQuote.source){
    htmlQuote += `<p class="source">${randomQuote.source}`
  }
  if (randomQuote.citation){
    htmlQuote += `<span class="citation">${randomQuote.citation}`
  }
  if (randomQuote.year){
    htmlQuote += `<span class="year">${randomQuote.year}`
  }
  
  htmlQuote += `</p>`;


  // Display quote on web page
  fmsQuote.innerHTML = htmlQuote;
};


// Display quotes and colors every 3 seconds
setInterval(function() {
  printQuote(quotes), changeBackground(colors);
}, 4000);
  


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);