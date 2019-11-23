import $ from 'jquery';
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
export const addmodule = modul =>{
    if(session){
        $.post('http://127.0.0.1:8000/api/module/add',{
            email:session.email,
            motpass:session.motpass,
            nommodule:modul.nommodule,
            coff:modul.coff,
            annee:modul.annee,
            semestre:modul.semestre
        })
        .done(function(res){
            alert(res)
            console.log(res)
            return res.data;
        })
        .fail(function(err){
            console.log(err);
            return false;
        })
    }
}