import Links from '../elements/Links'

function Resume() {
        const onButtonClick = () => {
            const pdfUrl = "./SethCradeurResume.docx";
            const link = document.createElement("a");
            link.href = pdfUrl;
            link.download = "SethCradeurResume.docx";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
    };

    return (
        <div className='text-orange-600 text-3xl py-5 px-5 my-0'>
            <button onClick={onButtonClick} className='bg-orange-600 text-black px-4 rounded-lg'>
                Download
            </button>
        </div>
    );
}

function Content() {
    return (
        <div>
            <h1 className='text-orange-600 text-2xl'>
                This is just a page to download my resume.
            </h1>
            <p className='text-orange-600 text-lg'>
                Please contact me if you have any questions or reccomendations!
            </p>
        </div>
    );
}

export default function ResumePage() {
    return (
        <div className=" z-0 bg-top h-[1500px] w-[700px] bg-cover bg-[url('../public/outrun-long.png')]
                      2xl:h-[1450px] 2xl:w-full 
                      xl:h-[1200px] xl:w-auto
                      lg:h-[1600px] lg:w-full
                      md:h-[1600px] md:w-full">
            <div className='absolute top-[600px] 2xl:top-[720px]'>
                
                <div>
                    <Links />
                </div>
                
            </div>
            <div className='absolute top-32 left-12'>
                <Resume />
            </div>
            <div className='absolute top-56 left-16'>
                <Content />
            </div>
        </div>
    );
}