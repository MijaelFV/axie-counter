import React from 'react';
import { Button } from '@mui/material';

function Cards({card, setCard}) {

    function addCard() {
        setCard(prevState => prevState + 1);
      };
    
    function subCard() {
        setCard(prevState => prevState - 1);
    };

    return (
        <>
            <p className="text-gray-900 text-3xl mb-2 mt-9">Cards {card}</p>
            <div className="flex">
            <Button
                variant="contained"
                onClick={addCard}
            >ADD</Button>
            <div className="w-1"/> 
            <Button
                disabled={card === 0}
                variant="contained"
                onClick={subCard}
            >SUB</Button>
            </div>
        </>
    );
};

export default Cards;
