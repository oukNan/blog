import React from 'react';
import {auth, provider} from '../firebaseConfig';
import {signInWithPopup} from 'firebase/auth';
import {useNavigate} from "react-router-dom";


function Login({setIsAuth}) {
    let navigate = useNavigate();

const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        localStorage.setItem("isAuth", true);
        setIsAuth(true);
        navigate("/");
    });
};
  return (
    <div className='loginPAge'>
        <p>Sign in with Google</p>
        <button className='login-with-google-btn' onClick={signInWithGoogle}>Sign In</button>
    </div>
  );
 
};

export default Login;
