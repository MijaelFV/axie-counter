import { Button } from '@mui/material';
import React from 'react'

function Rounds({setEnergy, round, setRound}) {
    function addRound() {
        setRound(prevState => prevState + 1)
        setEnergy(prevState => prevState + 2)
    }
    
    function newGame() {
        setRound(1)
        setEnergy(3)
    }

    return (
        <>
            <p className="text-gray-900 text-3xl mb-2 mt-9">Round {round}</p>
            <div className="flex">
            <Button
                variant="contained"
                onClick={addRound}
            >NEXT ROUND</Button>
            <div className="w-1"/> 
            <Button
                variant="contained"
                onClick={newGame}
            >NEW GAME</Button>
            </div>
        </>
    )
}

export default Rounds
