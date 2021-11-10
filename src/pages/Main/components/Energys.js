import { Button } from '@mui/material';
import React from 'react'

function Energys({energy, setEnergy}) {
    function addEnergy() {
        setEnergy(prevState => prevState + 1)
      }
    
    function subEnergy() {
        if (energy > 1) {
            setEnergy(prevState => prevState - 1)
        }
    }

    return (
        <>
            <p className="text-gray-900 text-3xl mb-2 mt-9">Energy {energy}</p>
            <div className="flex">
            <Button
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
        </>
    )
}

export default Energys
