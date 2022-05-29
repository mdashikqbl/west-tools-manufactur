import React, { useEffect, useState, useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../firebase.init';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";



const OrderDetail = () => {

    const { toolsId } = useParams();
    const [tool, setTool] = useState({});
    const [user] = useAuthState(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
        const order = {
            order: tool._id,
            name: tool.name,
            img: tool.img,
            descripation: tool.descripation,
            price: tool.price,
            customerName: user.displayName,
            email: user.email,
            address: data.address,
            phone: data.phone,
            quantity: data.quantity,
        }


        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast('Success')
                }


            })

    };


    useEffect(() => {
        fetch(`http://localhost:5000/tool/${toolsId}`)
            .then(res => res.json())
            .then(data => setTool(data))

    }, [])





    return (
        <div>

            <div>

            </div>

            <div>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-slate-400  ">
                            <h1 className='text-center mt-12 uppercase text-4xl font-bold text-primary'>Purchase</h1>
                            <h3 className='mt-4  text-center text-secondary text-xl font-bold  ' >Quantity</h3>

                            {/* !----------------------------! */}

                            <form className='text-center  h-96 mt-12 bg-slate-400 mx-auto' onSubmit={handleSubmit(onSubmit)}>

                                {/* lavel */}
                                <div class="form-control w-full max-w-xs mx-auto">

                                    <input

                                        {...register("quantity", {
                                            min: {
                                                value: tool.minimumOrderQuantity,
                                                message: 'Order minimum Quantity'
                                            },
                                            max: {
                                                value: tool.availableQuantity,
                                                message: 'Order AvailableQuantity'
                                            }

                                        })}
                                        placeholder='Quantity'
                                        className='text-center w-40 py-2 indent-3 rounded-lg' type="number" />

                                    <label class="label">
                                        {errors.quantity?.type === 'min' && <span class="label-text-alt">{errors.min?.message}</span>}
                                        {errors.quantity?.type === 'max' && <span class="label-text-alt">{errors.max?.message}</span>}


                                    </label>
                                </div>


                                <input value={user.displayName} className='w-80 mt-6  py-2 indent-3 rounded-lg  ' placeholder='User Name' {...register("Name")} />
                                <input value={user?.email} placeholder='User Email' className='w-80 mt-6 py-2 indent-3 rounded-lg ' {...register("email")} />
                                <input placeholder='User Address' className='w-80 mt-6 py-2 indent-3 rounded-lg ' {...register("address")} />
                                <br />

                                <input placeholder='User Phone' className='w-80 mt-6 py-2 indent-3 rounded-lg' type="number" {...register("phone")} />
                                <br />
                                <input className=' rounded-lg font-bold bg-primary w-40 py-1 text-white text-xl  mt-5 flex justify-center mx-auto border-2' type="submit" value='Order Booked' />
                            </form>

                            {/* <--------------------------------------------> */}
                        </div>
                        <div className="text-center mr-28 lg:text-left">
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img src={tool.img} alt="Shoes" className="rounded-xl w-50 " />
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title">{tool.name}</h2>
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