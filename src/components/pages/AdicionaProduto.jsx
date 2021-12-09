import React from 'react'
import Header from '../layout/Menu/Header'
import Menu from '../layout/Menu/Menu'
import ContentAdicionaPdt from '../layout/ContentAdicionaPdt'

export default function Estoque() {
    return (
        <React.Fragment>
            <main className="home" id="home">
                
                <Header />
                <div className="main-container" id="container">
                    <Menu />
                    <ContentAdicionaPdt />
                </div>
            </main >
        </React.Fragment>
    )
}
