import React, {useEffect, useState} from "react";
import {auth} from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import Login from "../LoginPage/Login";
import Search from "../Search/Search";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [uid, setUid] = useState(false);
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(true)
            } else {
                setUid(false)
            }
          });
         
    }, [])
    const handleLogOut = () => {
        signOut(auth).then(() => navigate("/login"));
    };

    return (
        <div>
            <div>{uid?
                (<div>
                <button onClick={handleLogOut} className="rounded-none bg-black text-white px-3 justify-left">LogOut</button>
                <Search/>
                </div>)
            :(
            <Login/>
                
            )}</div>
        </div>
    )
}

export default Home;