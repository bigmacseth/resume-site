import Links from '../elements/Links'
import { useState } from "react";
import axios from "axios";

axios.defaults.headers.post['Access-Conrol-Allow-Origin'] = 'Allow'

function Header() {
    return (
        <div className='flex absolute top-32 left-16  text-orange-400 sm:text-xl my-0
        2xl:text-4xl'>
            <h1 className='flex flex-auto'></h1>
        </div>
    );
}

const AddNote = () => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const saveNote = async () => {
        try {
            const response = await fetch("http://127.0.0.1:1221/add_note", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({title, content})
            });

            if (!response.ok) {
                throw new Error('HTTP error! Status: ${response.status}');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error saving note:", error);
        }
};

    return (
        <div className='text-orange-600 flex flex-col w-1/2
        '>
            <h2 className='py-1 px-1 mx-4 text-3xl'>Add Note</h2>
            <input className='w-1/3 my-2 py-1 px-2 mx-4' type='text' placeholder='Title' onChange={(e) => setTitle(e.target.value)} />
            <textarea className='my-2 py-1 px-2 mx-4 h-64' placeholder='Content' onChange={(e) => setContent(e.target.value)}></textarea>
            <button className='bg-orange-800 py-1 p-2 mx-4 w-32 h-12' onClick={saveNote}>Save</button>
        </div>
    );
}

const ShowNotes =() => {
    const getNotes = async () => {
        try {
            const response = await fetch("http://127.0.0.1:1221/notes", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (!response.ok) {
                throw new Error('HTTP error! Status: ${response.status}');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("Error getting notes:", error);
        }
    }

    return (
        <div className='text-orange-400'>
            <h1>This is a huge Test!</h1>
        </div>
    );
}

export default function Notes() {
    return (
        <div>
        
        <div className=" z-0 bg-top h-[1500px] w-[700px] bg-cover bg-[url('../public/outrun-long.png')]
                      2xl:h-[1450px] 2xl:w-full 
                      xl:h-[1200px] xl:w-auto
                      lg:h-[1600px] lg:w-full
                      md:h-[1600px] md:w-full">
                <div>
                    <Header />
                </div>

                <div className='top-[600px] 2xl:top-[720px]'>
                    <Links />
                </div>
                <div>
                    <AddNote />
                </div>
                <div>
                    <ShowNotes />
                </div>


        </div>

            
        </div>
    );
}