import React from 'react'
import '../pages/local_assets/css/apexcharts.css'
import Column from '../layout/Graphs/Column'
import Pie from '../layout/Graphs/Pie'
import Piey from '../layout/Graphs/Piey'
import Line from '../layout/Graphs/Line'

export default function ContentGraficos() {
    return (
        <div id="content" className="main-content">
            <div className="layout-px-spacing">

                <div className="row layout-top-spacing">

                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-chart-one">
                            <div className="widget-heading">
                                <h5 className="">Lucro Semanal</h5>
                                <div className="task-action">
                                    <div className="dropdown">

                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask" style={{ willChange: 'transform' }}>
                                            <a className="dropdown-item" href="#">Semanal</a>
                                            <a className="dropdown-item" href="#">Mensal</a>
                                            <a className="dropdown-item" href="#">Anual</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget-content">
                                <Column />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-chart-two">
                            <div className="widget-heading">
                                <h5 className="" style={{ backgroundColor: 'red', borderRadius: '20px', color: '#000', justifyContent: 'center', alignItems: 'center', height: '40px', display: 'flex' }}>Crítico</h5>
                            </div>
                            <div className="widget-content">
                                <Pie />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-chart-one">
                            <div className="widget-heading">
                                <h5 className="">Produto mais vendido da semana</h5>
                                <div className="task-action">
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" id="pendingTask" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="pendingTask" style={{ willChange: 'transform' }}>
                                            <a className="dropdown-item" href="#">Weekly</a>
                                            <a className="dropdown-item" href="#">Monthly</a>
                                            <a className="dropdown-item" href="#">Yearly</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="widget-content">
                                <Line />
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 col-12 layout-spacing">
                        <div className="widget widget-chart-two">
                            <div className="widget-heading">
                                <h5 >Atenção</h5>
                            </div>
                            <div className="widget-content">
                            <Line />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
