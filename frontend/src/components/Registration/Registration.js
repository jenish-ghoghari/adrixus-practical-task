import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
    Card,
    Form,
    Input,
    LoginHeader,
    Label,
    InputDiv,
    LoginButton,
    BottomContent,
    ErrorMsg
} from "../../Styles/Login.Styles";
import axios from "axios";
const Register = () => {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState('')
    const [registerData, setRegisterData] = useState({
        first_name: "",
        last_name: "",
        mobile: "",
        age: "",
        email: "",
        password: "",
    });
    const signup = (e) => {
        e.preventDefault();
        let fromData = new FormData();
        fromData.append("first_name", registerData.first_name);
        fromData.append("last_name", registerData.last_name);
        fromData.append("mobile", registerData.mobile);
        fromData.append("age", registerData.age);
        fromData.append("email", registerData.email);
        fromData.append("password", registerData.password);

        axios.post("http://localhost:8000/api/f/user/registration", fromData)
        .then((response) => {
            if (response.data.code === 409)
            {
                console.log(response.data.message);
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
            <LoginHeader>Registration</LoginHeader>
            <ErrorMsg>{ errorMsg}</ErrorMsg>

            <Form onSubmit={signup}>
                <InputDiv>
                    <Label>First Name</Label>
                    <Input placeholder="First Name"
                        name="first_name"
                        type="text"
                        onChange={(e) =>
                            setRegisterData({ ...registerData, first_name: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Last Name</Label>
                    <Input placeholder="Last Name"
                        name="last_name"
                        type="text"
                        onChange={(e) =>
                            setRegisterData({ ...registerData, last_name: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Mobile</Label>
                    <Input placeholder="Mobile"
                        type="number"
                        name="mobile"
                        onChange={(e) =>
                            setRegisterData({ ...registerData, mobile: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Age</Label>
                    <Input placeholder="age"
                        name="age"
                        type="number"
                        onChange={(e) =>
                            setRegisterData({ ...registerData, age: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Email</Label>
                    <Input placeholder="Email"
                        type="email"
                        name="email"
                        onChange={(e) =>
                            setRegisterData({ ...registerData, email: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Password</Label>
                    <Input placeholder="Password"
                        name="password"
                        type="password"
                        onChange={(e) =>
                            setRegisterData({ ...registerData, password: e.target.value })
                        }
                    ></Input>
                </InputDiv>

                <InputDiv>
                    <LoginButton>Sign up</LoginButton>
                </InputDiv>
            </Form>
            <BottomContent>
                Already have an account? <Link to="/login"> Login</Link>{" "}
            </BottomContent>
        </Card>
    );
};

export default Register;
