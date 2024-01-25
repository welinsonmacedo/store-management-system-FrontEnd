/* eslint-disable react/prop-types */
import './NavBar.css'
  function App() {
    
    return (
      <div className='ContainerNavBar'>
       <ul>
       <li><a href="/"><img width="48" height="48" src="https://img.icons8.com/color-glass/48/home-page.png" alt="home-page"/> <p>Home</p></a></li>
        <li><a href="vendas"><img width="48" height="48" src="https://img.icons8.com/color-glass/48/total-sales-1.png" alt="total-sales-1"/><p>Vendas</p></a></li>
        <li><a href="estoque"><img width="48" height="48" src="https://img.icons8.com/color/48/sell-stock.png" alt="sell-stock"/><p>Estoque</p></a></li>
        <li><a href="comercial"><img width="48" height="48" src="https://img.icons8.com/color/48/user-group-woman-woman.png" alt="user-group-woman-woman"/><p>Comercial</p></a></li>
        <li><a href="relatorios"><img width="48" height="48" src="https://img.icons8.com/color/48/graph-report.png" alt="graph-report"/><p>Relatorios</p></a></li>
        <li><a href="financeiro"><img width="48" height="48" src="https://img.icons8.com/fluency/48/graph-report.png" alt="graph-report"/><p>Financeiro</p></a></li>
        <li><a href="configuracoes"><img width="48" height="48" src="https://img.icons8.com/color-glass/48/settings--v1.png" alt="settings--v1"/><p>Configuraçoes</p></a></li>
        <li><a href="sair"><img width="48" height="48" src="https://img.icons8.com/fluency/48/exit.png" alt="exit"/><p>Sair</p></a></li>
       </ul>
      </div>
    );
  }
  export default App