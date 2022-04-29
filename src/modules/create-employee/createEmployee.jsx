import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useInput from "../../custom-hooks/useInput";
import { createEmployee, updateEmployeeById } from "../../features/employee/employeeSlice";




export default function CreateEmployee() {
    const { state } = useLocation();
    let stateObj = {};
    stateObj = state;
    const [checkStateExist, setCheckStateExist] = useState(!!stateObj);
    const [validated, setValidated] = useState(false);
    const name = useInput(checkStateExist ? stateObj.name : '');
    const phone = useInput(checkStateExist ? stateObj.phone : '');
    const email = useInput(checkStateExist ? stateObj.email : '');
    const website = useInput(checkStateExist ? stateObj.website : '');
    const username = useInput(checkStateExist ? stateObj.username : '');
    const address = useInput(checkStateExist ? stateObj.address.city : '');
    const company = useInput(checkStateExist ? stateObj.company.name : '');
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (state && Object.keys(state).length) {
            console.log('ssss', state);
        }
    }, [state]);

    const handleSubmit = (e) => {
        console.log('ddf', e.currentTarget.checkValidity());
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
            return;
        }

        const _payload = {
            name: name.value,
            username: username.value,
            email: email.value,
            phone: phone.value,
            website: website.value,
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: address.value,
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496",
                }
            },
            company: {
                name: company.value,
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        }
        if (!checkStateExist) {
            // @ts-ignore
            dispatch(createEmployee(_payload))
            .unwrap()
            .then(data => {
                console.log('submit dtaa', data);
                navigate('/home');

            })
        } else {
            // @ts-ignore
            dispatch(updateEmployeeById({id: stateObj.id, _payload}))
            .unwrap()
            .then(data => {
                console.log('update dtaa', data);
                navigate('/home');

            })
        }

        e.preventDefault();
    }

    return (
        <div className="details">
            <div className="header d-flex align-items-center mt-3">
                <h3 className="w-100">{checkStateExist ? 'Update Employee' : 'Add Employee'}</h3>
            </div>

            <Form className="w-50 m-auto" onSubmit={e => handleSubmit(e)} noValidate validated={validated}>


                <Form.Group className="mb-4" id="formPatientName" controlId="validationCustom01">
                    <Form.Label className="d-flex">Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" required
                        {...name}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid name.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" id="formEmail" controlId="validationCustom02">
                    <Form.Label className="d-flex">Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email Id" {...email} required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid email id.
                    </Form.Control.Feedback>
                </Form.Group>


                <Form.Group className="mb-4" id="formPhone" controlId="validationCustom03">
                    <Form.Label className="d-flex">Phone Number</Form.Label>
                    <Form.Control type="text" placeholder="Enter Phone Number" {...phone} required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid phone number.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" id="formWebsite" controlId="validationCustom04">
                    <Form.Label className="d-flex">Website</Form.Label>
                    <Form.Control type="text" placeholder="Enter Website" {...website} required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid website.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" id="formUsername" controlId="validationCustom05">
                    <Form.Label className="d-flex">Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" {...username} required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid username.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" id="formAddress" controlId="validationCustom06">
                    <Form.Label className="d-flex">Address</Form.Label>
                    <Form.Control type="text" placeholder="Enter Address" {...address} required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Address.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4" id="formCompany" controlId="validationCustom06">
                    <Form.Label className="d-flex">Company</Form.Label>
                    <Form.Control type="text" placeholder="Enter Company" {...company} required
                    />
                    <Form.Control.Feedback type="invalid">
                        Please provide a valid Company.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-4 d-flex">
                    <Form.Check
                        required
                        label="Agree to terms and conditions"
                        feedback="You must agree before submitting."
                        feedbackType="invalid"
                    />
                </Form.Group>
                <Button as="input" type="submit" className="mb-4" value="Submit" />
            </Form>
        </div>
    )
}