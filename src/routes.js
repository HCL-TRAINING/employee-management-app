import React from "react";
import { Route, Routes } from 'react-router-dom';
import CreateEmployee from "./modules/create-employee/createEmployee";
import Homepage from './modules/homepage/homepage';

export default function EmployeeRoutes() {
    return (
        <Routes>
          <Route path='/' element={<Homepage />}></Route>
          <Route path="/home" element={<Homepage />}></Route>
          <Route path="/create" element={<CreateEmployee/>}></Route>
          <Route path="*" element={<h1>Page Not Found</h1>} ></Route>
        </Routes>
    )
}