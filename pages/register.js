import React from "react";
import Head from "next/head";
 
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Register = (props) => {
  return (
    <>
      <Head>
        <title>Registration Page</title>
      </Head>
      <>
        <h1>Registration</h1>
        <Form>
          <Form.Group className="col-4" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" />
          </Form.Group>
          <Form.Group className="col-4" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" />
          </Form.Group>
          <Form.Group className="col-4" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="col-4" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="col-4" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group> <br></br>
          <Button variant="primary" type="submit">
            Register
          </Button>
        </Form>
      </>
    </>
  );
};

export default Register;