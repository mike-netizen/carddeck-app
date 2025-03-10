import React, { useState } from 'react';
import Card from './components/Card';
import './App.css';

const App = () => {
  const [deck, setDeck] = useState(createDeck());
  const [selectedCards, setSelectedCards] = useState([]);
  const [pickedCard, setPickedCard] = useState(null);

  // Function to create a deck of 52 cards
  function createDeck() {
    const suits = ['♥', '♦', '♣', '♠'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const deck = [];
    suits.forEach(suit => {
      values.forEach(value => {
        deck.push({ suit, value });
      });
    });
    return deck;
  }

  // Function to handle dealing cards
  const dealCards = (num) => {
    const newDeck = [...deck];
    const dealtCards = [];
    for (let i = 0; i < num; i++) {
      const randomIndex = Math.floor(Math.random() * newDeck.length);
      dealtCards.push(newDeck.splice(randomIndex, 1)[0]);
    }
    setDeck(newDeck);
    setSelectedCards(dealtCards);
  };

  // Function to handle resetting the deck
  const resetDeck = () => {
    setDeck(createDeck());
    setSelectedCards([]);
  };

  // Function to handle card clicks (highlighting and swapping)
  const handleCardClick = (index) => {
    if (pickedCard === null) {
      setPickedCard(index); // Highlight the clicked card
    } else {
      const newSelectedCards = [...selectedCards];
      // Swap the picked card with the clicked card
      [newSelectedCards[pickedCard], newSelectedCards[index]] = [newSelectedCards[index], newSelectedCards[pickedCard]];
      setSelectedCards(newSelectedCards);
      setPickedCard(null); // Clear the picked card
    }
  };

  return (
    <div className="App">
      <div className="deck" onClick={() => dealCards(1)}>
        {deck.length > 0 ? 'Deck of Cards' : 'No cards remaining'}
      </div>
      <div className="buttons">
        <button onClick={() => dealCards(5)}>Deal 5</button>
        <button onClick={() => dealCards(7)}>Deal 7</button>
        <button onClick={resetDeck}>Reset</button>
      </div>
      <div className="selected-cards">
        {selectedCards.map((card, index) => (
          <Card
            key={index}
            suit={card.suit}
            value={card.value}
            onClick={() => handleCardClick(index)}
            isPicked={index === pickedCard} // Highlight if picked
          />
        ))}
      </div>
    </div>
  );
};

export default App;