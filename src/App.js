import React from 'react';
import Quote from './components/Quotebox'
import './App.css';

const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
let randomQuote = "";
class App extends React.Component{
  state = {
    quotes: [],
    index : 0
  }

  getQuote(){
    let randomColorIndex = Math.floor(Math.random() * 10);
    let randomColor = ['green','purple','brown','blue','royalblue','goldenrod','maroon','limegreen']
    document.documentElement.style.setProperty('--main-color', randomColor[randomColorIndex]);
    console.log("Hello")
    this.setState({
      index : this.state.index ? this.state.index - 1 : this.state.index + 1
    })
  }

  async componentDidMount(){

    randomQuote = await fetch(API)
    let response = await randomQuote.json()
    console.log(response.quotes.length)
    let randomIndex = Math.floor(Math.random() * response.quotes.length )+0
    
    this.setState({
      quotes : response.quotes,
      index : randomIndex
    })
  }


  render(){
    const {quotes, index} = this.state
    return (
      <div className="App">
        <Quote 
        quoteText={quotes[index]? quotes[index].quote : null} 
        author = {quotes[index]? quotes[index].author : null}
        newQuote = {this.getQuote = this.getQuote.bind(this)}
        />
      </div>
    );
}
}

export default App;
