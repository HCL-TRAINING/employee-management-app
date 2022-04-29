// @ts-nocheck
import React, { useState } from "react";
import { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeEmployeeById, retrieveEmployees } from "../../features/employee/employeeSlice";


export default function EmployeeListing() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    
    // @ts-ignore
    const employees = useSelector(state => state.employee);
    console.log('empp', employees);


    useEffect(() => {
        if (employees.length === 0) {
            // @ts-ignore
            dispatch(retrieveEmployees())
        }
    },[dispatch]);

    const onDelete = (employee) => {
        console.log('sele', employee);
        dispatch(removeEmployeeById(employee.id))
        .unwrap()
        .then(() => {

        })
    }

    const onEdit = (employee) => {
        navigate('/create', {state: employee});
    }
 
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>SL No.</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Website Link</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
               
                {
                       employees && employees.map((emp, i) => {
                            return (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.phone}</td>
                                    <td>{emp.address.city + ', ' + emp.address.street + ', ' + emp.address.zipcode}</td>
                                    <td>{emp.company.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.website}</td>
                                    <td>{emp.username}</td>

                                    
                                    <td>
                                        <div className="d-flex">
                                            <Button variant="primary"
                                                className="d-flex ms-auto me-3" size="sm" onClick={() => onEdit(emp)}>Edit</Button>
                                            <Button variant="danger"
                                                className="d-flex ms-auto me-3" size="sm" onClick={() => onDelete(emp)}>Delete</Button>
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }


                </tbody>
            </Table>
        </div>
    )
}