import { NextPage } from "next";
import React from 'react'
import {Button,Offcanvas,Form} from 'react-bootstrap';
import { useForm } from "react-hook-form";

interface propsType {
    show: any,
    onHide: any,
    title:any,
  }

  
const SideCanvas:NextPage<propsType> = ({show,onHide,title}) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = () => console.log("hi");


  return (
    <div>
     <Offcanvas placement="end" show={show} onHide={onHide} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
      
          {
            title==="Add member"? 
            <>
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control defaultValue="test" {...register("example")} type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    Well never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control {...register("exampleRequired", { required: true })} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </>
            :title="Edit member"?
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control defaultValue="test" {...register("example")} type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                      Well never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control {...register("exampleRequired", { required: true })} type="password" placeholder="Password"/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
            :""
            }
          
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default SideCanvas
