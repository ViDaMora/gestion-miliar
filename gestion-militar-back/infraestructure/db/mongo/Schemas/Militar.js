const mongoose = require('mongoose')

const MilitarSchema = mongoose.Schema({
   
    nombre:{
        type:String,
        lowercase: true,
        minLength: [2, 'La longitud minima del nombre es 2'],
    },

    email:{
        type:String,
        require: [true, 'email es obligatorio'],
        lowercase: true,
        minLength: [2, 'La longitud minima del email es 2'],
    },

    activo:{
        type:Boolean,
        require: [true, 'estado es obligatorio'],
    },

    nacionalidad:{
        type:String,
        lowercase: true,
        minLength: [2, 'La longitud minima de la nacinoalidad  es 2'],
    },

    cc:{
        type:String,
        lowercase: true,
        minLength: [2, 'La longitud minima de la cc  es 2'],
    },

    autoridad:{
        type:String,
        lowercase: true,
        enum: {values:['general',
        'teniente',
        'mayor',
        'brigadier',
        'coronel',
        'comandante',
        'mayor',
        'capitan',
        'sargento',
        'cabo'], message: 'Autoridad no válida'}
        
    },

    genero:{
        type:String,
        lowercase: true,
        enum: {values:['m', 'f','masculino','femenino'], message: 'genero no válido'}
        
    },

    edad:{
        type:String,
        lowercase: true,
        minLength: [1, 'La longitud minima de la edad  es 1'],
        maxLength:[3,'la longitud maxima de la edad es 3']    
    },
    
})

module.exports= mongoose.model('Militar', MilitarSchema)