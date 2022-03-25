// npm run dev


import Clientes from "../Models/Clientes.js";
import ClienteDAO from "../DAO/ClienteDAO.js";

const clientesController = (app,bd)=>{
    const clienteDAO = new ClienteDAO(bd)

    app.get('/clientes', async (req,res)=>{ 
     try{
            const resposta = await clienteDAO.listaTodosClientes()
            res.status(200)
            .json({
                clientes: resposta,
                erro: false
            })
     }catch(erro){
         res.status(400)
         .json({
             msg: erro.message,
             erro: true
         })
     }
     // Utilizando o then como seria =>
    //    .then((resposta)=>{ res.status(200).json(resposta)})
    //    .catch((erro) =>{ res.status(400).json(erro)})
    })

    app.get('/clientes/email/:email', async (req,res)=>{
        const email = req.params.email
       
            try {
              const resposta = await  clienteDAO.clienteIndividual(email)
             res.status(200)
             .json({
                 clientes: resposta,
                 erro: false
             })
            } catch (erro) {
                res.status(400)
                .json({
                    msg: erro.message,
                    erro: true
                })
            }
    })

    app.get('/clientes/id/:id', async (req,res)=>{
        const id = req.params.id
        try {
            const resposta = await  clienteDAO.clienteIndividualID(id)
           res.status(200)
           .json({
               clientes: resposta,
               erro: false
           })
          } catch (erro) {
              res.status(400)
              .json({
                  msg: erro.message,
                  erro: true
              })
          }
        
    })

    app.post('/clientes', async (req,res)=>{
             const body = req.body

                try{
                    const novoCliente = new Clientes (body.nome, body.email, body.telefone)

                  const resposta = await  clienteDAO.inserirCliente(novoCliente)
                  res.status(201)
                  .json({
                    msg: resposta,
                    cliente: novoCliente,
                    erro: false
                  })
                }
                catch (erro){

                    res.status(400).json({ 
                        msg: erro.message,
                        erro: true})
                }        
    })


    app.delete('/clientes/id/:id', async  (req,res)=>{
        const id = req.params.id

        try {
        const resposta = await clienteDAO.deletarCLiente(id)
        res.status(200)
        .json({
                msg: resposta,
                erro: false
        })
        } catch (erro) {
                res.status(400)
                .json({
                    msg: erro.message,
                         erro: true
                })
        }
    })


    app.put('/clientes/id/:id', async (req,res)=>{
        const id = req.params.id
        const body = req.body


        try{
            const atualizaClientes = new Clientes (body.nome, body.email, body.telefone)
              
           const resposta = await clienteDAO.atualizaCliente(id,atualizaClientes)
           res.status(200)
           .json({
               msg: resposta,
               cliente: atualizaClientes,
               erro: false
           })
        } catch(erro){
            res.status(400)
            res.json({ 
                msg: erro.message,
                erro: true
            })
        }
    })

}

export default clientesController

