import React from 'react';

const BusinessSummary = () => {
    const business = [
        {
            id: 1,
            img: 'https://i.ibb.co/LQCmsM8/istockphoto-939238878-612x612.jpg',
            number: '120M+',
            name: 'Annual revenue'
        },
        {
            id: 2,
            img: 'https://i.ibb.co/4ZP18gM/png-transparent-computer-icons-user-court-of-public-opinion-computer-monochrome-black.png',
            number: '100+',
            name: 'Customers'
        },
        {
            id: 3,
            img: 'https://i.ibb.co/594WyW9/png-transparent-three-black-gears-icons-computer-icons-gear-symbol-process-moonlight-miscellaneous-b.png',
            number: '50+',
            name: 'Tools'
        },
        {
            id: 4,
            img: 'https://i.ibb.co/VS1FND0/customer-satisfaction-icon-customer-satisfaction-icon-11553436443xikgck2oe3.png',
            number: '33K+',
            name: 'Reviews'
        }
    ]

    return (

        <div className='mt-24'>
            <h1 className=' text-center text-5xl text-secondary font-bold '>MILLIONS BUSINESS TRUST US</h1>
            <h3 className='mt-5 text-center text-secondary font-bold'> TRY TO UNDERSTAND USERS EXPECTATION </h3>
            <div className='mt-10 grid grid-cols-2 lg:grid-cols-4 bg-gray-400'>
                {
                    business.map(summery =>
                        <div key={summery.id} class="card w-44 ">
                            <figure class="px-10 pt-10">
                                <img src={summery.img} alt="Shoes" class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title text-4xl text-secondary">{summery.number}</h2>
                                <p className='text-secondary'>{summery.name}</p>

                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    );
};

export default BusinessSummary;