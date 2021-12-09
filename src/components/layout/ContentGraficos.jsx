import React from 'react'
import '../pages/local_assets/css/apexcharts.css'
import Column from '../layout/Graphs/Column'
import Line2 from '../layout/Graphs/Line2'
import Line from '../layout/Graphs/Line'

export default function ContentGraficos() {
    return (
        <div id="content" className="main-content">
            <div className="layout-px-spacing">

                <div className="row layout-top-spacing" style={{alignContent: 'center'}}>

                    <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" style={{marginLeft: '90px', paddingBottom: '55px' }}>
                        <div class="widget widget-table-two" style={{paddingBottom: '55px' }}>

                            <div class="widget-heading">
                                <h5 class="">Lucro da semana</h5>
                            </div>

                            <div class="widget-content" >
                                <Column />
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" style={{marginLeft: '20px'}}>
                        <div class="widget widget-table-two">

                            <div class="widget-heading col-12" style={{ display: 'flex' }}>
                                <h5 class="col-7" >Produto mais vendido da categoria</h5>

                                <select class="form-control col-5" id="exampleFormControlSelect1">
                                    <option>Insira a categoria...</option>
                                    <option>Calça</option>
                                    <option>Camisa</option>
                                    <option>Bermuda</option>
                                    <option>Tênis</option>
                                </select>

                            </div>

                            <div class="widget-content">
                                <Line2 />
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" style={{marginLeft: '90px'}}>
                        <div class="widget widget-table-two" style={{paddingBottom: '55px' }}>

                            <div class="widget-heading">
                                <h5 class="">Produto mais vendido da semana</h5>
                            </div>

                            <div class="widget-content">
                                <Line />
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing" style={{marginLeft: '20px'}}>
                        <div class="widget widget-table-two">

                            <div class="widget-heading col-12" style={{ display: 'flex' }}>
                                <h5 class="col-7" >Número de vendas da categoria</h5>

                                <select class="form-control col-5" id="exampleFormControlSelect1">
                                    <option>Insira a categoria...</option>
                                    <option>Calça</option>
                                    <option>Camisa</option>
                                    <option>Bermuda</option>
                                    <option>Tênis</option>
                                </select>

                            </div>

                            <div class="widget-content">
                                <Line2 />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
