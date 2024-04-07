const express= require('express');
const route=express.Router();
const services=require("../services/render");
const controller=require('../controller/controller');

route.get('/',services.homeRoute)
route.get('/write-suggestion',services.write_suggestion)
route.get('/edit',services.edit)

//API--->>>>
route.post('/api/Suggestions',controller.create);
route.get('/api/Suggestions',controller.find);
route.put('/api/Suggestions/:id',controller.update);
// route.delete('/api/Suggestions/:id',controller.delete);



module.exports=route;