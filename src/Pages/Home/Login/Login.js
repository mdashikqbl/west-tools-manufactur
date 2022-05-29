import React, { useRef } from 'react';
import { useAuthState, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const [user1] = useAuthState(auth);
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;
    if (error) {

        errorElement = <div>
            <p className=' text-red-600 mt-3 mx-5'>Error: {error.message}</p>
        </div>

    }


    if (user) {
        navigate(from, { replace: true });
    }



    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-80 max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" ref={passwordRef} placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a className="label-text-alt link no-underline ">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button onClick={() => signInWithEmailAndPassword()} className="btn btn-primary">Login</button>
                                {errorElement}
                                <Link className='text-sm mt-4 text-center' to={'/signup'}>Don't have a Account? <span className='text-secondary font-bold'>New Account</span> </Link>
                            </div>

                        </form>
                        <SocialLogin></SocialLogin>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;