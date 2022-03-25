

import calculadora from "../funcoes/calculadora.js"
import Clientes from "../Models/Clientes.js";



test("Testar se 2 + 2 = 4", ()=>{
    expect(calculadora.soma(2,2)).toBe(4)
})

test("Testar class cliente",()=>{
    expect(new Clientes('Diego' , 'diego@gmail.com', '5555-8462')).toMatchObject({nome: 'Diego',
                                                                     email:'diego@gmail.com',
                                                                    telefone:'5555-8462'})
})


//toMatchObject
//toEqual