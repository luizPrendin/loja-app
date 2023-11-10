"use client";
import React, { useState } from "react";

export default function Login() {

        //CP-3 / Ex-2: Criando a função de validação do formulário.
        //Vale 50Pts

        //Preenchendo o form utilizando useState.
        //Como vamos utilizar um componente que vai renderizar no cliente, devemos colocar a directiva "use client" na primeira linha deste component.
        const [usuario, setUsuario] = useState({
          info: "login",
          email: "",
          senha: ""
        });

        //Criando a função de preenchimento dos campos - handleChange
        const handleChange = (e) =>{
          //Vamos desestruturar o evento onChange e pegar os atributos do input que está sendo preenchido, apenas os atributos [name]:value.
          const{name, value} = e.target;
          //Agora podemos preencher o state, utilizando oo atribuitos acima, a cada alteração dos campos captada peklo onChange. Para isso contamos com o operador SPREAD...
          setUsuario({...usuario,[name]:value});
          };

        //Criando a função para submeter os dados para a API e realizar de fato a validação...
          const handleSubmit = async (e)=>{
            e.preventDefault();

            //Variável que será utilizada fora do contexto de tratamento:
            let user;

            try {
              const response = await fetch("http://localhost:3000/api/base/base-users",{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(usuario),
              });

              if(response.ok){
                const data = response.json();

                if(data){
                  alert("LOGIN REALIZADO COM SUCESSO!")
                }else{
                  alert("SENHA E OU USUAÁRIOS INVÁLIDOS!")
                }

              }

          }catch(error){
            console.error(error);
          }
        }
  return (
    <div>
      <h1>Identificação de Usuários</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Login de Usuários</legend>
            <div>
              <label htmlFor="idEmail">E-mail</label>
              <input type="email" name="email" id="idEmail" placeholder="Digite seu E-mail." value={usuario.email} onChange={handleChange}/>
            </div>
            <div>
              <label htmlFor="idSenha">Senha</label>
              <input type="password" name="senha" id="idSenha" placeholder="Digite sua Senha." value={usuario.senha} onChange={handleChange}/>
            </div>
            <div>
              <button>Login</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}