import { Button } from '@mui/material';
import React, { useState } from 'react';

function Main() {
  const [energy, setEnergy] = useState(3)
  const [round, setRound] = useState(1)

  function addRound() {
    setRound(prevState => prevState + 1)
    setEnergy(prevState => prevState + 3)
  }

  function newGame() {
    setRound(1)
    setEnergy(3)
  }

  function addEnergy() {
    setEnergy(prevState => prevState + 1)
  }

  function subEnergy() {
    if (energy > 1) {
      setEnergy(prevState => prevState - 1)
    }
  }
  
  return (
    <div className="w-full h-full bg-gray-900 flex justify-center items-center">
      <div className="w-80 h-80 bg-white rounded-2xl flex flex-col items-center">
        <p className="text-gray-900 text-3xl mb-2 mt-9">Round {round}</p>
        <div className="flex">
          <Button
            sx={{
              backgroundColor: "#be9770",
              color: "black"
            }}
            variant="contained"
            onClick={addRound}
          >NEXT ROUND</Button>
          <div className="w-1"/> 
          <Button
            sx={{
              backgroundColor: "#be9770",
              color: "black"
            }}
            variant="contained"
            onClick={newGame}
          >NEW GAME</Button>
        </div>
        <p className="text-gray-900 text-3xl mb-2 mt-9">Energy {energy}</p>
        <div className="flex">
          <Button
            disableRipple
            disableTouchRipple
            sx={{
              backgroundColor: "#be9770",
              color: "black"
            }}
            variant="contained"
            onClick={addEnergy}
          >ADD</Button>
          <div className="w-1"/> 
          <Button
            disabled={energy === 1}
            sx={{
              backgroundColor: "#be9770",
              color: "black"
            }}
            variant="contained"
            onClick={subEnergy}
          >SUB</Button>
        </div>
      </div>
    </div>
  );
}

export default Main;
