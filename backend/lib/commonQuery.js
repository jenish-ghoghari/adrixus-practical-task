const mongoose = require('mongoose')

const commonQuery = {}

commonQuery.InsertDocument = async function InsertDocument(model, data) {
    return new Promise(function (resolve, reject) {
        new model(data).save(function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
    })
}

commonQuery.FindOne = function FindOne(model, data) {
    return new Promise(function (resolve, reject) {
        // console.log(data);
        model.findOne(data).exec(function (err, result) {
            if (err) {
                reject(err)
            } else {
                // console.log(result);
                resolve(result)
            }
        })
    })
}

commonQuery.FindOneUpdate = function FindOneUpdate(model, findId, updatedata) {
    return new Promise(function (resolve, reject) {
        model.findByIdAndUpdate(findId,
            { $set: updatedata },
            { new: true })
            .exec(function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
    })
}

commonQuery.FindAll = function FindAll(model,para=null) {
    return new Promise(function (resolve, reject) {
        if(para){
            model.find({}).sort(para).exec(function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        }else{

            model.find({}).exec(function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                }
            })
        }
        })
}



module.exports = commonQuery