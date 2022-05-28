var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EstudianteSchema = new Schema({
    codigo: {type: String, required: true, max: 10},
    nombre: {type: String, required: true, max: 30},
    carrera: {type: String, required: true},
    ciclo: {type: String, required: true, max:20}
});

module.exports = mongoose.model('Estudiante', EstudianteSchema);
