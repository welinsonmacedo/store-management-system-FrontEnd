import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/home'
import Vendas from '../pages/Vendas/Vendas'
import Estoque from '../pages/Estoque/estoque'
import Comercial from '../pages/Comercial/comercial'
import Relatorios from '../pages/Relatorios/relatorios'
import Financeiro from '../pages/Financeiro/financeiro';
import Configuracoes from '../pages/Configuracoes/configuracoes';


import CadastroProdutos from '../components/CadastroProdutos/CadastroProdutos'
import CadastroClientes from '../components/CadastroClientes/CadastroClientes'
import ListaClientes from '../components/ListClientes/ListClientes';

const AppRoutes = () => {
    return(
        <Router>
            <Routes>
            <Route component = { Home }  path="/" element={<Home />} />
            <Route component = { Vendas }  path="/vendas" element={<Vendas />}/>
            <Route component = { Estoque }  path="/estoque" element={<Estoque />}/>
            <Route component = { Comercial }  path="/comercial" element={<Comercial/>}/>
            <Route component = { Relatorios }  path="/relatorios" element={<Relatorios/>}/>
            <Route component = { Financeiro }  path="/financeiro" element={<Financeiro/>}/>
            <Route component = { Configuracoes }  path="/configuracoes" element={<Configuracoes/>}/>

            <Route component = { CadastroProdutos }  path="/cadastroprodutos" element={<CadastroProdutos/>}/>
            <Route component = { CadastroClientes }  path="/cadastroclientes" element={<CadastroClientes/>}/>
            <Route component = { ListaClientes }  path="/listaclientes" element={<ListaClientes/>}/>
            
            
            
            </Routes>
        </Router>
             
    )
 }
 export default AppRoutes;