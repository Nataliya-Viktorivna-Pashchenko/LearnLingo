import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

export const SingIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setEmail('');
                setPassword('');
                
            })
        .catch((error) => {
                console.log(error);
            setError('Sorry, could not find your account');
            // <p>`${email}`</p>
        })
}
    return (
        <div>
        <form onSubmit={login}>
            <h2>Log In</h2>
                                
                <input
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email" />
                
                <input
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password" />
                
                <button>Log In</button>
                {error ? <p>{ error }</p> : ''}
        </form>
        
        </div>
    )
}