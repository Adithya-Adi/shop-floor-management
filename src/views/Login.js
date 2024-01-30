import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import { FaEnvelope, FaLock } from 'react-icons/fa';
// import { useNavigate } from "react-router-dom";

function Login() {
  // const navigate = useNavigate();

  // State for form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here using formData
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <div className="content">
        <Row className="justify-content-center align-items-center">
          <Col md={5} style={{ marginTop: "15rem", marginBottom: "2rem" }}>
            <Card className="card-user" style={{ backgroundColor: "#f8f9fa", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", borderRadius: "10px" }}>
              <CardHeader>
                <CardTitle tag="h5" style={{ fontFamily: 'Roboto', fontWeight: 700 }}>Login</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col className="pr-1">
                      <FormGroup>
                        <label style={{ color: "black" }}>Email</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <FaEnvelope />
                            </span>
                          </div>
                          <Input
                            name="email"
                            placeholder="Email *"
                            type="text"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1">
                      <FormGroup>
                        <label style={{ color: "black" }}>Password</label>
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <FaLock />
                            </span>
                          </div>
                          <Input
                            name="password"
                            placeholder="Password *"
                            type="password"
                            style={{ color: "#3d31cb" }}
                            value={formData.password}
                            onChange={handleInputChange}
                          />
                        </div>
                      </FormGroup>
                    </Col>
                  </Row>
                  <p>Don't have an account? <a href="/register" style={{ color: "#3d31cb" }}> Create Account</a></p>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                        style={{ background: "linear-gradient(to right, #4caf50, #45a049)", color: "#fff" }}
                      >
                        Login
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Login;