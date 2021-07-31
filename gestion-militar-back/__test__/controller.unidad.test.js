const axios = require('axios')
const {militaresMock} = require('./Mock/militar')


describe('Unidad',() => {
    beforeAll(() =>{
        axios.defaults.baseURL = "http://localhost:3000/militarapi/v1/"
    })

    describe('GET',() => {
        it('Debe retornar un status code OK',async () => {
            const response = await axios.get('unidad')
            expect(response.status).toBe(200)
        })

        it('Debe retornar un object',async () => {
            const response = await axios.get('unidad')
            expect(typeof (response.data)).toBe('object')
        })
    })


  

})
