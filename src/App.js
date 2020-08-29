import React from 'react';
import Quote from './components/Quotebox'
import './App.css';
import styled, { keyframes } from 'styled-components';

import { fadeIn } from 'react-animations'

const fadeInAnimation = keyframes`${fadeIn}`;

let FadeInDiv = styled.div`
  animation: 3s ${fadeInAnimation} ;
`;


const API = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
let randomQuote = "";
class App extends React.Component{
  state = {
    quotes: [],
    index : 0
  }





  async componentDidMount(){

    randomQuote = await fetch(API)
    let response = await randomQuote.json()
    let randomIndex = Math.floor(Math.random() * response.quotes.length )+0
    this.setState({
      quotes : response.quotes,
      index : randomIndex
    })
  }

 

  getQuote(){
    
    let randomColor = ['green','purple','brown','blue','royalblue','goldenrod','maroon','limegreen']
    let randomColorIndex = Math.floor(Math.random() * randomColor.length);
    document.documentElement.style.setProperty('--main-color', randomColor[randomColorIndex]);
    
    
    this.setState({
      index  : this.state.index  < this.state.quotes.length-10 && this.state.index > 0? this.state.index + randomColorIndex : this.state.index - 80
      // index  : this.state.quotes[this.state.index] ? this.state.index + randomColorIndex : this.state.index - this.state.quotes.length
    })
    console.log(this.state.index)
    console.log(this.state.quotes[this.state.index])
  }

  render(){
    FadeInDiv = styled.div`
  animation: 2s ${fadeInAnimation} ;
`;
    const {quotes, index} = this.state
    return (
      
        <FadeInDiv>
          <div className="App">
        <Quote 
        quoteText={quotes[index]? quotes[index].quote : null} 
        author = {quotes[index]? quotes[index].author : null}
        newQuote = {this.getQuote = this.getQuote.bind(this)}
        />
      </div>
      </FadeInDiv>
    );
}
}

export default App;
