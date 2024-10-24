import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const handleSubmit=async()=>{
        try{
            let api="http://localhost:8000/students/stulogin";
            const res=await axios.post(api,{email:email,password:password});
            console.log(res.data);
            localStorage.setItem("name",res.data[0].name);
            localStorage.setItem("email",res.data[0].email);
            navigate("/dashboard");
        }catch(error){
            alert(error.response.data);
        }
    }
    return(
        <>
        <h1>User Login</h1>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email"  value={email} placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>
      <Button variant="primary" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
        </>
    )
}
export default Login;