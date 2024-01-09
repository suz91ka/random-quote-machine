import React from 'react'
import ReactDOM from 'react-dom/client';
import './styles.css'

const ArrayColors =
  [
    "#1ecbe1",
    "#95b8f6",
    "#7286D3",
    "#e1b1bc",
    "#9b9b9b",
    "#f15fff",
    "#ff8097",
    "#F2059F",
    "#F2AB27",
    "#03A6A6",
    "#D94AA7",
    "#BF0426",
    "#D97904"
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
  <div id="quote-box" style= {{backgroundColor: this.state.color}}>
    <div>
      <div id="wrapper">
        <section id="text" style= {{color: this.state.color}}>
          <cite><i class="fa fa-quote-left" aria-hidden="true"></i> {this.state.quote} <i class="fa fa-quote-right" aria-hidden="true"></i></cite>
          <p id="author"><span>- </span> {this.state.author}</p>


        </section>

        <div id="nav-bar">
          <a class="btn buttons" style= {{backgroundColor: this.state.color}} href="twitter.com/intent/tweet" title="Share this quote on Twitter" target="_top">
            <i class="fa fa-twitter"></i>
          </a>

          <a class="btn buttons" style= {{backgroundColor: this.state.color}} href="facebook.com/intent/facebook" title="Post this quote on Facebook" target="blank">
            <i class="fa fa-facebook"></i>
          </a>

          <button class="button btn" style= {{backgroundColor: this.state.color}} id="newQuote" onClick={() => { this.generateRandom() }} type="submit">
            New quote
          </button> 
        </div>
      </div>
        <footer>Created by Zuzana</footer>
      </div>
  </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
