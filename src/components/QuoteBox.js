import React, { useState } from 'react'
import quotes from '../quotes';
import "./QuoteBox.css";

let initialQuote = quotes[Math.floor(Math.random() * quotes.length - 1)];

export default function QuoteBox() {
  const [quote, setQuote] = useState(initialQuote);
  
  function handleClick() {
    let filteredQuotes = quotes.filter(q => q !== quote);
    let randomQuote = filteredQuotes[Math.floor(Math.random() * (filteredQuotes.length - 1))];
    setQuote(randomQuote);
  }

  return (
    <div id="quote-box">
        <p id="text"><span>"</span> {quote.quote}</p>
        <p id="author">- {quote.author}</p>
        <div>
            <button>
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
            >
                New Quote
            </button>
        </div>
    </div>
  )
}
