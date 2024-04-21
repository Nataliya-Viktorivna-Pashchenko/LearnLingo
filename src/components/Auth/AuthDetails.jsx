import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../../firebase";

export const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const currentUser = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            };
        });
        return () => {
            currentUser()
        }
    }, []
      
    );

    const logOut = () => {
        signOut(auth)
            .then(() => console.log('success'))
            .catch((error) = console.log(error))
    }
    return (
        <div>
            {authUser ?
                (<div>
                    <p>`Singed in as ${authUser.email} `</p>
                    <button onClick={logOut}>Log Out</button>
                </div>) : (
                    <p>Singed Out</p>
            )}
        </div>
    )
}