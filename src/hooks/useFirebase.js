import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";

initializeAuthentication()

const useFirebase = () => {
    const [user, setuser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setuser(result.user);
            })
            .finally(() => {
            setIsLoading(false)
        })
        
    }
    // Observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setuser(user)
            } else {
                setuser({})
            }
            setIsLoading(false);
        })
        return () => unsubscribed;
    },[])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => {
            setIsLoading(false)
        })
    }

    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFirebase;

// Video 04:05 / 12:20 Minute Second of