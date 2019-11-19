import axios from 'axios';
import $ from 'jquery'
export const login = user =>{
    $.ajax({
        method: "POST",
        url: "api/test",
        data: { name: "John", location: "Boston" }
        })
        .done(function( msg ) {
        alert( "Data Saved: " + msg );
        })
        .fail(function(){
            alert('sd')
        })
    return axios
        .post('api/test',{
            email:user.email,
            motpass:user.motpass,
            typeuser:user.typeuser
        },{
            headers:{'Content-type':'application/json'}
        })
        .then(res =>{
            alert(res)
            localStorage.setItem('user',res.data)
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