//import express = require("express")

class ClienteDAO{
    constructor(bd){

        this.bd = bd
    }

    listaTodosClientes = ()=>{
        return new Promise((resolve,reject)=>{
            this.bd.all('SELECT * FROM CLIENTES', (erro, rows)=>{
                if(erro){
                        reject({
                            clientes: erro.message,
                            erro: true
                        })
                }else {
                    resolve({ 
                        clientes: rows,
                        error:false})
    
                }
        })

        })
 

    }

      
    
      clienteIndividual = (email)=>{
            return new Promise ((resolve,reject)=>{
                this.bd.all('SELECT * FROM CLIENTES WHERE EMAIL = ?', 
                email,
                (erro, rows) =>{
                        if(erro){

                            reject({msg: erro.message,
                                    erro: true})
                        }else {

                            resolve({ 
                                cliente: rows,
                                erro: false 
                            })
                        }

                }

                )

            })

        }
        clienteIndividualID = (id)=>{
            return new Promise ((resolve,reject)=>{
                this.bd.all('SELECT * FROM CLIENTES WHERE ID = ?', 
                id,
                (erro, rows) =>{
                        if(erro){

                            reject({msg: erro.message,
                                    erro: true})
                        }else {

                            resolve({ 
                                cliente: rows,
                                erro: false 
                            })
                        }

                }

                )

            })

        }




        inserirCliente = (novoCliente) =>{
            return new Promise((resolve, reject)=>{
                this.bd.run("INSERT INTO CLIENTES(NOME, EMAIL, TELEFONE) VALUES (?, ?, ?)",
                    novoCliente.nome, novoCliente.email, novoCliente.telefone, 
                    (erro)=>{
                    if(erro){
                        reject({
                            msg: erro.message,
                            erro: true
                        })
                    }else{
                        resolve({
                           msg: `Usuário ${novoCliente.nome} inserido com sucesso`,
                           cliente: novoCliente,
                           erro: false
                        })
                    }
                })
            })
            
                              
        }


        deletarCLiente = (id) =>{
            return new Promise((resolve, reject)=>{
                this.bd.run('DELETE FROM CLIENTES WHERE ID = ?',
                id,
                (erro)=>{
                    if(erro){
                        reject({
                            msg: erro.message,
                            erro: true
                        })
                    }else{
                        resolve({
                            cliente: `Cliente de id ${id} deletado com sucesso`,
                            erro: false
                        })
                    }
                })
            })

        }


        atualizaCliente = (id, cliente)=>{
            return new Promise((resolve, reject)=>{
                this.bd.run('UPDATE CLIENTES SET NOME = ?, EMAIL = ?, TELEFONE = ? WHERE ID = ?',
                cliente.nome, cliente.email, cliente.telefone,
                id,
                (erro)=>{
                    if(erro){
                        reject({
                            msg: erro.message,
                            erro: true
                        })
                    }else{
                        resolve({
                            msg: `Cliente de id ${id} atualizado com sucesso`,
                            cliente: cliente,
                            erro: false
                        })
                    }
                })
            })
        }
    

}


 export default ClienteDAO