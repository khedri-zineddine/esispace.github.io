import axios from 'axios';
import $ from 'jquery';
import { Redirect } from 'react-router-dom';
export const login = user =>{
    return axios
        .post('http://127.0.0.1:8000/api/login',{
            email:user.email,
            motpass:user.motpass,
            typeuser:user.typeuser
        },{
            headers:{'Content-type':'application/json'}
        })
        .then(res =>{
            var userloged=res.data.data
            if(userloged!=''){
                localStorage.setItem('user', JSON.stringify(userloged));
                window.location="/"
                return userloged;
            }else{
                alert(userloged)
                console.log(userloged)
            }
        })
        .catch(err =>{
            alert(err)
        })
}
export const getuser = () =>{
    return axios
        .post('http://localhost:8000/api/test',{},{
            headers:{'Content-type':'application/json'}
        })
        .then(res =>{
            alert(res)
            localStorage.setItem('user',res.data)
        })
        .catch(err=>{
            alert(err)
        })
}
export const isLogin=()=>{
    if(localStorage.getItem('user')){
    }else{
        window.location="/login"
    }
}
export const Navuser=()=>{
    alert('dsds')
}