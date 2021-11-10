import { AppBar } from '@mui/material';
import React, { useState } from 'react';
import Cards from './components/Cards';
import Energys from './components/Energys';
import Rounds from './components/Rounds';

export function MainScreen() {
  const [energy, setEnergy] = useState(3)
  const [round, setRound] = useState(1)
  const [card, setCard] = useState(6)

  return (
    <div className="w-full h-full flex flex-col  items-center">
      <AppBar position="static">
        <div className="w-full py-2 mx-5">
          <p className="text-3xl font-medium text">Axie Counter</p>
        </div>
      </AppBar>
      <div className="flex flex-col sm:flex-row bg-gradient-to-tr mt-auto mb-auto">
        <Rounds setEnergy={setEnergy} round={round} setRound={setRound} setCard={setCard}/>
        <Energys energy={energy} setEnergy={setEnergy} />
        <Cards card={card} setCard={setCard} />
      </div>
    </div>
  );
}
