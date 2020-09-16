import React, { useState } from 'react'
import './Login.css'
import { auth } from './firebase';
import { Link, useHistory } from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();


        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {

                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                console.log(auth);
                if (auth) {

                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to="/">
                <img
                    className='login_logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form action="mailto:prashantsingh3553@gmail.com">
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                        onChange={event => setEmail(event.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={event => setPassword(event.target.value)} />

                    <button
                        className='login_signinButton'
                        type='submit'
                        onClick={signIn}
                    >
                        Sign In
                    </button>
                </form>

                <p>
                    By signing-in you agree to Amazon Clone's Conditions of Use & Sale. Please see our Privacy notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>


                <button
                    className='login_registerButton'
                    onClick={register}
                >
                    Create your Amazon Account
                </button>
            </div>
        </div>
    )
}

export default Login
