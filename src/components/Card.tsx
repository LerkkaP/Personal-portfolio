import { useState } from 'react';
import FlipToBackIcon from '@mui/icons-material/FlipToBack';
import FlipToFrontIcon from '@mui/icons-material/FlipToFront';

const Card = () => {
    const [flip, setFlip] = useState(false)

    const handleFlip = () => {
      setFlip(!flip)
    }
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white mx-5">
            <div className="group h-96 w-80 [perspective:1000px]">
                <div className={`relative h-full w-full rounded-xl shadow-xl card ${flip? 'cardFlip':''}`}>
                <div className="absolute inset-0 text-black front">
                <div className="flex min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl font-bold">Flappy Bird</h1>
                    <button className="bg-red-500 text-white mt-20 rounded-sm py-1 px-4">
                                <a href="https://github.com/LerkkaP/flappy-bird">
                                    {'<Code/>'}
                                </a>
                    </button>
                    <button onClick={handleFlip}><FlipToBackIcon/></button>                

                </div>
                </div>
                <div className="absolute inset-0 h-full w-full bg-black/80 px-12 text-center text-slate-200 back">
                    <div className="px-6 py-8">
                            <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Python</span>
                            <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Pygame</span>
                            <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">MatplotLib</span>
                            <span className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">TinyDB</span>
                        </div>
                        <button onClick={handleFlip}><FlipToFrontIcon/></button>                

                        <div className="mb-4">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
