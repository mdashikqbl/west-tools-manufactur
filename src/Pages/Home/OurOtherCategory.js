import React from 'react';
import SingleCategory from './SingleCategory';

const OurOtherCategory = () => {
    const categorys = [
        {
            id: 1,
            img: 'https://i.ibb.co/D81jJ34/294-2947510-ruler-and-pencil-comments-pencil-and-scale-icon.jpg',
            name: 'ACCESSORIES'
        },
        {
            id: 2,
            img: 'https://i.ibb.co/my4XQr0/png-transparent-three-black-gears-icons-computer-icons-gear-symbol-process-moonlight-miscellaneous-b.png',
            name: 'BRAKING TOOLS'
        },
        {
            id: 3,
            img: 'https://i.ibb.co/PcMsjnW/173-1736002-light-brain-incandescent-bulb-cartoon-icon-clipart-brain.jpg',
            name: 'CARPENTER TOOLS'
        },
        {
            id: 4,
            img: 'https://i.ibb.co/bQNLtbx/kissclipart-wrench-icon-constructions-icon-tools-icon-ed936884cd933a6b.png',
            name: 'HAND TOOLS'
        },
        {
            id: 5,
            img: 'https://i.ibb.co/jMK8qXQ/kisspng-pliers-computer-icons-tool-clip-art-5b0a35779970b2-4257128115273957036285.jpg',
            name: 'OPEN PLIERS'
        },
        {
            id: 6,
            img: 'https://i.ibb.co/2tqS8PB/imgbin-hand-saws-cutting-tool-handsaw-z809swsmk-T90-Adef5xn-B0-Sgpp.jpg',
            name: 'HANDSOW'
        }
    ]

    return (
        <div className='mt-28'>
            <h1 className=' text-center text-5xl font-bold text-secondary '>OUR OTHER CATEGORY</h1>
            <div className=' mt-10 grid grid-cols-2 md:grid-cols-3   lg:grid-cols-6 gap-5'>

                {
                    categorys.map(category => <SingleCategory key={category.id} category={category} ></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default OurOtherCategory;