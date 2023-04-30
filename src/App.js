import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {auth} from "./firebase";
import Home from "./components/Home/Home.js";
import Login from "./components/LoginPage/Login.js";
import SignIn from "./components/SigninPage/signin.js";
import Search from "./components/Search/Search.js";

const App = () => {
    
    return (
        <div className="">
            <Router>
                <Routes>
                    <Route path ="/" element = {<Home/>}></Route>
                    <Route path ="/search" element = {<Search/>}></Route>
                    <Route path ="/login" element = {<Login/>} ></Route>
                    <Route path ="/signin" element = {<SignIn/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}
export default App;