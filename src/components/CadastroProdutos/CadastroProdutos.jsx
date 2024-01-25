import { useState } from 'react';
import axios from 'axios';
import './CadastroProdutos.css'

const CadastroProduto = () => {
  const [produto, setProduto] = useState({
    nome: '',
    descricao: '',
    preco: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduto({
      ...produto,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/produtos/cadastrar', produto);
      console.log('Produto cadastrado com sucesso:', response.data);
      alert("Produto Cadastrado com Sucesso")
    } catch (error) {
      console.error('Erro ao cadastrar produto:', error.response.data);
    }
  };

  return (
    <div className='cadastro-produto-wrapper'>
      <h2>Cadastro de Produto</h2>
      <form onSubmit={handleSubmit} className='cadastro-produto-form'>
        <label>
          Nome:
          <input type="text" name="nome" value={produto.nome} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Descrição:
          <textarea name="descricao" value={produto.descricao} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Preço:
          <input type="text" name="preco" value={produto.preco} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default CadastroProduto;
