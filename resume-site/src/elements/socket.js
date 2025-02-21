import { io } from "socket.io-client";

const SOCKET_URL = "https://chat.big-mac.net/*"; // Change to your backend URL

export const socket = io(SOCKET_URL, {
    withCredentials: true, 
    autoConnect: true,
    
});

socket.on("connect", () => {
    console.log("Connected to WebSocket server with ID:", socket.id);
});

socket.on("disconnect", () => {
    console.log("Disconnected from WebSocket server.");
});
