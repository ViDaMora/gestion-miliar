const express =require('express')


const createServer = async () => {
    const PORT = process.env.PORT || 3000
    const app = express()
    app.use(express.json())

    app.use('/militarapi/v1',require('./routes/Vehiculo'))
    app.use('/militarapi/v1',require('./routes/Militar'))
    app.listen(PORT, () => {console.log(`Server listening on port http://localhost:${PORT}`)})
}

module.exports =  {createServer} 