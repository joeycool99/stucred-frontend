// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button, Message } from 'semantic-ui-react';
import { toast } from 'react-toastify'; 

const Login = ({ history }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setValidationErrors({
      ...validationErrors,
      [e.target.name]: '',
    });
  };

  const validateForm = () => {
    const errors = {};
    if (formData.email.length < 18) {
      errors.email = 'Email must be at least 18 characters long';
    }
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      Object.values(validationErrors).forEach((error) => {
        toast.error(error); // Display validation errors as toast notifications
      });
      return;
    }

    try {
      const response = await axios.post('/login', formData);
      localStorage.setItem('token', response.data.token);
      history.push('/dashboard');
    } catch (error) {
      toast.error(error.response.data.message); 
      console.error('Login error:', error);
    }
  };


  return (
    <Container text>
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          error={validationErrors.email ? true : false}
        />
        {validationErrors.email && (
          <Message error content={validationErrors.email} />
        )}
        <Form.Input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          error={validationErrors.password ? true : false}
        />
        {validationErrors.password && (
          <Message error content={validationErrors.password} />
        )}
        <Button primary type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
