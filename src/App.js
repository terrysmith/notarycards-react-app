import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import DrawButton from './DrawButton/DrawButton';
import { notarycards} from './data/cards'

class App extends Component {
  constructor(props){
    super(props);

  
    this.updateCard = this.updateCard.bind(this);

    

    this.state = {
      cards:[...notarycards],
      currentCard: {}
    }
  }

  componentDidMount() {
    const currentCards = this.state.cards;
    
      this.setState({
        cards: currentCards,
        currentCard: this.getRandomCard(currentCards)
      })
  }

  getRandomCard(currentCards){
    var card = currentCards[Math.floor(Math.random() * currentCards.length)];
    return(card);
  }

  updateCard(){
    const currentCards = this.state.cards;
    this.setState({
      cards: currentCards,
      currentCard: this.getRandomCard(currentCards)
    })
  }


  render () {
    return (
      <div className="App">
        <div className="cardRow"> 
          <Card  term={this.state.currentCard.term}
            define={this.state.currentCard.define}
        />
       </div>
       <div className="buttonRow"> 
          <DrawButton drawCard={this.updateCard}/>
      </div>
      </div>
    );
  }
}

export default App;
