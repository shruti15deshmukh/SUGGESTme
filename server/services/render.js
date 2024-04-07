const axios=require ('axios');
exports.homeRoute=(req,res) =>{
    //making a get request to /api/Suggestions
    axios.get('http://localhost:3000/api/Suggestions')
    .then(function(response){
        res.render('index',{Suggestions : response.data});   //showing in table from DB

    })
    .catch(err =>{
        res.send(err);

    })
   


}
exports.write_suggestion=(req,res) =>{
    res.render('write-suggestion');


}
exports.edit=(req,res) =>{
    axios.get('http://localhost:3000/api/Suggestions',{params:{id:req.query.id}})
    .then(function(Suggestiondata){
        res.render("edit",{Suggestions:Suggestiondata.data})

    })
    .catch(err=>{
        res.send(err);

    })



}