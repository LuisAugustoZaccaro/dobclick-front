import React from 'react'
import Header from '../layout/Menu/Header'
import Menu from '../layout/Menu/Menu'
import ContentHome from '../layout/ContentHome'

const Home = () => {

    return (
        <React.Fragment>
            <main className="home" id="home">
                
                <Header />
                <div className="main-container" id="container">
                    <Menu />
                    <ContentHome />
                </div>
            </main >
        </React.Fragment>
    )
}

export default Home