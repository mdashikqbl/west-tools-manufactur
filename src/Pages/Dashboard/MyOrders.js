import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const handlepay = () => {
        navigate('/payment');
    }

    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/order?email=${user.email}`)
                .then(res => res.json())
                .then(data => setOrders(data));
        }

    }, [user])

    const handleCancel = id => {
        const proceed = window.confirm('are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(orders => orders._id !== id)
                    setOrders(remaining);
                })
        }
    }
    return (
        <div>

            <div className="overflow-x-auto">
                <table className="table w-10/12">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Tools Name</th>
                            <th>Price</th>
                            <th>CustomerName</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>phone</th>
                            <th>payment </th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                <tr key={order._id}>
                                    <th>{index + 1}</th>
                                    <td>{order.name}</td>
                                    <td>{order.price}</td>
                                    <td>{order.customerName}</td>
                                    <td>{order.email}</td>
                                    <td>{order.address}</td>
                                    <td>{order.phone}</td>
                                    <button onClick={handlepay} className="bg-green-500 border-0 btn btn-sm">pay</button>
                                    <button onClick={handleCancel} className=" bg-primary border-0 ml-4 btn btn-sm">cancel</button>

                                </tr>
                            )
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;