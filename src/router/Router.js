import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Task from "../pages/Task";
import TaskCreate from "../pages/TaskCreate";
import { useSelector } from "react-redux";
import Login from "../pages/Login"

const RouterPaths = () => {
  const {user} = useSelector((state) => state.user)
    return(
        <>
        <BrowserRouter >
        <Routes>
        <Route path="/" element={!user ? <Login /> : <Navigate to="/home" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        <Route path="/task/:id" element={user ? <Task /> : <Navigate to="/" />} />
        <Route path="/task/create" element={user ? <TaskCreate /> : <Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
        </>
    )
}

export default RouterPaths; 