import React from 'react'
import Header from '../layout/Menu/Header'
import Menu from '../layout/Menu/Menu'
import ContentEditaPdt from '../layout/ContentEditaPdt'

export default function Estoque() {
    return (
        <React.Fragment>
            <main className="home" id="home">
                
                <Header />
                <div className="main-container" id="container">
                    <Menu />
                    <ContentEditaPdt />
                </div>
            </main >
        </React.Fragment>
    )
}
