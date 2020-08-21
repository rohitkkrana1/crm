import React from 'react';  
import { Switch,Route,withRouter } from 'react-router-dom';
import axios from "axios";
import Config from "../config";
const queryString = require('query-string');
const API_URL = Config.API_URL;

 class AuthService {


  login(data,callback) {
    let req=axios.post(API_URL + "signin.php",JSON.stringify(data));
    HandleRequests(req,(err,res)=>{
        callback(err,res);
    })      
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  
}

 function authHeader(){
    const user = JSON.parse(localStorage.getItem('user'));  
    if (user && user.accessToken) {
      return { Authorization: 'Bearer ' + user.accessToken };
    } else {
      return {};
    }
  }

  export  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  export  function getService(data,URI,callback){
      const s =((data !="")?queryString.stringify(data):"");
    let req =  axios.get(API_URL + URI + s, { headers: authHeader() });
    HandleRequests(req,(err,res)=>{
        callback(err,res);
    })
  }

  export  function postService(data,URI,callback){
    let req= axios.post(API_URL + URI, { headers: authHeader(),data });
    HandleRequests(req,(err,res)=>{
        callback(err,res);
    })
  }

  export  function putService(data,URI,callback){
    let req= axios.put(API_URL + URI, { headers: authHeader(),data });
    HandleRequests(req,(err,res)=>{
        callback(err,res);
    })
  }

  export  function deleteService(data,URI,callback){
    let req=axios.delete(API_URL + URI, { headers: authHeader(),data });
    HandleRequests(req,(err,res)=>{
        callback(err,res);
    })
  }

 function  HandleRequests(req,callback){
      req.then(res=>{
          callback({},res);
      }).catch(err=>{
        if (!err.status) {
            callback({error:"Internet Connection Error"},{});
          }else if (err.response) {
            callback({error:"status Error","error-type":err.response},{});
          } else if (err.request) {
            callback({error:"TimeOut Error","error-type":err.resquest},{});
          } else {
            callback({error:"Unknown Error","error-type":err},{});
          }
      })

  }

export default new AuthService();
