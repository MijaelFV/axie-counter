import { Button } from '@mui/material';
import React from 'react'
import numberSplit from '../../../helpers/numberSplit';
import WoodTexture from "../../../assets/wood.jpg";

function Energys({energy, setEnergy}) {
    function addEnergy() {
        setEnergy(prevState => prevState + 1)
    }
    
    function subEnergy() {
        setEnergy(prevState => prevState - 1)
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
                <p className="text-white text-2xl font-medium -mt-4">Energy</p>
                <div className="flex">
                    <div className="bg-yellow-500 border-2 px-2 rounded mb-2 mr-1">
                        <p className="text-white font-medium text-3xl">{numberSplit(energy, 0)}</p>
                    </div>
                    <div className="bg-yellow-500 border-2 px-2 rounded mb-2">
                        <p className="text-white font-medium text-3xl">{numberSplit(energy, 1)}</p>
                    </div>
                </div>
                <div className="flex">
                    <Button
                        fullWidth
                        color="secondary"
                        disabled={energy === 10}
                        variant="contained"
                        onClick={addEnergy}
                    >ADD</Button>
                    <div className="w-2"/> 
                    <Button
                        fullWidth
                        color="secondary"
                        disabled={energy === 0}
                        variant="contained"
                        onClick={subEnergy}
                    >SUB</Button>
                </div>
            </div>
        </>
    )
}

export default Energys
