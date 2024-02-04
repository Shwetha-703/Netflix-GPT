import { useRef, useState } from "react";
import { NETFLIX_BG, NETFLIX_USER } from "../utils/constants";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
    const [isSignIn, SetSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();
    const mail = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const ToggleSignOn = ()=>{
        SetSignIn(!isSignIn);
    }

    const handleLogin = () =>{
        const validationRes = checkValidData(mail.current.value, password.current.value, name.current===null? null : name.current.value);
        setErrorMessage(validationRes);
        
        if(validationRes!==null) return;
        if(!isSignIn){
            createUserWithEmailAndPassword(auth, mail.current.value, password.current.value)
            .then((userCredential)=>{
                //Signup
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value, photoURL: NETFLIX_USER
                  }).then(() => {
                    // Profile updated!
                    const {uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                  }).catch((error) => {
                    // An error occurred
                    setErrorMessage(error.errorMessage);
                  });
                
            })
            .catch((error)=>{
                const errorCode = error.errorCode;
                const errorMessage = error.errorMessage;
                setErrorMessage(errorCode + "-"+ errorMessage);
            });
        }
        else{
            signInWithEmailAndPassword(auth, mail.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                //const user = userCredential.user;
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-"+ errorMessage);
              });
        }
    }

    return (
        <div>
            <Header/>
            <div className="absolute">
                <img  alt="Netflix_BG" src={NETFLIX_BG}/>
            </div>
            <form onSubmit={(e)=>e.preventDefault()} className="w-4/12 mx-auto p-12 bg-black absolute right-0 left-0 my-28 text-white rounded-md bg-opacity-90">
                <h1 className="font-bold text-3xl py-5">{isSignIn ? "Sign In" : "Sign up"}</h1>
                <input ref={mail} type="text" className="w-full p-4 my-4 border-white bg-gray-900 rounded-md" placeholder="Email or phone number"/>
                {!isSignIn && <input ref={name} type="text" className="w-full p-4 my-4 border-white bg-gray-900 rounded-md" placeholder="Name"/>}
                <input ref={password} type="password" className="w-full p-4 my-4  bg-gray-900 rounded-md" placeholder="Password"/>
                <p className="text-red-700">{errorMessage}</p>
                <button className="bg-red-700 p-3 my-6 w-full rounded-md" onClick={handleLogin}>
                    {isSignIn ? "Sign In" : "Sign up"}
                </button>
                {isSignIn ? 
                (<p><span className="font-thin">New to Netflix?</span> <span className="cursor-pointer" onClick={ToggleSignOn}>Sign up now.</span></p>):
                (<p><span className="font-thin">Already registered?</span> <span className="cursor-pointer" onClick={ToggleSignOn}>Click to sign in.</span></p>)}
            </form>
        </div>
    )
}
export default Login;
