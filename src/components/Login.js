import { useState } from "react";
import { NETFLIX_BG } from "../utils/constants";
import Header from "./Header";


const Login = () => {
    const [isSignIn, SetSignIn] = useState(true);
    const ToggleSignOn = ()=>{
        SetSignIn(!isSignIn);
    }
    return (
        <div>
            <Header/>
            <div className="absolute">
                <img  alt="Netflix_BG" src={NETFLIX_BG}/>
            </div>
            <form className="w-4/12 mx-auto p-12 bg-black absolute right-0 left-0 my-28 text-white rounded-md bg-opacity-90">
                <h1 className="font-bold text-3xl py-5">{isSignIn ? "Sign In" : "Sign up"}</h1>
                <input type="text" className="w-full p-4 my-4 border-white bg-gray-900 rounded-md" placeholder="Email or phone number"/>
                {!isSignIn && <input type="text" className="w-full p-4 my-4 border-white bg-gray-900 rounded-md" placeholder="Name"/>}
                <input type="password" className="w-full p-4 my-4  bg-gray-900 rounded-md" placeholder="Password"/>
                <button className="bg-red-700 p-3 my-6 w-full rounded-md" >{isSignIn ? "Sign In" : "Sign up"}</button>
                {isSignIn ? 
                (<p><span className="font-thin">New to Netflix?</span> <span className="cursor-pointer" onClick={ToggleSignOn}>Sign up now.</span></p>):
                (<p><span className="font-thin">Already registered.</span> <span className="cursor-pointer" onClick={ToggleSignOn}>Click to sign in.</span></p>)}
            </form>
        </div>
    )
}
export default Login;
