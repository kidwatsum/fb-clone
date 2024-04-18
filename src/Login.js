import React from "react";
import "./Login.css"
import { Button } from "@mui/material";
import {auth,provider} from "./firebase";


function Login(){
    const signIn = () =>{
        //sign in...
        auth.signInWithPopup(provider).then(result =>{
            console.log(result);
        }).catch((error) =>alert(error.message));
    }


    return <div className="login">
        <div className="login_logo">
            <img 
            src="https://logowik.com/content/uploads/images/facebook-new-2023-icon9594.logowik.com.webp"
            alt="">
            </img>
            <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-Logo-2019.png"
            alt="">
            </img>
        </div>
        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
}

export default Login;