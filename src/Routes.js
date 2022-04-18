// @ts-nocheck
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Login from '../src/pages/Login'
import Recover from '../src/pages/Recover'
import Home from "./pages/Home";
import Register from "./pages/Register";

export default () => {

    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/recover-login" element={<Recover />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
        </Routes>
    );
}