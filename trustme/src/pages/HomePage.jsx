import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(){
    return(
        <div className="w-screen h-screen flex justify-center items-center flex-col">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/signup'><button>Signgin</button></Link>
        </div>
    )
}