import Links from '../elements/Links';
import { Link, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import io from "socket.io-client";
import { socket } from '../elements/socket';





function ChatBox() {

    const { room: initialRoom } = useParams();
    const [searchParams] = useSearchParams();
    const name = searchParams.get('name');

    const [ message, setMessage ] = useState('');
    const [ messages, setMessages ] = useState([]);
    const [ room, setRoom ] = useState(initialRoom);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    };

    useEffect(() => {
        if (room) {
            console.log('rejoining room:', room);
            socket.emit('join_room', { room });
        }
    }, [room]);

    useEffect(() => {
        socket.on("display_message", (data) => {
            console.log("Received message:", data);
            if (data.room === room) {
                setMessages((prev) => [...prev, data]);
            }
            else {
                console.log('problem with room!')
            }
        });

        return () => {
            socket.off("display_message");
        };
        
        }, [room]); 

    const sendMessage = () => {
        if (message) {
            console.log('Sending message:', { room, name, message });
            socket.emit("send_message", { room, name, message });
            setMessage(""); // Clear message input
        }
    };

    return (
            <div className="w-screen h-screen flex justify-center items-center backdrop-blur-xl">
                <div className="border-2 border-white bg-gray-800 rounded-lg w-2/3 h-2/3 py-4 px-4 flex flex-col">
                    
                    {/* Chat Room Header */}
                    <div className="text-center text-xl text-white font-bold py-2">
                        <h1>Chat Room: {room}</h1>
                    </div>
        
                    {/* Chat Messages (Scrollable) */}
                    <div className="flex-1 overflow-y-auto space-y-2 p-2 border border-gray-600 rounded-lg bg-gray-700">
                        {messages.length === 0 ? (  // 👈 Check if messages exist
                            <p className="text-gray-400">No messages yet...</p>
                        ) : (
                            messages.map((msg, index) => (
                                <div 
                                    key={index} 
                                    className={`p-2 max-w-[80%] rounded-lg 
                                        ${msg.name === name ? "bg-blue-500 text-white ml-auto" : "bg-gray-600 text-white"}`}
                                >
                                    <p className='text-white'>
                                        <strong className='font-bold'>{msg.name}:</strong> {msg.message}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
        
                    {/* Input & Send Button */}
                    <div className="flex mt-4">
                        <input 
                            placeholder="Type a Message!" 
                            className="px-4 py-2 w-full border border-gray-500 rounded-l-lg focus:outline-none"
                            value={message}
                            onKeyDown={handleKeyDown}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                        <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition"
                            onClick={sendMessage}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        );
}

export default function ChatRoom() {
    return (
        <div className=" z-0 bg-top h-[1500px] w-[700px] bg-cover bg-[url('../public/outrun-long.png')]
                      2xl:h-[1450px] 2xl:w-full 
                      xl:h-[1200px] xl:w-auto
                      lg:h-[1600px] lg:w-full
                      md:h-[1600px] md:w-full">
            <div>
                <div className='flex px-6 py-8 2xl:top-[720px]'>
                    <Links />
                </div>
                <div>
                    <ChatBox />
                </div>
            </div>
        </div>
    );
}