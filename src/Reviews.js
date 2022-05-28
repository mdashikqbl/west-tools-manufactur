import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            img: 'https://i.ibb.co/v3tVXKD/happy-businessman-isolated-handsome-man-260nw-609414131.jpg',
            name: 'json Roy',
            review: 'These short typically only one to two sentence overviews of how your product or service impacted a company helps give your brand credibility. With quote testimonials, those impressive claims  making actually  because  backed  not you. '
        },
        {
            img: 'https://i.ibb.co/YkMrCLS/beautiful-businesswoman-portrait-260nw-124505092.jpg',
            name: 'maria gomeg',
            review: 'We list customer quotes as the easiest type of review to get because they involve very little effort for you and your customer. Because you’re in control of adding them to your website, all your customers experience in an email.'
        },
        {
            img: 'https://i.ibb.co/ssxhQ3K/Businessman-Transparent.png',
            name: 'jordan mack',
            review: 'Quotes also allow you to choose the great customer service stories, perspectives, or opinions that you think are most valuable. You can highlight your high-profile clients and who says you have to use the less-than-favorable reviews?'
        },
        {
            img: 'https://i.ibb.co/fd23qSd/young-beautiful-happy-businesswoman-sitting-260nw-165623561.jpg',
            name: 'alica rach',
            review: 'But that doesn’t mean you can’t do anything at all. These peer-to-peer review sites are often one of the first places a potential customer looks when considering a purchase, so ensuring you have some positive reviews on each is important. '
        }
    ]
    return (
        <div className='mt-28 '>
            <h1 className='text-center text-secondary text-4xl font-bold' >OUR CUSTOMERS REVIEWS</h1>

            <div className=' mt-12 grid grid-cols-1 lg:grid-cols-4 gap-5' >
                {
                    reviews.map(review =>

                        <div class="card w-80 bg-base-100 shadow-xl">
                            <div class="card-body">
                                <div class="avatar mx-auto">
                                    <div class="w-24 rounded-full">
                                        <img src={review.img} />
                                    </div>
                                </div>
                                <h2 class="card-title text-secondary mx-auto">{review.name}</h2>
                                <p className='text-center'>{review.review}</p>
                                <div class="card-actions justify-center">
                                    <div class="rating">
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Reviews;