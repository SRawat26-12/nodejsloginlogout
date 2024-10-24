import {useState} from "react";
import axios from "axios";
import {message} from "antd";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Registration=()=>{
    const [input, setInput] =useState({});
   const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;
      setInput(values=>({...values, [name]:value}));
   }
   const handleSubmit=()=>{
    let api="http://localhost:8000/students/stuRegistration";
     axios.post(api, input).then((res)=>{
        
          message.success("You are succesfully Registered!");
          
     })
   }
    return(
        <>
       <h1>User Registration</h1>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={input.name} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={input.email} onChange={handleInput} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="password" placeholder="Enter password" name="password" value={input.password} onChange={handleInput} />
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Registration;