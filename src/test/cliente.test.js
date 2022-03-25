 import request from 'supertest'
 import app from '../app.js'


 describe('GET /clientes',()=>{
        test('Se o status é 200', ()=>{
            return request(app).get('/clientes')
            .then((response)=>{
                expect(response.statusCode).toBe(200)
            })
        })
 })

 describe('POST /clientes',()=>{
    test('Se o body existe', ()=>{
        return request(app).post('/clientes')
        .send({
            nome: "Teste",
            email: "teste@test.com",
            telefone: "5555-4545"   
        })
        .then((response)=>{
            console.log(response.body)
            expect(response.body.msg).toBeTruthy()
        })
    })
})