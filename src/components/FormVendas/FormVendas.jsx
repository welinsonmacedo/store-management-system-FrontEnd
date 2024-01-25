/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button/Button'
import './FormVendas.css'
const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth() + 1; 
    let day = today.getDate();

    
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return `${year}-${month}-${day}`;
};
const FormVendas = () => {
    const [data, setData] = useState(getCurrentDate());
    const [cliente, setCliente] = useState('');
    const [produto, setProduto] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [formaPagamento, setFormaPagamento] = useState('');
    const [desconto, setDesconto] = useState('');
    const [itensVenda, setItensVenda] = useState([]);
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:3000/produtos/listarProdutos');
                setProdutos(response.data);
                console.log('Produtos:', response.data);
            } catch (error) {
                console.error('Erro ao obter produtos:', error.response.data);
            }
        };

        fetchData();
    }, []);



    const adicionarItem = () => {
        const produtoSelecionado = produtos.find((p) => p.nome === produto);

        if (produtoSelecionado) {
            const novoItem = {
                id: itensVenda.length + 1, // Pode usar uma lógica mais robusta para gerar IDs únicos
                cliente: (cliente),
                produto: (produto),
                quantidade: (quantidade),
                formaPagamento: (formaPagamento),
                preco: '',
                subTotal: '',
            };
            setItensVenda([...itensVenda, novoItem]);
        }
    };
    const handleExcluirItem = (itemId) => {
        const novosItens = itensVenda.filter((item) => item.id !== itemId);
        setItensVenda(novosItens);
    };

    const handleFinalizarVenda = () => {

    };

    return (
        <div className='FormVendas'>
            <div >
                <div className="FormVendas_1">
                    <label>
                        N° Venda: { }
                        <p>0</p>
                    </label>
                    <br />
                    <label>
                        Data:
                        <input type="date" value={data} onChange={(e) => setData(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Cliente:
                        <input type="text" value={cliente} onChange={(e) => setCliente(e.target.value)} required />
                    </label>
                </div>
                <div className='FormVendas_1'>
                    <label>
                        Produto:
                        <select value={produto} onChange={(e) => setProduto(e.target.value)} required>
                            <option value="">Selecione um produto</option>
                            {produtos.map((produto) => (
                                <option key={produto.id} value={produto.nome}>
                                    {produto.nome}
                                </option>
                            ))}
                        </select>
                    </label>
                    <br />
                    <label>
                        Quantidade:
                        <input type="text" value={quantidade} onChange={(e) => setQuantidade(e.target.value)} required />
                    </label>
                    <br />

                    <br />
                    <label>
                        Preço:
                        <p>{produto && produtos.find((p) => p.nome === produto)?.preco}</p>
                    </label>
                    <br />
                    <label>
                        SubTotal:
                        <p>{produto && produtos.find((p) => p.nome === produto)?.preco * quantidade}</p>
                    </label>
                </div>
                <div className='FormVendas_1'>
                    <label>
                        FormaPagamento:
                        <input type="text" value={formaPagamento} onChange={(e) => setFormaPagamento(e.target.value)} required />
                    </label>
                    <br />
                    <label>
                        Desconto:
                        <input type="text" value={desconto} onChange={(e) => setDesconto(e.target.value)} />
                    </label>
                    <br />
                    <label>
                        ValorTotal:
                        <p>{0}</p>
                    </label>
                    <br />
                    <label>
                        NumeroItens:
                        <p>{0}</p>
                    </label>

                </div>
                <div className='FormVendas_1'>
                    <Button onClick={adicionarItem} text="Adicionar Item"></Button>
                    <Button onClick={handleFinalizarVenda} text="FinalizarVenda"></Button>
                </div>
            </div>

            <div>
                {/* Lista de Itens na Venda */}
                {itensVenda.map((item) => (

                    <div key={item.id} className="item-venda">
                        <label>
                            Cliente:
                            <input
                                hidden
                                type="text"
                                value={item.cliente}
                                onChange={(e) => {
                                    const novosItens = [...itensVenda];
                                    const index = novosItens.findIndex((i) => i.id === item.id);
                                    novosItens[index].cliente = e.target.value;
                                    setItensVenda(novosItens);
                                }}
                            />
                            <p>{item.cliente}</p>
                        </label>
                        <label>
                            Produto:
                            <input
                                type="text"
                                hidden
                                placeholder={item.produto}
                                value={item.produto}
                                onChange={(e) => {
                                    const novosItens = [...itensVenda];
                                    const index = novosItens.findIndex((i) => i.id === item.id);
                                    novosItens[index].produto = e.target.value;
                                    setItensVenda(novosItens);
                                }}
                            />
                            <p>{item.produto}</p>
                        </label>
                        <label>
                            Quantidade:
                            <input
                                hidden
                                type="text"
                                value={item.quantidade}
                                onChange={(e) => {
                                    const novosItens = [...itensVenda];
                                    const index = novosItens.findIndex((i) => i.id === item.id);
                                    novosItens[index].quantidade = e.target.value;
                                    setItensVenda(novosItens);
                                }}
                            />
                            <p>{item.quantidade}</p>
                        </label>

                        <Button onClick={() => handleExcluirItem(item.id)} text="Excluir Item"></Button>
                        <br />
                    </div>
                ))}
            </div>
        </div >
    );
};

export default FormVendas;
