// const users = [
//     {_id: 0, username: 'Test'},
//     {_id: 1, username: 'Test 2'},
//     {_id: 2, username: 'Test 3'}
// ]
const { default: mongoose } = require('mongoose');
var db = require('../modules/db');
// var mongoose = require('mongoose');
// const UserService=requires('../services/UserService');


module.exports = {
    

    login: (req, res) => res.json({token: 'TOKEN', ...req.body, key: process.env.KEY}),
    findAll: (req, res) => res.json(blabla)
}