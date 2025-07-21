import Links from '../elements/Links'
import React, { useState, useEffect } from 'react';

function FrogGame() {

    


    return (
        <div className='p-16 '>
            <div className='py-3 bg-'>
                <p>test test test test test test test test </p>
            </div>
            <div>
                <input className='px-3 rounded-lg'></input><button className='px-3 ml-3 bg-slate-400 rounded-lg'>Send</button>
            </div>
        </div>
    );

}


export default function FrogFight() {
    return (
        <div className=" z-0 bg-top h-[1500px] w-[700px] bg-cover bg-[url('../public/outrun-long.png')]
                      2xl:h-[1450px] 2xl:w-full 
                      xl:h-[1200px] xl:w-auto
                      lg:h-[1600px] lg:w-full
                      md:h-[1600px] md:w-full">
                <div>
                    <FrogGame />
                </div>
                <div className='absolute top-[600px] 2xl:top-[720px]'>
                    <Links />
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