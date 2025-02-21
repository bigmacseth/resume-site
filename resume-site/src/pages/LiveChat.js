import { useEffect } from 'react';
import { useState } from 'react';
import Links from '../elements/Links';
import { Link, redirect, useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import { socket } from '../elements/socket';

function Header() {
    return (
        <div className='flex absolute top-32 left-16  text-orange-400 mx-full my-0
        2xl:text-4xl
        xl:text-2xl
        lg:text-xl
        md:text-lg md:top-20
        sm:text-base'>
            <h1>This is Live Chat!</h1>
        </div>
    );
}

function Info() {
    return (
        <div className='pt-48 pb-12 px-[65px] text-orange-600 text-xl'>
            <p className=''>
                A 2000's era chatroom that anyone can join and talk!
            </p>
        </div>
    );
}

function Description() {
    return (
        <div className='text-orange-600 text-2xl w-2/3 justify-items-center leading-loose px-16'>
            <p className='py-2'>
                So this is my version of an old-school chatroom that I made from using flask's SocketIO package.
            </p>
            <p className='py-2'>
                It utilizes websockets to handles message sending, room creation and joining, along with storing session data about previous messages. I had a ton of trouble hooking it all up though, in testing 
                the rooms would not connect correctly when the page transitioned into the 'chat room:' page.  The problem stemmed from having the socket creation on both pages and not as a seperate element.
            </p>
            <p className='py-2'>
                Session data is not permanent and will refresh after a page reload, as long as one person is in a room the room stays open and availible to join. 
            </p>
        </div>
    )
}

function ChatSignIn() {

    const [ name, setName ] = useState('');
    const [ room, setRoom ] = useState('');
    const navigate = useNavigate();

    const joinRoom = () => {
        if (room && name) {
            socket.emit("join_room", { name, room });
            navigate(`/room/${room}?name=${encodeURIComponent(name)}`);
            console.log("Joined room:", { name, room })
        }
    };

    const createRoom = () => {
        socket.emit('create_room');
        socket.on('room_created', (data) => {
            setRoom(data.room);
        });
    };

    return (
        <div className='text-orange-600 px-[65px]'>
            <div className='py-2'>
                <h1 className='pb-2'>Name:</h1> 
                <input 
                    className='w-64' 
                    name='name' 
                    placeholder='Pick a Name!'
                    value={name}
                    onChange={(e) => setName(e.target.value)}    
                />
            </div>
            <div className='py-2'>
                <input className='w-64' placeholder='Room Code' name='roomCode' onChange={(e) => setRoom(e.target.value)}></input>
            </div>
            <div className='py-2'>
                <button 
                className='bg-orange-950 py-1 px-2 text-center w-64' 
                name='join'
                onClick={joinRoom}    
            >Join a Room</button>

            </div>
            <div className='py-2'>
                <button className='bg-orange-950 py-1 px-2 text-center w-64' name='create' value={room} onClick={createRoom}>Create a Room</button>
            </div>
        </div>
    );
}

export default function LiveChat() {
    return (
        <div className=" z-0 bg-top h-[1500px] w-[700px] bg-cover bg-[url('../public/outrun-long.png')]
                      2xl:h-[1450px] 2xl:w-full 
                      xl:h-[1200px] xl:w-auto
                      lg:h-[1600px] lg:w-full
                      md:h-[1600px] md:w-full">
            <div>
                <div>
                    <Header />
                </div>
                <div>
                    <Info />
                </div>
                <div>
                    <ChatSignIn />
                </div>
                <div className='absolute top-[600px] 2xl:top-[720px]'>
                    <Links />
                </div>
                <div className=' absolute top-[900px] px-4 py-4 text-center'>
                    <Description />
                </div>
            </div>
            
        </div>
    );
}