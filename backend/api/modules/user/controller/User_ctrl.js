const mongoose = require("mongoose"),
    bcrypt = require('bcrypt'),
    USER = require('../model/usermodel'),
    fs = require('fs'),
    path = require('path'),
    mres = require('../../../../constant/responseHandler'),
    resStatus = require('../../../../constant/statusCodes'),
    resMessage = require('../../../../constant/responseMessage'),
    jwt = require('jsonwebtoken'),
    commonQuery = require('../../../../lib/commonQuery');

module.exports = {
    registration: registration,
    login: login,
    getAllUser: getAllUser,
}

/*
Function : User Registration
*/
function registration(req, res) {
    async function asy_add_user() {
        try {
            if (req.body.email && req.body.password) {
                const condition = {
                    email: req.body.email,
                    isDelete: false
                }
                const oldUser = await commonQuery.FindOne(USER, condition)
                if (oldUser) {
                    mres(res, resStatus.Conflict, resMessage.User_already_exists)
                } else {
                    const Userdata = {
                        first_name: req.body.first_name,
                        last_name: req.body.last_name,
                        email: req.body.email,
                        password: req.body.password,
                        mobile: req.body.mobile,
                        age: req.body.age,
                        register_date: new Date()
                    }

                    const newUser = await commonQuery.InsertDocument(USER, Userdata)
                    if (newUser) {
                        mres(res, resStatus.Success, resMessage.Registration_success, newUser)
                    } else {
                        mres(res, resStatus.Conflict, resMessage.Registration_failed)
                    }
                }
            } else {
                mres(res, resStatus.Conflict, resMessage.Not_proper_data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    asy_add_user()
}

/*
Function : User Login
*/
function login(req, res) {
    async function asy_login_user() {
        try {
            if (req.body.email && req.body.password) {
                const condition = {
                    email: req.body.email,
                    isDelete: false
                }
                const user = await commonQuery.FindOne(USER, condition)
                if (user) {
                    user.comparePass(req.body.password, async function (err, isMatch) {
                        if (isMatch) {
                            const params = {
                                user_id: user._id,
                                email: user.email
                            }
                            const jwttoken = jwt.sign(params, 'demo@123', {
                                expiresIn: '24h'
                            })

                            if (jwttoken) {
                                const userdata = {
                                    first_name: user.first_name,
                                    last_name: user.last_name,
                                    email: user.email,
                                    mobile: user.mobile,
                                    age: user.age,
                                    register_date: user.register_date,
                                    authtoken: 'auth ' + jwttoken
                                }
                                mres(res, resStatus.Success, resMessage.Login_success, userdata)
                            } else {
                                mres(res, resStatus.Failed, resMessage.Login_failed, err)
                            }
                        } else {
                            mres(res, resStatus.Conflict, resMessage.Password_not_match, err)
                        }
                    })
                } else {
                    mres(res, resStatus.Success, resMessage.User_not_found)
                }
            } else {
                mres(res, resStatus.Conflict, resMessage.Not_proper_data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    asy_login_user()
}

/*
Function : Get All Users 
*/
function getAllUser(req, res) {
    let { email, mobile, ageSort} = req.body
    console.log(email, mobile, ageSort)
    async function acy_get_allUser() {
        try {
            let user
            if(email){
                console.log("Email found")
                user = await commonQuery.FindOne(USER,{email:email})
            }else if(mobile){
                console.log("Mobile found")
                user = await commonQuery.FindOne(USER,{mobile:mobile})
            }else if(email && mobile){
                console.log("Email and Mobile Found")
                user = await commonQuery.FindOne(USER,{email:email,mobile:mobile})
            }else if(ageSort){
                console.log("Age Sort Found")
                user = await commonQuery.FindAll(USER,{age:1})
            }else{
                console.log("Email and mobile not found")
                user = await commonQuery.FindAll(USER)
            }
            mres(res, resStatus.Success, resMessage.All_User_List, user)
        } catch (error) {
            console.log(error)
            mres(res, resStatus.Failed, resMessage.Something_wrong)
        }
    }
    acy_get_allUser()
}

