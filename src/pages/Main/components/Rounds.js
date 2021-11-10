import { Button } from '@mui/material';
import React from 'react'
import numberSplit from '../../../helpers/numberSplit';

function Rounds({setEnergy, round, setRound, setCard}) {

    function addRound() {
        setRound(prevState => prevState + 1)
        setEnergy(prevState => {
            const _newValue = prevState + 2;
            return _newValue > 10 ? 10 : _newValue;
        });
        setCard(prevState => {
            const _newValue = prevState + 3;
            return _newValue > 24 ? 24 : _newValue;
        });
    }
    
    function newGame() {
        setRound(1)
        setEnergy(3)
        setCard(6)
    }
    

    return (
        <>
            <div 
                className="w-48 h-48 bg-gray-700 border-4 border-blue-500 rounded-2xl flex flex-col items-center p-4 mb-3 sm:mr-3 overflow-hidden"
            >
                <p className="text-white text-3xl font-medium -mt-3">Round</p>
                <div className="flex">
                    <div className="bg-gray-800 px-2 rounded my-2 mr-1">
                        <p className="text-white text-3xl">{numberSplit(round, 0)}</p>
                    </div>
                    <div className="bg-gray-800 px-2 rounded my-2">
                        <p className="text-white text-3xl">{numberSplit(round, 1)}</p>
                    </div>
                </div>
                <Button
                    fullWidth
                    disabled={round === 20}
                    color="secondary"
                    variant="contained"
                    onClick={addRound}
                >NEXT ROUND</Button>
                <div className="h-1"/> 
                <Button
                    fullWidth
                    color="secondary"
                    variant="contained"
                    onClick={newGame}
                >NEW GAME</Button>
            </div>
        </>
    )
}

export default Rounds
