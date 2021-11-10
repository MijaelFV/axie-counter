import { AppBar } from '@mui/material';
import React, { useState } from 'react';
import Cards from './components/Cards';
import Energys from './components/Energys';
import Rounds from './components/Rounds';
import WoodTexture from "../../assets/wood.jpg";
import Logo from "../../assets/logo.png";
import { border, borderBottom } from '@mui/system';

export function MainScreen() {
  const [energy, setEnergy] = useState(3)
  const [round, setRound] = useState(1)
  const [card, setCard] = useState(6)

  return (
    <div className="w-full h-full flex flex-col  items-center">
      <AppBar 
        style={{  
            backgroundImage: 'url(' + WoodTexture + ')',
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'repeat',
            boxSizing: '',
            borderBottom: "4px solid rgb(98 56 28)"
        }}
        position="static"
      >
        <div className="w-full h-12 py-2">
          <div
            className="w-32 h-24 -mt-4 ml-7"
            style={{  
                backgroundImage: 'url(' + Logo + ')',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
            }}
          />
        </div>
      </AppBar>
      <div className="flex flex-col sm:flex-row bg-gradient-to-tr mt-auto mb-auto py-3">
        <Rounds setEnergy={setEnergy} round={round} setRound={setRound} setCard={setCard}/>
        <Energys energy={energy} setEnergy={setEnergy} />
        <Cards card={card} setCard={setCard} />
      </div>
    </div>
  );
}
