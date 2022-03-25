
class Clientes{

     constructor(nome, email, telefone){

        this.nome = nome;
        this.email = this._validaEmail(email)
        this.telefone = telefone;
     }

     _validaEmail = (email) =>{
        if(email.indexOf("@")> - 1 && email.indexOf(".com") > -1) {

            return email;
        } else{
            throw new Error ("O email está incorreto, por favor coloque corretamento dessa forma exemplo = nome@gmail.com")
        }

     }




}

export default Clientes