import Links from '../elements/Links'
import WeatherApp from '../elements/weatherApp/scriptGPT.js';

function Header() {
    return (
        <div className='flex absolute top-32 left-16  text-orange-400 sm:text-xl mx-0 my-0
                      2xl:text-4xl'>
            Welcome to the Crappy Weather App!
        </div>
    )
}

function Content() {
    return (
     <div>

        <div className='text-orange-400 text-2xl flex absolute top-[900px] w-2/3 px-16 text-center leading-loose'>
            <p>
                This page is the Crappy Weather app!  I designed this to utilize the google geocoding api to fetch a latitude and longitude from a given city and state.
                With that location info I call WeatherAPI to grab some weather data on that latitude and longitude.  React then displays that information with some descriptors and a nice 
                image of the current weather condition.  
            </p>
        </div>
        <div className='text-orange-400 text-2xl flex absolute top-[1200px] w-2/3 px-16 text-center leading-loose'>
            <p className='px-6]'>
                All you have to do is enter a city and state in the correct format and the app will fetch some sample weather information for you!
            </p>
        </div>

    </div>
    )
}

export default function WeatherPage() {
    return (
        <div className=" z-0 bg-top h-[1500px] w-[700px] bg-cover bg-[url('../public/outrun-long.png')]
                      2xl:h-[1450px] 2xl:w-full 
                      xl:h-[1200px] xl:w-auto
                      lg:h-[1600px] lg:w-full
                      md:h-[1600px] md:w-full">
                <div>
                    <Header />
                </div>
                <div className='absolute top-40 w-1/2 px-auto m-12 h-64'>
                    <WeatherApp />
                </div>
                <div className='absolute top-[600px] 2xl:top-[720px]'>
                    <Links />
                </div>
                <div>
                    <Content />
                </div>
                
                
        </div>
    );
}