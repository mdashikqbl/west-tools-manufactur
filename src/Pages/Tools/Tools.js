import React from 'react';
import useTools from '../../Hooks/UseTools';
import Tool from './Tool';


const Tools = () => {
    const [tools, setTools] = useTools([]);
    const sixTools = tools.slice(0, 6);

    return (
        <div className='mt-24'>
            <h1 className='mt-12 uppercase text-center text-secondary text-5xl font-bold'> electric tools </h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5 gap-7'>
                {
                    sixTools.map(sixtool => <Tool key={sixtool._id} sixtool={sixtool} ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;