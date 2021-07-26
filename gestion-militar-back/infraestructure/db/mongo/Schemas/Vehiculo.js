const mongoose = require('mongoose')

const VehiculoEschema = mongoose.Schema({
    tipoVehiculo: {
        type: String,
        require: [true, 'Tipo de vehículo es obligatorio'],
        lowercase: true,
        enum: {values:['terrestre', 'marítimo', 'aereo'], message: 'Tipo de vehículo no válido'}
    },
    url:{
        type: String,
        require: [true, 'URL es obligatorio'],
        lowercase: true,
        minLength: [8, 'La longitud minima de la URL es 8'],
    }
})

module.exports= mongoose.model('Vehiculo', VehiculoEschema)