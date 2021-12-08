import React from 'react'
import { Link } from 'react-router-dom'
import "./local_assets/css/form-2.css"

const Register = () => {
    return (
        <div className="form-container outer">
            <div className="form-form">
                <div className="form-form-wrap">
                    <div className="form-container">
                        <div className="form-content">

                            <h1 className="">Registro</h1>
                            <p className="signup-link register">Já possui uma conta? <Link to="/login">Logue-se</Link></p>
                            <form className="text-left">
                                <div className="form">

                                    <div id="username-field" className="field-wrapper input">
                                        <label htmlFor="username">NOME DE USUÁRIO</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                        <input id="username" name="username" type="text" className="form-control" placeholder="Nome de usuário" />
                                    </div>

                                    <div id="email-field" className="field-wrapper input">
                                        <label htmlFor="email">EMAIL</label>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-at-sign register"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                                        <input id="email" name="email" type="text" className="form-control" placeholder="Email" />
                                    </div>

                                    <div id="password-field" className="field-wrapper input mb-2">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="password">SENHA</label>                                        
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                        <input id="password" name="password" type="password" className="form-control" placeholder="Senha" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="toggle-password" className="feather feather-eye"></svg>
                                    </div>

                                    <div id="conf-password-field" className="field-wrapper input mb-2">
                                        <div className="d-flex justify-content-between">
                                            <label htmlFor="conf-password">CONFIRMAÇÃO DE SENHA</label>                                        
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                        <input id="conf-password" name="conf-password" type="password" className="form-control" placeholder="Confirme sua senha" />
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" id="toggle-password" className="feather feather-eye"></svg>
                                    </div>

                                    <div className="d-sm-flex justify-content-between">
                                        <div className="field-wrapper">
                                            <Link to="/login">
                                            <button type="submit" className="btn btn-primary" value="">Criar</button>
                                            </Link>
                                      </div>
                                    </div>

                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register