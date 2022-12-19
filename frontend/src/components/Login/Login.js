import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Card, Form, Input, LoginHeader, Label, InputDiv, ForgotPass, LoginButton, BottomContent, ErrorMsg } from '../../Styles/Login.Styles'
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('')
    const [loginData, setLoginData] = useState({
        first_name: "",
        last_name: "",
        mobile: "",
        age: "",
        email: "",
        password: "",
    });
    const login = (e) => {
        e.preventDefault();
        let fromData = new FormData();
        
        fromData.append("email", loginData.email);
        fromData.append("password", loginData.password);

        axios.post("http://localhost:8000/api/f/user/login", fromData)
        .then((response) => {
            if (response.data.code === 409)
            {
                setErrorMsg(response.data.message);
            }
            else {
                setTimeout(() => {
                    localStorage.setItem("userName", response.data.data.first_name)
                    localStorage.setItem("authToken", response.data.data.authtoken)
                    navigate('/');
                }, 1700);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return (
        <Card>
            <LoginHeader>Log in</LoginHeader>
            <ErrorMsg>{ errorMsg}</ErrorMsg>
            <Form onSubmit={login}>
                <InputDiv>
                    <Label>Email</Label>
                    <Input placeholder='Name'
                        name='email'
                        type='email'
                        onChange={(e) =>
                            setLoginData({ ...loginData, email: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Password</Label>
                    <Input placeholder='Name'
                        name='password'
                        type='password'
                        onChange={(e) =>
                            setLoginData({ ...loginData, password: e.target.value })
                        }
                    ></Input>
                    <ForgotPass>Forgot Password ?</ForgotPass>
                </InputDiv>
                <InputDiv>
                    <LoginButton>Log in</LoginButton>
                </InputDiv>
            </Form>
            <BottomContent>Don’t have an account? <Link to='/register'> Register</Link> </BottomContent>
        </Card>
    )
}

export default Login