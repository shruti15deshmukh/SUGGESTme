var suggestionDB=require('../model/model');
// create new suggestion
exports.create=(req,res)=>{
    //validation of req
    if(!req.body){
        res.status(400).send({message: "Name field cannot be empty"});
        return;
    }
    const Suggestions=new suggestionDB({
        name: req.body.name,
        email:req.body.email,
        suggestion:req.body.suggestion,
        status: req.body.status
    })

    //save in DB 
    Suggestions
    .save(Suggestions)
    .then(data =>{
        // res.send(data)
        res.redirect("/write-suggestion")
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "Err occured while CREATE"
        })
    })


}
//retreive
exports.find=(req,res)=>{

    if(req.query.id){
        const id=req.query.id;
        suggestionDB.findById(id)
        .then(data =>{
            if(!data){
                res.status(404).send({message:`No suggestion found with ${id}.`})
            }
            else{
                res.send(data);
            }
        })
    
    .catch(err=>{
        res.status(500).send({message:`Error fetching suggestion with ${id}.`})
    })
}else{
    suggestionDB.find()
    .then(Suggestions =>{
        res.send(Suggestions)
    })
    .catch(err =>{
        res.status(500).send({message: err.message || "Error occured while RETRIEVE"})
    })

}
    


    
}

//update
exports.update=(req,res)=>{

    if(!req.body){
        return res
        .status(400)
        .send({message: "data to be updated can not be empty"})
    }

    const id=req.params.id;
    suggestionDB.findByIdAndUpdate(id , req.body)
    .then(data => {
        if (!data) {
          res.status(404).send({ message: `Not found Suggestion with ${id}.`})
        }
        else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).send({message: "Error while UPDATE"})
    })
    
}

//delete
// exports.delete=(req,res)=>{
//     const id = req.params.id;

//     suggestionDB.findByIdAndRemove(id)
//     .then(data => {
//       if (!data) {
//         res.status(404).send({ message: `Cannot delete suggestion with ${id}.`})
//       }else{
//         res.send({
//             message: "Suggestion was deleted successfully"
//         })
//       } 
//     })
//     .catch(error => {
//       res.status(500).send({ message: `Error deleting suggestion with ${id}.`});
//     });
    
// }