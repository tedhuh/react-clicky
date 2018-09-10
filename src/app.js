import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section"
import cards from "./cards.json"
import ClickItem from "./components/ClickItem/ClickItem"

class Game extends React.Component {
  state = {
    cards: cards,
    score: 0,
    topScore: 0,
    clickedCards: []
  }


 
  /////// 

  renderCards = (array) => {
    return this.state.cards.map(card => (
      <section className='col s4 m3 l3' key={card.id} id={card.id}>
        <ClickItem
          name={card.name} 
          image={card.image} 
          reArrangeCards={() => {this.reArrangeCards(this.state.cards)}}
          clickedCharacter={() => {this.clickedCharacter(card.id)}}/>
      </section>
      )
    )
  }
  ///////



  render() {
    return (
      <div>
        <cards />
        <Footer />
        <Header score={this.state.score} topScore={this.state.topScore} />
        <Section />



      </div>
    );
  }
}


// const App = () => (
//     <div>
//     <Header />
//     <Footer />

// </div>
// )
export default Game;