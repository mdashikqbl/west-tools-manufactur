import React from 'react';

const AddReview = () => {
    return (
        <div>
            <form  >
                {/* onSubmit={handleOrder}  */}
                <div className="card-body">
                    <h1 className='text-center text-primary text-3xl uppercase font-bold'>Purchase</h1>
                    <h3 className='text-center text-secondary font-bold text-lg'>Quantity</h3>
                    <div className="form-control w-40 mx-auto  ">
                        <input name='quantity' type="number" className="input input-bordered" />
                        {/* ref={quantityRef} */}
                    </div>

                    <div className="form-control mt-5 ">
                        <input type="text" placeholder="Your Name" className="input input-bordered" />
                        {/* value={user.displayName} */}
                    </div>
                    <div className="form-control mt-3">
                        <input type="text" placeholder="email" className="input input-bordered" />
                        {/* value={user?.email} */}
                    </div>
                    <div className="form-control mt-3">
                        <input name='address' type="text" placeholder="Your Address" className="input input-bordered" /></div>
                    <div className="form-control mt-3">
                        <input name='phone' type="text" placeholder="phone number" className="input input-bordered" /></div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                        {/* disabled={tool.minimumOrderQuantity < num} */}
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AddReview;