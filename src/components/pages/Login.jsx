import React from 'react'
import { Link } from 'react-router-dom'
import "./local_assets/css/form-2.css"
const axios = require('axios');


const Login = () => {
  
    return (
        <div className="form-container outer">
            <div className="form-form">
                <div className="form-form-wrap">
                    <div className="form-container">
                        <div className="form-content">

                            <h1>Login</h1>

                            <form className="text-left" onSubmit={submit}>
                                <div className="form">

                                    <div id="username-field" className="field-wrapper input">
                                        <label htmlFor="username">NOME DE USUÁRIO</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <input id="username" name="username" type="text"  className="form-control" placeholder="Nome de usuário" />
                                    </div>

                                    <div id="password-field" className="field-wrapper input mb-2">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="password">SENHA</label>

                                            <Link to= "/recuperar-senha" className="forgot-pass-link">Esqueceu a senha?</Link>

                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                        <input id="password" name="password" type="password" className="form-control" placeholder="Senha"  />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="toggle-password" className="feather feather-eye"></svg>
                                    </div>
                                    <div className="d-sm-flex justify-content-between">
                                        <div className="field-wrapper">
                                            {/* <Link to="/"> */}
                                                <button type="submit" className="btn btn-primary" value="">Entrar</button>
                                            {/* </Link> */}
                                            
                                        </div>
                                    </div>

                                    <p className="signup-link">Não possui uma conta?
                                        <Link to="/register"> Crie uma!</Link>
                                    </p>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

 async function submit(event){
   const api = axios.create({
        baseURL: 'http://localhost:3200',
      });
var email = document.getElementById("username").value;
var senha = document.getElementById("password").value;


  await  api.post('/users/login', 
    {
	
        email: email,
        senha: senha
        
    }
      )
      .then(function (response) {
      var data = response.data;
        alert("Nome:"+data.usuario.usu_nome+" token:"+data.token);
      }).catch((error)=>{
        alert(error);
      })
}



export default Login