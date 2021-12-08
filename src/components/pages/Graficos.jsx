import React from 'react'
import Header from '../layout/Menu/Header'
import Menu from '../layout/Menu/Menu'
import ContentGraficos from '../layout/ContentGraficos'

export default function Graficos() {
    return (
        <React.Fragment>
            <main className="home" id="home">
                
                <Header />
                <div className="main-container" id="container">
                    <Menu />
                    <ContentGraficos />
                </div>
            </main >
        </React.Fragment>
    )
}
