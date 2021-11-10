import { Button } from '@mui/material';
import React from 'react'
import numberSplit from '../../../helpers/numberSplit';

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
                className="w-48 h-48 bg-gray-700 border-4 border-blue-500 rounded-2xl flex flex-col items-center p-4 mb-3 sm:mr-3 overflow-hidden"
            >
                <p className="text-white text-3xl font-medium -mt-3">Energy</p>
                <div className="flex">
                    <div className="bg-gray-800 px-2 rounded my-2 mr-1">
                        <p className="text-white text-3xl">{numberSplit(energy, 0)}</p>
                    </div>
                    <div className="bg-gray-800 px-2 rounded my-2">
                        <p className="text-white text-3xl">{numberSplit(energy, 1)}</p>
                    </div>
                </div>
                <Button
                    fullWidth
                    color="secondary"
                    disabled={energy === 10}
                    variant="contained"
                    onClick={addEnergy}
                >ADD</Button>
                <div className="h-1"/> 
                <Button
                    fullWidth
                    color="secondary"
                    disabled={energy === 0}
                    variant="contained"
                    onClick={subEnergy}
                >SUB</Button>
            </div>
        </>
    )
}

export default Energys
