import React from 'react';

const SingleCategory = ({ category }) => {
    const { img, name } = category;
    return (
        <div class="card lg:w-44 w-36 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className='rounded-lg' src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default SingleCategory;