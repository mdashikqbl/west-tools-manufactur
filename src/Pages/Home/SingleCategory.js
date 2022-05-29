import React from 'react';

const SingleCategory = ({ category }) => {
    const { img, name } = category;
    return (
        <div className="card lg:w-44 w-36 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img className='rounded-lg' src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
            </div>
        </div>
    );
};

export default SingleCategory;