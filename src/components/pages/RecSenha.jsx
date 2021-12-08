import React from 'react'
import { Link } from 'react-router-dom'
import "./local_assets/css/form-2.css"

const RecSenha = () => {
    return (
        <div className="form-container outer">
            <div className="form-form">
                <div className="form-form-wrap">
                    <div className="form-container">
                        <div className="form-content">

                            <h1 className="mb-3">Esqueci minha senha</h1>

                            <form className="text-left">
                                <div className="form">

                                    <p style={{ fontSize: '1.2em', textAlign: 'center' }}>Para redefinir sua senha, informe o email cadastrado na sua conta e lhe enviaremos um link com as instruções.</p>

                                    <div id="email-field" className="field-wrapper input mb-2">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-at-sign register"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path></svg>
                                        <input id="email" name="email" type="text" className="form-control" placeholder="Email" />
                                    </div>



                                    <div className="d-sm-flex justify-content-between">
                                        <div className="field-wrapper">
                                            <button type="submit" className="btn btn-primary" value="">Enviar</button>
                                        </div>
                                    </div>



                                    <div className="field-wrapper mt-3">
                                        <Link to="/login">
                                            <button className="btn btn-danger" value="">Cancelar</button>
                                        </Link>
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

export default RecSenha