import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Form, Input, LoginHeader, Label, InputDiv, ForgotPass, LoginButton, BottomContent } from '../../Styles/Login.Styles'

const Login = () => {
    return (
        <Card>
            <LoginHeader>Log in</LoginHeader>
            <Form>
                <InputDiv>
                    <Label>Email</Label>
                    <Input placeholder='Name'></Input>
                </InputDiv>
                <InputDiv>
                    <Label>Password</Label>
                    <Input placeholder='Name'></Input>
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