import { AppBar } from '@mui/material';
import React, { useState } from 'react';
import Cards from './components/Cards';
import Energys from './components/Energys';
import Rounds from './components/Rounds';
import WoodTexture from "../../assets/wood.jpg";
import Logo from "../../assets/logo.png";
import Github from "../../assets/github.png"
import CondorGaming from "../../assets/condorGaming.png"

export function MainScreen() {
  const [energy, setEnergy] = useState(3)
  const [round, setRound] = useState(1)
  const [card, setCard] = useState(6)

  return (
    <div className="w-full h-full flex flex-col items-center">
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
      <div className="flex flex-col sm:flex-row bg-gradient-to-tr mt-auto mb-auto py-14">
        <Rounds setEnergy={setEnergy} round={round} setRound={setRound} setCard={setCard}/>
        <Energys energy={energy} setEnergy={setEnergy} />
        <Cards card={card} setCard={setCard} />
      </div>
        <img src={CondorGaming} alt="Github logo." className="h-24 mb-4" />
        <div className="flex items-center mb-4">
          <img src={Github} alt="Github logo." className="h-4 w-4" />
          <a href="https://github.com/MijaelFV/axie-counter" className="pl-1"> <i className="text-lg"> Github </i></a>
        </div>
    </div>
  );
}
