import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const {send, json}=require ('micro') 
const {router, get, post} = require ('microrouter')
const cors = require('micro-cors') ()

// const db = require('monk')('mongodb:JimmyHendrix:<813moveOverRover>@cluster0-shard-00-00-ffkvd.mongodb.net:27017,cluster0-shard-00-01-ffkvd.mongodb.net:27017,cluster0-shard-00-02-ffkvd.mongodb.net:27017/Users?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')
const db = require('monk')('mongodb://JimmyHendrix:813moveOverRover@cluster0-shard-00-00-ffkvd.mongodb.net:27017,cluster0-shard-00-01-ffkvd.mongodb.net:27017,cluster0-shard-00-02-ffkvd.mongodb.net:27017/Helio?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')

    const users = db.get('Users')

// In memory "Database"
// let users = []

// Route Handlers

const notFound = (req, res) => send(res, 404, "Not found route")

const createUser = async(req,res) => {
// Create a User
// Database stuff goes here
const body = await json(req)
await users.insert.body
return send (res, 201, body)
}

const getUsers = async (req,res) => {
// Read all users
// return send (res, 200, users)
// Database stuff goes here
const data=await users.find({})
return send (res, 200, data)
}

const getUser = async (req,res) =>{
// Read a single user
const user=await users.find({_id: req.params.id})
// Database stuff goes here
return send(res, 200, user)
}

// Routes
// module.exports = cors(
// router (
//     get('/users', getUsers),
//     get('/users/:id', getUser),
//     // post('/users',createUsers),
//     // get('/*', notfound)
// )
// )

// export default  router(
//     get('/users', getUsers),
//     get('/users/:id', getUser),
//     post('/users',createUser),
//     get('/*', notFound)
// )

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
