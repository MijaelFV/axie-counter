import React from 'react';
import { Button } from '@mui/material';
import numberSplit from '../../../helpers/numberSplit';
import WoodTexture from "../../../assets/wood.jpg";


function Cards({card, setCard}) {

    function addCard() {
        setCard(prevState => prevState + 1);
      };
    
    function subCard() {
        setCard(prevState => prevState - 1);
    };

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
                className="w-48 h-32 border-4 rounded-2xl flex flex-col items-center p-4 overflow-hidden"
            >
                <p className="text-white text-2xl font-medium -mt-4">Cards</p>
                <div className="flex">
                    <div className="bg-yellow-500 border-2 px-2 rounded mb-2 mr-1">
                        <p className="text-white font-medium  text-3xl">{numberSplit(card, 0)}</p>
                    </div>
                    <div className="bg-yellow-500 border-2 px-2 rounded mb-2">
                        <p className="text-white font-medium text-3xl">{numberSplit(card, 1)}</p>
                    </div>
                </div>
                <div className="flex">
                    <Button
                        fullWidth
                        color="secondary"
                        disabled={card === 12}
                        variant="contained"
                        onClick={addCard}
                    >ADD</Button>
                    <div className="w-2"/> 
                    <Button
                        fullWidth
                        color="secondary"
                        disabled={card === 0}
                        variant="contained"
                        onClick={subCard}
                    >SUB</Button>
                </div>
            </div>
        </>
    );
};

export default Cards;
