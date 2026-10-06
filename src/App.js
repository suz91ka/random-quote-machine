import React from 'react'
import './styles.css'

const quoteColors = ['#F0F8FF', '#E8E3EF', '#E4E7DC'];

const quotes = [
    {
      "quote": "All our dreams can come true, if we have the courage to pursue them.",
      "author": "Walt Disney"
    },
    {
      "quote": "The secret of getting ahead is getting started.",
      "author": "Mark Twain"
    },
    {
      "quote": "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed.",
      "author": "Michael Jordan"
    },
    {
      "quote": "The best time to plant a tree was 20 years ago. The second best time is now.",
      "author": "Chinese Proverb"
    },
  
  {
    "quote": "Write it. Shoot it. Publish it. Crochet it. Sauté it. Whatever. MAKE.",
    "author": "Joss Whedon"
  },
  {
    "quote": "Everything you can imagine is real.",
    "author": "Pablo Picasso"
  },
  {
    "quote": "Do one thing every day that scares you.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers.",
    "author": "Socrates"
  },
  {
    "quote": "Happiness is not something ready made. It comes from your own actions.",
    "author": "Dalai Lama XIV"
  },
  {
    "quote": "You can either experience the pain of discipline or the pain of regret. The choice is yours.",
    "author": "Unknown"
  },
  {
    "quote": "Everything is hard before it is easy.",
    "author": "Goethe"
  },
  {
    "quote": "One day or day one. You decide.",
    "author": "Unknown"
  },
  {
    quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    author: "Jane Goodall"
  },
  {
    quote: "Done is better than perfect.",
    author: "Sheryl Sandberg"
  },
  {
    quote: "The only limit to our realization of tomorrow is our doubts of today.",
    author: "Franklin D. Roosevelt"
  }
];

class App extends React.Component {
  state = {
    quoteIndex: 0,
    backgroundColor: '#F0F8FF',
    textColor: '#292f3a',
    isDarkTheme: false,
    status: ''
  };

  generateRandom = () => {
    this.setState(previous => {
      // A nonzero offset selects any quote except the one currently displayed.
      const offset = 1 + Math.floor(Math.random() * (quotes.length - 1));
      const currentColorIndex = quoteColors.indexOf(previous.backgroundColor);
      const colorOffset = 1 + Math.floor(Math.random() * (quoteColors.length - 1));
      const backgroundColor = quoteColors[(currentColorIndex + colorOffset) % quoteColors.length];
      return {
        quoteIndex: (previous.quoteIndex + offset) % quotes.length,
        backgroundColor,
        textColor: '#292f3a',
        isDarkTheme: false,
        status: ''
      };
    });
  };

  quoteText = () => {
    const { quote, author } = quotes[this.state.quoteIndex];
    return `“${quote}” - ${author}`;
  };

  copyQuote = async () => {
    try {
      await navigator.clipboard.writeText(this.quoteText());
      this.setState({ status: 'Quote copied to clipboard.' });
    } catch {
      this.setState({ status: 'Could not copy automatically. Select the quote text to copy it.' });
    }
  };

  shareQuote = async () => {
    const text = this.quoteText();
    if (navigator.share) {
      try {
        await navigator.share({ title: 'A little perspective', text });
        this.setState({ status: 'Quote shared.' });
        return;
      } catch (error) {
        if (error.name === 'AbortError') return;
      }
    }
    const url = `https://x.com/intent/tweet?text=${encodeURIComponent(text)}`;
    const popup = window.open(url, '_blank', 'noopener,noreferrer');
    if (popup) popup.opener = null;
    this.setState({ status: 'Opening X to share your quote. If no window appeared, use Copy quote.' });
  };

  render() {
    const { backgroundColor, textColor, isDarkTheme, status } = this.state;
    const { quote, author } = quotes[this.state.quoteIndex];
    return (
      <main className="quote-page">
        <article
          className={`quote-card${isDarkTheme ? ' quote-card-dark' : ''}`}
          id="quote-box"
          aria-label="Random quote"
          style={{ backgroundColor, color: textColor }}
        >
          <header className="quote-header">
            <span>A little perspective</span>
            <i className="fa-solid fa-wand-magic-sparkles" aria-hidden="true" />
          </header>
          <div className="quote-reading" aria-live="polite" aria-atomic="true">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote id="text">{quote}</blockquote>
            <p id="author">- {author}</p>
          </div>
          <footer className="quote-footer">
            <div className="quote-tools">
              <button type="button" onClick={this.copyQuote}>
                <i className="fa-regular fa-copy" aria-hidden="true" />
                Copy quote
              </button>
              <button type="button" id="share-quote" onClick={this.shareQuote}>
                <i className="fa-solid fa-arrow-up-from-bracket" aria-hidden="true" />
                Share
              </button>
            </div>
            <button className="quote-button" id="new-quote" type="button" onClick={this.generateRandom}>
              New quote
            </button>
          </footer>
          <p className="quote-status" role="status">{status}</p>
        </article>
      </main>
    );
  }
}

export default App;
