import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import EmployeeListing from "../employee-listing/employeeListing";

export default function Main() {
    let navigate = useNavigate();
    return (
        <>
             <div className="library mt-4"> 
                <Button variant="primary"
                className="d-flex ms-auto me-3" onClick={() => navigate('/create')}>Add</Button>
                
                <div className="mt-3">
                    <EmployeeListing/>
                </div>
            </div>
        </>
    );
}