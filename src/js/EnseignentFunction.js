import $ from 'jquery';
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
export const addenseignant = enseignant =>{
    if(session){
        $.post('http://127.0.0.1:8000/api/enseignent/add',{
            email:session.email,
            motpass:session.motpass,
            nom:enseignant.nom,
            prenom:enseignant.prenom,
            email_ens:enseignant.email_etud,
            date_ns:enseignant.date_ns,
            date_recrt:enseignant.date_recrt,
            grade:enseignant.grade
        })
        .done(function(res){
            return res.data;
        })
        .fail(function(err){
            console.log(err);
            return false;
        })
    }
}