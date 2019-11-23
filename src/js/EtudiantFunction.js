import $ from 'jquery';
if(localStorage.getItem('user')){
    var session=JSON.parse(localStorage.getItem('user'));
}
export const addetudiant = etudiant =>{
    if(session){
        $.post('http://127.0.0.1:8000/api/etudiant/add',{
            email:session.email,
            motpass:session.motpass,
            nom:etudiant.nom,
            prenom:etudiant.prenom,
            email_etud:etudiant.email_etud,
            date_ns:etudiant.date_ns,
            lieu_ns:etudiant.lieu_ns,
            groupe:etudiant.groupe,
            annee:etudiant.annee,
            section:etudiant.section
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