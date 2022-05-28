import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tool = ({ sixtool }) => {
    const navigate = useNavigate();

    const { _id, img, name, descripation, minimumOrderQuantity, price, availableQuantity } = sixtool;
    const handleNavigate = () => {
        navigate(`/tools/${_id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-2xl">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>Price:{price}</p>
                <p>MinimumOrderQuantity:{minimumOrderQuantity}</p>
                <p>availableQuantity:{availableQuantity}</p>
                <p>{descripation}</p>
                <div class="card-actions">
                    <button onClick={() => handleNavigate(_id)} class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Tool;