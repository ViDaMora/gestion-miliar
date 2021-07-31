const axios = require('axios')
const {militaresMock} = require('./Mock/militar')

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

    describe('POST',() => {


        afterAll(async () =>{
            const response= await axios.get('militar')
            const militar = response.data.filter(militar => militar.cc =="121212121212")
            await axios.delete('militar', {data:{id:militar[0].id}})
        })

        it('Guardar correctamente un militar',async () => {
            const militar = militaresMock[0]
            const response = await axios.post('militar',militar)
            expect(response.status).toBe(200)
            const {nombre,email,activo,cc}= response.data
            expect(nombre).toBe('victor mora')
            expect(email).toBe('151424@mail.com')
            expect(activo).toBe(false)
            expect(cc).toBe('121212121212')
        })

        it('Guardar usuario que ya existe',async () => {
            const militar = militaresMock[0]
            const response = await axios.post('militar',militar)
            expect(response.status).toBe(200)
            const {errorMessage}= response.data
            expect(errorMessage).toBe('El militar ingresado ya existe')
        })
    })


    describe('DELETE',() => {

        beforeAll(async () =>{
            const militar = militaresMock[0]
             await axios.post('militar',militar)
        })

        it('Borrar un militar correctamente',async () => {
            const militares= await axios.get('militar')
            const militar = militares.data.filter(militar => militar.cc =="121212121212")
            const response = await axios.delete('militar', {data:{id:militar[0].id}})
            expect(response.status).toBe(200)
            const {message} = response.data
            expect (message).toBe('Militar eliminado con exito')
        })
        it('Borrar un militar que no existe',async () => {
            const response = await axios.delete('militar', {id: "1111111111111111111111111111"})
            const {errorMessage} = response.data
            expect (errorMessage).toBe('militar no Encontrado')
        })
    })



})
