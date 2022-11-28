import React from "react";
import Head from "next/head";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const login = (props) => {
  return (
    <>
      <Head>
        <title>Login Page</title>
      </Head>
      <>
        <h1>Login</h1>
        <Form>
          <Form.Group className="col-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="col-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group> <br></br>
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form>
      </>
    </>
  );
};

export default login;