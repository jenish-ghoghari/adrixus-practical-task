import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Form,
    Input,
    LoginHeader,
    Label,
    InputDiv,
    LoginButton,
    BottomContent,
} from "../../Styles/Login.Styles";
import axios from "axios";
const Register = () => {
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
            console.log(response);
            setTimeout(function () {
                window.location.replace("/");
            }, 1000);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    return (
        <Card>
            <LoginHeader>Registration</LoginHeader>
            <Form onSubmit={signup}>
                <InputDiv>
                    <Label>First Name</Label>
                    <Input placeholder="First Name"
                        name="first_name"
                        type="text"
                        inputOnChange={(e) =>
                            setRegisterData({ ...registerData, first_name: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Last Name</Label>
                    <Input placeholder="Last Name"
                        name="last_name"
                        type="text"
                        inputOnChange={(e) =>
                            setRegisterData({ ...registerData, last_name: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Mobile</Label>
                    <Input placeholder="Mobile"
                        type="number"
                        name="mobile"
                        inputOnChange={(e) =>
                            setRegisterData({ ...registerData, mobile: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Age</Label>
                    <Input placeholder="age"
                        name="age"
                        type="number"
                        inputOnChange={(e) =>
                            setRegisterData({ ...registerData, age: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Email</Label>
                    <Input placeholder="Email"
                        type="email"
                        name="email"
                        inputOnChange={(e) =>
                            setRegisterData({ ...registerData, email: e.target.value })
                        }
                    ></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Password</Label>
                    <Input placeholder="Password"
                        name="password"
                        type="password"
                        inputOnChange={(e) =>
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
