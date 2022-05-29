import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SocialLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className='text-red-600'>Error: {error.message}</p>
        </div>

    }
    if (user) {
        navigate('/')
    }
    return (
        <div>
            <div className=" flex flex-col mx-auto w-4/5 border-opacity-20">
                <div className="divider">OR</div>
            </div>
            {errorElement}
            <div className=''>
                <div className='text-center mt-4 '>

                    <button onClick={() => signInWithGoogle()} className="btn btn-xs sm:btn-sm md:btn-md lg:btn-xl bg-primary text-w  border-0 hover:btn-secondary text-white"><img className='w-7' src="https://i.ibb.co/6YJNJwr/google-1.png" alt="" /> <p className='ml-4'>Continue With Google</p></button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;