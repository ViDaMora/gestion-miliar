const axios = require('axios')

describe('Militar',() => {
    beforeAll(() =>{
        axios.defaults.baseURL = "http://localhost:3000/militarapi/v1/"
    })



    describe('GET',() => {
        it('Debe retornar un status code OK',async () => {
            const response = await axios.get('militar')
            expect(response.status).toBe(200)
        })

        it('Debe retornar un object',async () => {
            const response = await axios.get('militar')
            expect(typeof (response.data)).toBe('object')
        })
    })



})
