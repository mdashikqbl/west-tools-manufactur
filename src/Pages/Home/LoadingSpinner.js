import React from 'react';

const LoadingSpinner = () => {
    return (
        <div>

            <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">

            </svg>
            <p className='text-secondary text-center'> Processing...</p>
        </div>
    );
};

export default LoadingSpinner;