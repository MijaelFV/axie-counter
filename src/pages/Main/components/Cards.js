import React from 'react';
import { Button } from '@mui/material';
import numberSplit from '../../../helpers/numberSplit';

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
                className="w-48 h-48 bg-gray-700 border-4 border-blue-500 rounded-2xl flex flex-col items-center p-4 mb-3 sm:mr-3 overflow-hidden"
            >
                <p className="text-white text-3xl font-medium -mt-3">Cards</p>
                <div className="flex">
                    <div className="bg-gray-800 px-2 rounded my-2 mr-1">
                        <p className="text-white text-3xl">{numberSplit(card, 0)}</p>
                    </div>
                    <div className="bg-gray-800 px-2 rounded my-2">
                        <p className="text-white text-3xl">{numberSplit(card, 1)}</p>
                    </div>
                </div>
                <Button
                    fullWidth
                    color="secondary"
                    disabled={card === 24}
                    variant="contained"
                    onClick={addCard}
                >ADD</Button>
                <div className="h-1"/> 
                <Button
                    fullWidth
                    color="secondary"
                    disabled={card === 0}
                    variant="contained"
                    onClick={subCard}
                >SUB</Button>
            </div>
        </>
    );
};

export default Cards;
