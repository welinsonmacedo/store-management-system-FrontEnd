/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ListClientes.css';

const ListClientes = () => {
    const [clientes, setClientes] = useState([]); // Corrigido para setClientes
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/clientes/listclientes');
                setClientes(response.data); // Corrigido para setClientes
                console.log('Clientes:', response.data);
            } catch (error) {
                console.error('Erro ao obter clientes:', error.response.data);
            }
        };

        fetchData();
    }, []); 

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredClientes = clientes.filter(cliente =>
        cliente.nome.toLowerCase().includes(searchTerm.toLowerCase()) // Corrigido para o nome do campo certo
    );

    return (
        <div>
            <input
                type="text"
                placeholder="Buscar clientes..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <h3>Lista de Clientes</h3>
            <ul>
                {filteredClientes.map(cliente => (
                    <li key={cliente.id}>{cliente.nome} {cliente.cpf} {cliente.endereco} {cliente.telefone}</li> // Corrigido para o nome do campo certo
                ))}
            </ul>
        </div>
    );
};

export default ListClientes;
