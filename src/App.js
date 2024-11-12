import React from 'react'
import './styles.css'

const ArrayColors =
  [
    "#B4BBBF",
    "#403440",
    "#949FA6",
    "#7B5B6C",
    "#74818C",
    "#B58590",
    "#536473",
    "#CCA6B4",
    "#394A59",
    "#F0DBE3"
  ];
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
  }
];

class App extends React.Component {
  // set initial state
  state = {
    quote: quotes[0].quote,
    author: quotes[0].author,
    color: ArrayColors[0]
  }
  // define random generate function
  generateRandom = (event) => {
    let num = Math.floor(Math.random() * quotes.length);
    console.log(num);
    let newQuote = quotes[num];
    
    num = Math.floor(Math.random() * ArrayColors.length);
    let newColor = ArrayColors[num];
    
    this.setState({
      quote: newQuote.quote,
      author: newQuote.author,
      color: newColor
    })
  }
  
  // render output
  render() {
    return (
  <div className="quote-box" id="quote-box" style= {{backgroundColor: this.state.color}}>
    <div>
      <div className="wrapper" id="wrapper">
        <section id="text" style= {{color: this.state.color}}>
          <cite><i className="fa fa-quote-left fa-xs" aria-hidden="true"></i> {this.state.quote} <i class="fa fa-quote-right fa-xs" aria-hidden="true"></i></cite>
          <p id="author"><span>- </span> {this.state.author}</p>
        </section>

        <div className="footer" id="footer">
          <div className="footer-content" id="footer-content">
            <a className="social-media-icons" style= {{backgroundColor: this.state.color}} href="x.com/intent/tweet" title="Share this quote on Twitter" target="_top">
            <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a className="social-media-icons" style= {{backgroundColor: this.state.color}} href="facebook.com/intent/facebook" title="Post this quote on Facebook" target="blank">
            <i className="fab fa-facebook-square fa-sm"></i>
            </a>

            <a className="social-media-icons" style= {{backgroundColor: this.state.color}} href="instagram.com/intent/instagram" title="Post this quote on Instagram" target="blank">
            <i className="fa-brands fa-square-instagram"></i>
           </a>

            <button className="quote-button" style= {{backgroundColor: this.state.color}} id="newQuote" onClick={() => { this.generateRandom() }} type="submit">
            New quote
            </button>
          </div>
        </div>
      </div>
      </div>
  </div>
    )
  }
}

export default App;