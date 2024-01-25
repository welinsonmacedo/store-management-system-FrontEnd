/* eslint-disable no-unused-vars */

import './CadastroClientes.css';
import { useState } from 'react';
import axios from 'axios';

const CadastroCliente = () => {
  const [cliente, setCliente] = useState({
    nome: '',
    cpf: '',
    endereco: '',
    telefone: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCliente({
      ...cliente,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/clientes/cadastrar', cliente);
      console.log('Cliente cadastrado com sucesso:', response.data);
      alert("Cliente Cadastrado com Sucesso");
    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error.response.data);
    }
  };

  return (
    <div className='ContainerCadastroCliente'>
      <h2>Cadastro de Clientes</h2>
      <form onSubmit={handleSubmit} className='CadastroClienteForm'>
        <label>
          Nome:
          <input type="text" name="nome" value={cliente.nome} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Cpf:
          <input type="text" name="cpf" value={cliente.cpf} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Endereço:
          <input type="text" name="endereco" value={cliente.endereco} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Telefone:
          <input type="text" name="telefone" value={cliente.telefone} onChange={handleInputChange} />
        </label>
        <button type="submit">Cadastrar Cliente</button>
      </form>
    </div>
  );
};

export default CadastroCliente;
