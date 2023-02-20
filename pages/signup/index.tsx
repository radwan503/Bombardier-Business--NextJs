import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const SignUpPage = () => {
    return (
        <div className='container'>
            <div className="section-padding">
                <main className="w-100 h-100 m-auto">
                    <div className='row'>

                        <div className='col-md-4 col-xxl-3 offset-md-4 offset-xxl-4'>
                            <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                            <Form>
                                <Form.Group className="mb-3" controlId="formGroupName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Name" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupDesignation">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Designation" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>


                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default SignUpPage