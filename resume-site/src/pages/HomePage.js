import Links from '../elements/Links'
import { Link } from 'react-router-dom'

function Header() {
    return (
      <div className='absolute top-32 left-16  text-orange-400 mx-full my-0
                      2xl:text-4xl
                      xl:text-2xl
                      lg:text-xl
                      md:text-lg md:top-20
                      sm:text-base'>
        <h1>Hello! My name is Seth Cradeur, <Link to='https://www.linkedin.com/in/seth-cradeur-5580662b2/' className='hover:text-purple-700 hover:underline text-purple-600'>please hire me.</Link></h1>
      </div>
    );
  }
  
  function MainParagraph() {
    return (
      <div className='backdrop-blur-lg text-orange-400
                      flex flex-col mx-12 px-auto pb-16 pt-12 w-3/5 h-auto'>
            <h1 className='mx-10 mt-10 h-auto text-xl 2xl:text-3xl '>
            I am a self-taught developer trying to break into software management.
            </h1>
            <p className='mx-10 mt-10 h-auto text-md 2xl:text-xl '>
            Starting with C# in 2023 my journey into software development has been nothing but fun since the very beginning.  I learned the basics of coding from Microsoft's Learn program and from there I have not stopped
            trying to improve.
            </p>
  
            <p className='mx-10 mt-10 h-auto text-md 2xl:text-xl '>
            I've also cultivated a love of open-source software and systems administration when I began self-hosting.  This site is fully hosted on my own server, along with a couple of super useful apps that my family and I use almost
            daily.
            </p>
  
            <p className='mx-10 mt-10 h-auto text-md 2xl:text-xl '>
            Most of the graphics on the site were made by me in Inkscape, an open-source alternative to photoshop. 
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