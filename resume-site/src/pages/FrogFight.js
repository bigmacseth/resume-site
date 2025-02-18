import Links from '../elements/Links'
import React, { useState, useEffect } from 'react';


function Terminal() {

    return (
        <section>
        <div className='flex absolute top-[175px] backdrop-blur-xl h-1/2 w-full'> 
            <p className='text-orange-400 align-text-bottom'> 
                This is a huge test! 
                This is a huge test! 
                This is a huge test! 
                This is a huge test! 
                This is a huge test! 
                This is a huge test! 
                This is a huge test! 
                This is a huge test! 
                This is a huge test! 
                This is a huge test! 
            </p>
        </div>
    </section>
    );
}

function GuessGame() {
    const [playerId, setPlayerId] = useState(null);
    const [message, setMessage] = useState('');
    const [guess, setGuess] = useState('');

    const startGame = async () => {
        const response = await fetch('http://192.168.1.50:5555/api/start', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ player_id: 'player1' })
        });
        const data = await response.json();
        setPlayerId('player1');
        setMessage(data.message);
    };

    const makeGuess = async () => {
        const response = await fetch('http://192.168.1.50:5555/api/guess', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ player_id: 'player1', guess: guess })
        });
        const data = await response.json();
        setMessage(`Your guess is ${data.result}. Attempts: ${data.attempts}`);
    };

    return (
        <div className='flex absolute top-[50px] px-10 backdrop-blur-xl text-orange-600'>
            {!playerId && <button onClick={startGame}>Start Game</button>}
            {playerId && (
                <div>
                    <input
                        className='mx-6'
                        type="number"
                        value={guess}
                        onChange={(e) => setGuess(e.target.value)}
                    />
                    <button onClick={makeGuess} className='bg-purple-600 hover:bg-purple-800 px-6 text-black'>Submit Guess</button>
                </div>
            )}
            <p className='flex absolute top-[65px]'>{message}</p>
        </div>
    );
};

export default function FrogFight() {
    return (
        <div className=" z-0 bg-top h-[1500px] w-[700px] bg-cover bg-[url('../public/outrun-long.png')]
                      2xl:h-[1450px] 2xl:w-full 
                      xl:h-[1200px] xl:w-auto
                      lg:h-[1600px] lg:w-full
                      md:h-[1600px] md:w-full">
                <div>
                </div>
                <div className='absolute top-[600px] 2xl:top-[50px]'>
                    <Links />
                </div>
                <div className='bg-white'>
                <GuessGame />
                </div>
                <div>
                    <p className='flex absolute top-[800px] text-orange-600 text-center'>
                        This, is FrogFight.  It's a game that I made a long time ago in C#, now adapted and improved to run 
                        in Python through Flask.  
                    </p>
                    <p className='flex absolute top-[850px] text-orange-600 text-center'>
                        Its run through a Flask api that calls back and forth giving the server player input and handling 
                        game logic outside of the browser, even though a text game is pretty tame for today's machines!
                    </p>
                </div>
                
        </div>
    );
}