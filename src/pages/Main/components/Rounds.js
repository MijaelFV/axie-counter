import { Button } from '@mui/material';
import React from 'react'
import numberSplit from '../../../helpers/numberSplit';
import WoodTexture from "../../../assets/wood.jpg";

function Rounds({setEnergy, round, setRound, setCard}) {
    function addRound() {
        setRound(prevState => prevState + 1)
        setEnergy(prevState => {
            const _newValue = prevState + 2;
            return _newValue > 10 ? 10 : _newValue;
        });
        setCard(prevState => {
            const _newValue = prevState + 3;
            return _newValue > 14 ? 14 : _newValue;
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
                style={{  
                    backgroundImage: 'url(' + WoodTexture + ')',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    borderColor: '#733e16'
                }}
                className="w-48 h-32 border-4 rounded-2xl flex flex-col items-center p-4 mb-3 sm:mr-3 overflow-hidden"
            >
                <p className="text-white text-2xl font-medium -mt-4">Round</p>
                <div className="flex">
                    <div className="bg-yellow-500 border-2 px-2 rounded mb-2 mr-1">
                        <p className="text-white font-medium text-3xl">{numberSplit(round, 0)}</p>
                    </div>
                    <div className="bg-yellow-500 border-2 px-2 rounded mb-2">
                        <p className="text-white font-medium text-3xl">{numberSplit(round, 1)}</p>
                    </div>
                </div>
                <div className="flex">
                    <Button
                        fullWidth
                        disabled={round === 20}
                        color="secondary"
                        variant="contained"
                        onClick={addRound}
                    >NEXT</Button>
                    <div className="w-2"/> 
                    <Button
                        fullWidth
                        color="secondary"
                        variant="contained"
                        onClick={newGame}
                    >RESET</Button>
                </div>
            </div>
        </>
    )
}

export default Rounds
