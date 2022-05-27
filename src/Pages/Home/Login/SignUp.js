import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateRrror] = useUpdateProfile(auth);

    if (user) {
        navigate('/');
    }

    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');


    const handleSignUp = async event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: event.name });

    }
    return (
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">

                <div class="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <form onSubmit={handleSignUp} >
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type="text" ref={nameRef} placeholder="Your Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} placeholder="email" class="input input-bordered" required />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="password" ref={passwordRef} placeholder="password" class="input input-bordered" required />
                            </div>
                            <div class="form-control mt-6">
                                <button onClick={() => createUserWithEmailAndPassword()} class="btn btn-primary">Sign Up</button>
                                <Link className='text-sm mt-4 text-center' to={'/login'}>Already have a Account?
                                    <span className='text-secondary font-bold ml-2'>Login</span> </Link>
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;