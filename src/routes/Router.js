import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Task from "../pages/Task";
import TaskCreate from "../pages/TaskCreate";
import Signin from "../components/Log/Signin";
import Signup from "../components/Log/Signup";

const RouterPaths = () => {
    return(
        <>
        <BrowserRouter >
        <Routes>
        <Route path="/" element={!user ? <Signup /> : <Navigate to="/home" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route path="/task/:id" element={user ? <Task /> : <Navigate to="/" />} />
        <Route path="/task/create" element={user ? <TaskCreate /> : <Navigate to="/" />} />
        <Route path="/signin" element={<Signin/>}/>
        </Routes>
      </BrowserRouter>
        </>
    )
}

export default RouterPaths; 