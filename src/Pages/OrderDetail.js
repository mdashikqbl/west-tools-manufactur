import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';



const OrderDetail = () => {
    const { toolsId } = useParams();
    const [tool, setTool] = useState({});
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch(`http://localhost:5000/tool/${toolsId}`)
            .then(res => res.json())
            .then(data => setTool(data))

    }, [])



    const handleOrder = event => {
        event.preventDefault();





    }
    const handleSubmit = () => {
        const number = 0;
        if (number < tool.minimumOrderQuantity) {
            alert('order minimum quantity!');
        }
        if (number < tool.availableQuantity) {
            alert('order Available Quantity!');
        }
    }

    return (
        <div>

            <div>

            </div>

            <div>
                <div class="hero min-h-screen bg-base-200">
                    <div class="hero-content flex-col lg:flex-row-reverse">

                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleOrder}  >
                                <div class="card-body">
                                    <h1 className='text-center text-primary text-3xl uppercase font-bold'>Purchase</h1>
                                    <h3 className='text-center text-secondary font-bold text-lg'>Quantity</h3>
                                    <div class="form-control w-40 mx-auto  ">
                                        <input name='number' type="number" class="input input-bordered" />
                                    </div>

                                    <div class="form-control mt-5 ">
                                        <input value={user.displayName} type="text" placeholder="Your Name" class="input input-bordered" />
                                    </div>
                                    <div class="form-control mt-3">
                                        <input value={user?.email} type="text" placeholder="email" class="input input-bordered" />
                                    </div>
                                    <div class="form-control mt-3">
                                        <input name='address' type="text" placeholder="Your Address" class="input input-bordered" /></div>
                                    <div class="form-control mt-3">
                                        <input name='phone' type="text" placeholder="phone number" class="input input-bordered" /></div>
                                    <div onClick={handleSubmit} class="form-control mt-6">
                                        <button class="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="text-center mr-28 lg:text-left">
                            <div class="card w-96 bg-base-100 shadow-xl">
                                <figure class="px-10 pt-10">
                                    <img src={tool.img} alt="Shoes" class="rounded-xl w-50 " />
                                </figure>
                                <div class="card-body items-center text-center">
                                    <h2 class="card-title">{tool.name}</h2>
                                    <p>price:{tool.price}</p>
                                    <p>minimumOrderQuantity:{tool.minimumOrderQuantity}</p>
                                    <p>availableQuantity:{tool.availableQuantity}</p>
                                    <p>{tool.descripation}</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default OrderDetail;