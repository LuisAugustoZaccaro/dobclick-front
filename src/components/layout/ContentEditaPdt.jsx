import React from 'react'
import '../pages/local_assets/css/scrollspyNav.css'
import '../pages/local_assets/css/bootstrap-select.min.css'
import { Link } from 'react-router-dom'

export default function ContentEditaPdt() {
    return (
        <div id="content" className="main-content">
            <div className="container">
                <div id="tooltips" class="col-lg-12 layout-spacing col-md-12">
                    <div class="statbox widget box box-shadow">
                        <div class="widget-header">
                            <div class="row">
                                <div class="col-xl-12 col-md-12 col-sm-12 col-12">
                                    <h4>Editar Produto</h4>
                                </div>
                            </div>
                        </div>
                        <div class="widget-content widget-content-area">
                            <form class="needs-validation" novalidate action="javascript:void(0);">
                                <div class="form-row">
                                    <div class="col-md-4 mb-5">
                                        <label for="validationTooltip01">Nome do produto</label>
                                        <input type="text" class="form-control" id="validationTooltip01" required />
                                        <div class="valid-tooltip">
                                            Ótimo
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-5">
                                        <label for="validationTooltip02">Marca</label>
                                        <input type="text" class="form-control" id="validationTooltip02" required />
                                        <div class="valid-tooltip">
                                            Ótimo
                                        </div>
                                    </div>
                                    <div class="col-md-4 mb-5">
                                        <label for="validationTooltip02">Material</label>
                                        <input type="text" class="form-control" id="validationTooltip02" required />
                                        <div class="valid-tooltip">
                                            Looks good!
                                        </div>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="col-md-3 mb-5">
                                        <label for="validationTooltip03">Tamanho</label>
                                        <input type="text" class="form-control" id="validationTooltip03" required />
                                        <div class="invalid-tooltip">
                                            Porfavor, insira um dado válido!
                                        </div>
                                    </div>
                                    <div class="col-md-3 mb-5">
                                        <label for="validationTooltip04">Quantidade</label>
                                        <input type="text" class="form-control" id="validationTooltip04" required />
                                        <div class="invalid-tooltip">
                                            Porfavor, insira um dado válido!
                                        </div>
                                    </div>
                                    <div class="col-md-3 mb-5">
                                        <label for="validationTooltip04">Gênero</label>
                                        <input type="text" class="form-control" id="validationTooltip04" required />
                                        <div class="invalid-tooltip">
                                            Porfavor, insira um dado válido!
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-primary mt-2" type="submit" style={{ float: 'right' }}>
                                    <Link to="/estoque" style={{color: '#fff'}}>
                                        Adicionar
                                    </Link>
                                </button>
                                <button class="btn btn-danger mt-2" style={{ float: 'right', marginRight: '10px' }}>
                                    <Link to="/estoque" style={{color: '#fff'}}>
                                        Voltar
                                    </Link>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
