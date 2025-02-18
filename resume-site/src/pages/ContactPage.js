import Links from '../elements/Links'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='flex absolute top-32 left-16  text-orange-400 mx-full my-0
                      2xl:text-4xl
                      xl:text-2xl
                      lg:text-xl
                      md:text-lg md:top-20
                      sm:text-base'>
            <h1>Contact Information</h1>
        </div>
       
    );
}

function Info() {
    return (
    <div className='py-52 px-[70px] text-orange-600 text-xl'>
        <p className='py-2'>
            (337) 476-6628
        </p>
        <p className='py-2'>
            bigmacseth@gmail.com
        </p>
        <p className='py-2'>
            <Link to='https://github.com/bigmacseth' className='hover:text-purple-600 hover:underline'>Github </Link>
        </p>
        <p className='py-2'>
            <Link to='https://linkedin.com/in/seth-cradeur-5580662b2' className='hover:text-purple-600 hover:underline'>LinkedIn</Link>
        </p>
    </div>
    );
}

export default function ContactPage() {
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
                <div className='absolute top-[600px] 2xl:top-[720px]'>
                    <Links />
                </div>
            </div>
            
        </div>
    );
}