const mongoose = require('mongoose')

const OperacionSchema = mongoose.Schema({


    unidades:{
        type:Array,
        lowercase: true,
    },

    lider:{
        type: Object,
        lowercase: true,
    },

    descripcion:{
        type:String,
        lowercase: true,
        minLength: [8, 'La longitud minima de la descripcion es 8'],
        
    },

    pais:{
        type:String,
        lowercase: true,
        minLength: [2, 'La longitud minima del pais es 2'],
          
    },
 
    nombre:{
        type:String,
        lowercase: true,
        minLength: [3, 'La longitud minima del nombre es 3'],
    },
    
})

module.exports= mongoose.model('Operacion', OperacionSchema)