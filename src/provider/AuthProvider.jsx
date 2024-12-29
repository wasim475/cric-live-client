import { createContext, useEffect, useState } from 'react';
export let AuthContex = createContext(null)
import {  GoogleAuthProvider, updateProfile , createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import app from '../firebase/firebase.config'
import { useLocation, useNavigate } from 'react-router';








const auth = getAuth(app);

// google and facebook 
const GoogleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    let [user , setUser] = useState(null)
    let [loading, setLoading]= useState(true)

    const location = useLocation()
    const Navigate = useNavigate()

   
 
// console.log(location.state)
  
  

    const googleLOgin= ()=>{
        signInWithPopup(auth, GoogleProvider)
        .then((result)=>{
            if(result.user){
                toast.success('Login Successfull.')
                Navigate(location?.state ? location.state : "/");
                // Navigate("/")
            }
        })
    }
    

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }

    },[])
    let authInfo = {
        user,
        loading,
        setLoading,
        googleLOgin,
        logOut,
    }
    return (
        <>
            <AuthContex.Provider value={authInfo}>
                {children}
            </AuthContex.Provider>
        
        </>
    );
};

export default AuthProvider;