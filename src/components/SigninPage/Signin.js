import React, {useState} from "react";
import InputControl from "../InputControls.js/InputControl";
import { Link, useNavigate} from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
const SignIn = () => {
    const navigate = useNavigate("/");
    const [values, setValues] = useState({email:"", password:""});
    const [errMsg, setErrMsg] = useState("");
    const [disableButton, setDisableButton] = useState(false);

    const handleSubmission = (e) => {
        e.preventDefault();
        if(!values.email || !values.password){
            setErrMsg("Please fill all the fields");
            return;
        }
        createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (res)=>{
            console.log(res)
            setDisableButton(true);
            navigate("/");
        })
        .catch((err)=>{
            setErrMsg(err.message);
        })
        
    }
    return (
        <div className="flex justify-center">
            <div className="border-2 border rounded-lg m-20 p-10">
            <div className="font-mono mt-5 flex justify-center">
            <div className="">
                <h1 className="mt-6 text-center text-3xl text-gray-900">SignUp</h1>
                <InputControl label = "Email" type = "email" placeholder = "Enter Email"  onChange={(e)=>setValues(prev => ({...prev, email : e.target.value}))}/>
                <InputControl label = "Password" type = "password" placeholder = "Enter Password"  onChange={(e)=>setValues(prev => ({...prev, password : e.target.value}))}/>
                <div>
                    <p className="text-red-500">{errMsg}</p>
                    <button type = "submit" onClick={handleSubmission} disabled={disableButton} className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 mt-10">SignUp</button>
                    <div>
                        <p className="mt-2 text-center text-sm text-gray-600 mt-5"> 
                            Already have an account? <Link to="/login" className="text-purple-600">LogIn</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
            </div>
        </div>
    )
}
export default SignIn;