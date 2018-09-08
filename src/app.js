import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Section from "./components/Section/Section"
import cards from "./cards.json"


class Game extends React.Component {
    state = {
        cards: cards,
        score: 0,
        topScore: 0,
        clickedCards: []
    }

/////// 


///////
    
    

    render() {
      return (
        <div>
    <cards />
     <Footer />
     <Header score={this.state.score} topScore={this.state.topScore}/>
     <Section cards={this.state.cards}/>
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