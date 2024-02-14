import { useState } from 'react';
import { Project } from '../types';

const Card = (props: Project) => {
    const [flip, setFlip] = useState(false)

    const handleFlip = () => {
      setFlip(!flip)
    }
    return (
        <div onClick={handleFlip} className={`hover:scale-105 transition duration-75 cursor-pointer max-w-sm rounded overflow-hidden mx-5 ${flip ? 'shadow-white':'shadow-blue'}`}>
            <div className="group h-96 w-80 ">
                <div className={`relative h-full w-full rounded-xl card ${flip? 'cardFlip':''}`}>
                <div className="absolute inset-0 text-black front">
                <div className="flex min-h-full flex-col items-center justify-center ">
                    <h1 className="text-3xl font-bold text-white">{props.title}</h1>
                </div>
                </div>
                <div className="flex items-center justify-center h-full text-slate-200 back">
                    <div className="px-6 py-8">
                        {props.stack.map(tech =>
                            <span  className="inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                        )}
                        
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
