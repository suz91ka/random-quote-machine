import React from 'react'
import './styles.css'

const ArrayColors = {
  light: ['#F0F8FF', '#E6E6FA', '#FFF0F5', '#F0FFF0', '#FFFAF0'],
  dark: ['#2C3E50', '#34495E', '#4A5568', '#1A202C', '#2D3748'],
}
  

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
  constructor(props) {
    super(props);
    this.state = {
      quote: quotes[0].quote,
      author: quotes[0].author,
      backgroundColor: ArrayColors.light[0],
      textColor: 'black',
      isDarkTheme: false
    }
    this.generateRandom = this.generateRandom.bind(this);
  }
  
  

  // define random generate function
  generateRandom = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const isDarkTheme = Math.random() < 0.5;
    const colorScheme = isDarkTheme ? ArrayColors.dark : ArrayColors.light;
    const backgroundColor = colorScheme[Math.floor(Math.random() * colorScheme.length)];
    const textColor = isDarkTheme ? "white" : "black";

    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author,
      backgroundColor,
      textColor,
      isDarkTheme
    });
  }
  
  // render output
  render() {
    const {  backgroundColor, textColor } = this.state;

    return (
      <div className="quote-box" id="quote-box" style={{ backgroundColor: this.state.color, color: textColor }} >
        <div>
        <div className="wrapper" id="wrapper" style= {{backgroundColor}} >
          <section id="text">
          <cite><i className="fa fa-quote-left fa-xs" aria-hidden="true"></i> {this.state.quote} <i class="fa fa-quote-right fa-xs" aria-hidden="true"></i></cite>
          <p id="author"><span>- </span> {this.state.author}</p>
          </section>

        <div className="footer" id="footer">
          <div className="footer-content" id="footer-content">
            <a className="social-media-icons" style= {{backgroundColor: this.state.color, color: textColor}} href="x.com/intent/tweet" title="Share this quote on Twitter" target="_top">
              <i className="fa-brands fa-x-twitter"></i>
            </a>

            <a className="social-media-icons" style= {{backgroundColor: this.state.color, color: textColor}} href="facebook.com/intent/facebook" title="Post this quote on Facebook" target="blank">
              <i className="fab fa-facebook-square fa-sm"></i>
            </a>

            <a className="social-media-icons" style= {{backgroundColor: this.state.color, color: textColor}} href="instagram.com/intent/instagram" title="Post this quote on Instagram" target="blank">
              <i className="fa-brands fa-square-instagram"></i>
           </a>

            <button className="quote-button" style= {{backgroundColor: this.state.color, color: textColor}} id="newQuote" onClick={() => {this.generateRandom() }} type="submit">
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