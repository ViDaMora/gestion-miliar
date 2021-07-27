const mongoose = require('mongoose')

const UnidadSchema = mongoose.Schema({

  
    tipoUnidad:{
        type:String,
        lowercase: true,
        minLength: [2, 'La longitud minima de la unidad es 2'],
    },

    encargado:{
        type:String,
        lowercase: true,
        minLength: [2, 'La longitud minima de la nacionalidad  es 2'],
    },

    asignada:{
        type:Boolean,
        lowercase: true,
        
    },

    militares:{
        type:Array,
        lowercase: true,
          
    },
 
    vehiculos:{
        type:Array,
        lowercase: true,
    },
    
})

module.exports= mongoose.model('Unidad', UnidadSchema)