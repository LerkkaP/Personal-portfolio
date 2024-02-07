import { useState } from 'react';
import FlipToBackIcon from '@mui/icons-material/FlipToBack';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';

const Card = () => {
    const [flip, setFlip] = useState(false)

    const handleFlip = () => {
      setFlip(!flip)
    }
    return (
        <div className={`max-w-sm rounded overflow-hidden mx-5 ${flip ? 'shadow-white':'shadow-blue'}`}>
            <div className="group h-96 w-80">
                <div className={`relative h-full w-full rounded-xl card ${flip? 'cardFlip':''}`}>
                <div className="absolute inset-0 text-black front">
                <div className="flex min-h-full flex-col items-center justify-center ">
                    <h1 className="text-3xl font-bold text-white">Flappy Bird</h1>
                    <button className="bg-white text-black mt-20 rounded-sm py-1 px-4">
                                <a href="https://github.com/LerkkaP/flappy-bird">
                                    {'<Code/>'}
                                </a>
                    </button>
                    <button className='absolute bottom-2 right-2' onClick={handleFlip}><FlipToBackIcon color='primary'/></button>                
                </div>
                </div>
                <div className="flex items-center justify-center h-full text-slate-200 back">
                    <div className="px-6 py-8">
                            <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
                            <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pygame</span>
                            <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MatplotLib</span>
                            <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TinyDB</span>
                        </div>
                        <button className='absolute bottom-2 right-2' onClick={handleFlip}><FlipToFrontIcon /></button>                

                        <div className="mb-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
