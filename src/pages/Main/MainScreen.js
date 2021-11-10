import React, { useState } from 'react';
import Cards from './components/Cards';
import Energys from './components/Energys';
import Rounds from './components/Rounds';

export function MainScreen() {
  const [energy, setEnergy] = useState(3)
  const [round, setRound] = useState(1)
  const [card, setCard] = useState(6)

  return (
    <div 
      className="w-full h-full flex justify-center items-center"
      style={{
        backgroundColor: "#007DC1"
      }}
    >
      <div className="w-80 h-80 bg-white rounded-2xl flex flex-col items-center">
        <Rounds setEnergy={setEnergy} round={round} setRound={setRound} setCard={setCard}/>
        <Energys energy={energy} setEnergy={setEnergy} />
        <Cards card={card} setCard={setCard} />
      </div>
    </div>
  );
}
