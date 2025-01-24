//ChatGpt Generated ==> https://chatgpt.com/c/6793c1d5-8bd4-8012-992b-9ecfc0c47255


import React from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login form submitted");
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-end">
            <Button 
              variant="outline-primary" 
              onClick={() => navigate("/home")}
            >
              Home
            </Button>
          </div>
          <h2 className="text-center mt-3">Admin Login</h2>
          <Form onSubmit={handleLogin} className="mt-4">
            <Form.Group controlId="formUsername" className="mb-3">
              <Form.Label>Username:</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter your username" 
                required 
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Enter your password" 
                required 
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="w-100">
              Login
            </Button>

            <div className="text-center mt-3">
              <a href="/forgot-password" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;