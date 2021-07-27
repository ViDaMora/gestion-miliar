const express =require('express')
var cors = require('cors')

const createServer = async () => {
    const PORT = process.env.PORT || 3000
    const app = express()
    app.use(express.json({extend:false}))
    app.use(cors())


    app.use('/militarapi/v1',require('./routes/Vehiculo'))
    app.use('/militarapi/v1',require('./routes/Militar'))
    app.use('/militarapi/v1',require('./routes/Lider'))
    app.use('/militarapi/v1',require('./routes/Unidad'))
    app.listen(PORT, () => {console.log(`Server listening on port http://localhost:${PORT}`)})
}

module.exports =  {createServer} 