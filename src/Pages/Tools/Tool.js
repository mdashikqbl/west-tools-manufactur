import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ sixtool }) => {
    const navigate = useNavigate();

    const { _id, img, name, descripation, minimumOrderQuantity, price, availableQuantity } = sixtool;
    const handleNavigate = () => {
        navigate(`/tools/${_id}`);
    }
    return (
        <div className="card w-96 bg-base-100 shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Price:{price}</p>
                <p>MinimumOrderQuantity:{minimumOrderQuantity}</p>
                <p>availableQuantity:{availableQuantity}</p>
                <p>{descripation}</p>
                <div className="card-actions">
                    <button onClick={() => handleNavigate(_id)} className="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;