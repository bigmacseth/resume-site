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
        <h1>Welcome to big-mac.net, <Link to='/resume' className='hover:text-purple-700 hover:underline'>please hire me.</Link></h1>
      </div>
    );
  }
  
  function MainParagraph() {
    return (
      <div className='backdrop-blur-lg text-orange-400
                      flex flex-col mx-12 px-auto pb-16 pt-12 w-3/5 h-auto'>
            <h1 className='mx-10 mt-10 h-auto text-xl 2xl:text-3xl '>
              New website looking good right!?
            </h1>
            <p className='mx-10 mt-10 h-auto text-md 2xl:text-xl '>
              I made this using React and Tailwind to manage my CSS. It's very intimidating. It uses a lot of Javascript that I'm just not very
              familiar with right now.
            </p>
  
            <p className='mx-10 mt-10 h-auto text-md 2xl:text-xl '>
              I'm trying to fill out this whole page with nonsense. I also made all the graphics for this, I've got a couple background variations that I can use. This is using the long one.
            </p>
  
            <p className='mx-10 mt-10 h-auto text-md 2xl:text-xl '>
              This is running on a home-built server located in my apartment. I'm using Caddy and Cloudflare to make it happen.
            </p>
  
            <p className='mx-10 mt-10 h-auto text-md 2xl:text-xl '>
              Try hovering over the link icons. The animations were suprisingly easy to make. Also see if you can spot the jank ass line I had to make to stitch the purple background together.
            </p>
  
      </div>
    );
  }
  
  
  export default function HomePage() {
    return (
      <div className=" z-0 bg-top h-[1500px] w-[700px] bg-cover bg-[url('../public/outrun-long.png')]
                      2xl:h-[1450px] 2xl:w-full 
                      xl:h-[1200px] xl:w-auto
                      lg:h-[1600px] lg:w-full
                      md:h-[1600px] md:w-full">
          <div> 
            <div><Header /></div>
            <div className='absolute top-[600px] 2xl:top-[720px]'>
              <div>
                <Links className='relative'/>
              </div>
              <div>
                <MainParagraph className=''/>
              </div>  
            </div>
        </div>     
      </div>
    );
  }