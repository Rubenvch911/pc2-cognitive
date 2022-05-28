var mongoose = require('mongoose');
var Estudiante = require("../models/Estudiante");

var estudianteController = {};

estudianteController.list = function(req, res){
    
    Estudiante.find({}).exec(function(err, estudiantes){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/estudiantes/index', {estudiantes: estudiantes,titulo:'INDEX'} );
        
    });
    
};

estudianteController.show = function(req, res){
    Estudiante.findOne({_id: req.params.id}).exec(function(err, estudiante){
        if( err ){ console.log('Error: ', err); return; }
        
        res.render('../views/estudiantes/show', {estudiante: estudiante} );
    });
    
};

estudianteController.create = function(req, res){
    res.render('../views/estudiantes/create');
};

estudianteController.save = function(req, res){
    var estudiantes = new Estudiante( req.body );
    
    estudiantes.save(function(err){
        if( err ){ console.log('Error: ', err); return; }
        
        console.log("Successfully created a estudiantes. :)");
        //res.redirect("/estudiantes/show/"+usuario._id);
        res.redirect("/estudiantes");
    });
};


module.exports = estudianteController;
