import React, { useState } from 'react'
import quotes from '../quotes';
import colors from '../colors';
import "./QuoteBox.css";

let initialQuote = quotes[Math.floor(Math.random() * quotes.length - 1)];
let initialColor = colors[Math.floor(Math.random() * colors.length - 1)];

export default function QuoteBox() {
  const [quote, setQuote] = useState(initialQuote);
  const [color, setColor] = useState(initialColor);

  const cssColor = {
    color: `${color}`,
  };
  const cssBackgroundColor = {
    backgroundColor: `${color}`,
  };
  
  function handleClick() {
    let filteredQuotes = quotes.filter(q => q !== quote);
    let randomQuote = filteredQuotes[Math.floor(Math.random() * (filteredQuotes.length - 1))];
    setQuote(randomQuote);
    let filteredColors = colors.filter(c => c !== color);
    let randomColor = filteredColors[Math.floor(Math.random() * (filteredColors.length - 1))];
    setColor(randomColor);
  }

  return (
    <div class="wrapper" style={cssBackgroundColor}>
      <div id="quote-box">
          <p id="text" style={cssColor}><span>"</span> {quote.quote}</p>
          <p id="author" style={cssColor}>- {quote.author}</p>
          <div>
              <button style={cssBackgroundColor}>
                  <a  
                      id="tweet-quote"
                      href="twitter.com/intent/tweet"
                  >
                      Tweet Quote
                  </a>
              </button>
              <button
                  id="new-quote"
                  onClick={handleClick}
                  style={cssBackgroundColor}
              >
                  New Quote
              </button>
          </div>
      </div>
    </div>
  )
}
