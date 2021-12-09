import React from 'react'
import { Routes , Route } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import RecSenha from '../pages/RecSenha'
import Graficos from '../pages/Graficos'
import Estoque from '../pages/Estoque'
import AdicionaProduto from '../pages/AdicionaProduto'
import EditaProduto from '../pages/EditaProduto'


const Content = props => (
    <main className="Content">
        <Routes>
            <Route path="/" element= {<Home  />} />
            <Route path="/login" element={<Login />} />  
            <Route path="/register" element={<Register />} />
            <Route path="/recuperar-senha" element={<RecSenha />} />
            <Route path="/estoque" element={<Estoque />} />
            <Route path="/graficos" element={<Graficos />} />
            <Route path="/estoque/adiciona_produto" element={<AdicionaProduto />} />
            <Route path="/estoque/edita_produto" element={<EditaProduto />} />
        </Routes>
    </main>
)

export default Content