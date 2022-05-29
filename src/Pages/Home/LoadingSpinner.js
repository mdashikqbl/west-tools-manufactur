import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='text-center'>

            <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

            </svg>
            {/* <p className='text-secondary text-center'> Processing...</p> */}
            <button className=" border-0 text-white px-16  btn btn-circle bg-primary loading">Loading... </button>
        </div>
    );
};

export default LoadingSpinner;