const mongoose = require('mongoose')

const MilitarSchema = mongoose.Schema({
   
    nombre:{
        type:String,
        require: [true, 'nombre es obligatorio'],
        lowercase: true,
        minLength: [2, 'La longitud minima del nombre es 2'],
    },

    nacionalidad:{
        type:String,
        require: [true, 'nacionalidad es obligatoria'],
        lowercase: true,
        minLength: [2, 'La longitud minima de la nacinoalidad  es 2'],
    },

    cc:{
        type:String,
        require: [true, 'cc es obligatoria'],
        lowercase: true,
        minLength: [2, 'La longitud minima de la cc  es 2'],
    },

    autoridad:{
        type:String,
        require: [true, 'autoridad es obligatoria'],
        lowercase: true,
        enum: {values:['soldado', 'sargento', 'capitan','general','cabo','teniente','subteniente'], message: 'Autoridad no válida'}
        
    },

    genero:{
        type:String,
        require: [true, 'genero es obligatorio'],
        lowercase: true,
        enum: {values:['M', 'F','masculino','femenino'], message: 'genero no válido'}
        
    },

    edad:{
        type:String,
        require: [true, 'edad es obligatoria'],
        lowercase: true,
        minLength: [1, 'La longitud minima de la edad  es 1'],
        maxLength:[3,'la longitud maxima de la edad es 3']    
        
    },
    
})

module.exports= mongoose.model('Militar', MilitarSchema)