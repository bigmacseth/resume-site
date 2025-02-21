import React from 'react';
import Links from '../elements/Links';
import { Link } from "react-router-dom";
import { TiWeatherCloudy } from "react-icons/ti";
import { GiFrogPrince } from 'react-icons/gi';
import { GrNotes } from "react-icons/gr";
import { IoIosChatbubbles } from "react-icons/io";
import Notes from './Notes';

function Header() {
    return (
        <div className='flex absolute top-32 left-16  text-orange-400 sm:text-xl my-0
                      2xl:text-4xl'>
            What I had to do to make this website happen!
        </div>
    )
}
 
function Content() {
    return (
        <div className='flex flex-row gap-x-10 text-orange-400 text-5xl
        mx-12 px-auto pb-16 pt-12 w-3/5 h-auto text-center'>
            <i className= 'flex flex-col px-24 backdrop-blur-lg'>

                Front-End

                <p className='text-sm py-8 w-60'>
                    Using React and Tailwind to make this lovely website.
                </p>
                <p className='text-sm py-8 my-1'>
                    I've also used plenty of native HTML5 and CSS.
                </p>
                <p className='text-sm py-8 my-1'>
                    I've made custom art with Inkscape
                </p>

            </i>
            <i className='flex flex-col px-24 backdrop-blur-lg'>

                Networking

                <p className='text-sm py-8 my-1'>
                    Using Caddy as a file server, and reverse-proxy.
                </p>
                <p className='text-sm py-8 my-1'>
                    Setting up DNS configs in Cloudflare, and DNS in my home network.
                </p>
                <p className='text-sm py-8 my-1'>
                    Protecting my IP address from attackers with WAF rules in Cloudflare.
                </p>



            </i>
            
            <i className='flex flex-col px-24 backdrop-blur-lg'>

                Admin

                <p className='text-sm py-8 w-60'>
                   This is running on my own Linux server at my apartment.
                </p>
                <p className='text-sm py-8 w-60'>
                    Securing the server compeletly from outside attacks.
                </p>
                <p className='text-sm py-8 w-60'>
                    I have my own media site that I run with my family as users.
                </p>
                <p className='text-sm py-8 w-60'>
                    
                </p>
            </i>
        </div>
    );
}

const WeatherIcon = ({icon, text, link}) => (
    <div className='project-icon group'>
          <span class="linkbar-tooltip group-hover:scale-100 ">
            {text}
          </span>
    
          <span>
            <Link to={link}>{icon}</Link>
          </span>
        </div>   
);

const WeatherLink = () => {
    return (
        <div className='z-60 bg-transparent h-auto ml-0
                        2xl:w-2/3 2xl:mx-12
                        xl:w-1/3 xl:mx-12 py-20'>
            <div>
                <WeatherIcon icon={<TiWeatherCloudy size="36" />} text={'CrappyWeatherApp'} link={'/weather'} />
            </div>
                        
        </div>
    )
}

const FrogFightIcon = ({icon, text, link}) => (
    <div className='project-icon group'>
        <span class="linkbar-tooltip group-hover:scale-100">
            {text}
        </span>

        <span>
            <Link to={link}>{icon}</Link>
        </span>
    </div>
);

const FrogFightLink = () => {
    return (
        <div className='z-60 bg-transparent h-auto ml-0
                        2xl:w-2/3 2xl:mx-12
                        xl:w-1/3 xl:mx-12 py-20'>

            <div>
                <FrogFightIcon icon={<GiFrogPrince size="36" />} text={'FrogFight'} link={'/frogfight'} />
            </div>

        </div>
    );
}

const NotesLink = () => {
    return (
        <div className='z-60 bg-transparent h-auto ml-0
                        2xl:w-2/3 2xl:mx-12
                        xl:w-1/3 xl:mx-12 py-20'>
            <div>
                <FrogFightIcon icon={<GrNotes size="36" />} text={'EncryptedNotes'} link={'/notes'} />
            </div>
        </div>
    )
}

const ChatLink = () => {  
    return (
    <div>
            <div className='z-60 bg-transparent h-auto ml-0
                        2xl:w-2/3 2xl:mx-12
                        xl:w-1/3 xl:mx-12 py-20'>
                <FrogFightIcon icon={ <IoIosChatbubbles /> } text={'LiveChat'} link={'/chat'} />
            </div>
        </div> 
    );
    
}


export default function ProjectPage() {
    return (
        <div className=" z-0 bg-top w-full 2xl:h-[2050px] sm:h-[1800px]  bg-cover bg-[url('../public/outrun-long.png')]">
            <div>
            <div><Header /></div>
                <div className='absolute top-[600px] 2xl:top-[720px]'>
                    <div><Links /></div>

                    <div><Content /></div>

                    <div>
                        <h2 className='gap-x-10 text-orange-400 text-5xl mx-12 px-auto pb-16 pt-12 w-3/5 h-auto text-center'>
                        Sample Projects
                        </h2>
                        <p className='text-orange-400 text-xl mx-12 px-auto py-8'>
                            Here are some projects I've been working on to demonstrate the skills I've acquired over the last two years.
                        </p>
                    </div>

                    <div className='flex flex-row'>
                        <i className='flex flex-col'>
                            <WeatherLink />
                            <FrogFightLink />
                        </i>
                        <i className='flex flex-col'>
                            <NotesLink />
                            <ChatLink />
                        </i>
                    </div>
                    
            </div>
                
                
            </div>
            
        </div>
        
    );
}