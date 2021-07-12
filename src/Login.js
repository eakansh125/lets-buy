import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import auth from './firebase'

function Login() {

    const history=useHistory();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const login = event => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push('/');
        })
        .catch(e => alert(e.message))
    }

    const register = event => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            history.push('/');
        })
        .catch(e => alert(e.message))
    }
    return (
        <div className="login">
            <Link to="/">
                <img
                className="login__logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG28.png"
                alt=""
                />
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
                    <h5>Password</h5>
                    <input value={password} onChange={event => setPassword(event.target.value)} type="password"/>
                    <button type="submit" onClick={login} className="login__signIn">Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={register} className="login__register">Create your amazon account</button>
                
            </div>            
        </div>
        
    )
}

export default Login
