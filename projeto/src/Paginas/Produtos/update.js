import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./estiloupd.scss";

export default function ProdutoUpdate() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [produto, setProduto] = useState({
        nome: "",
        descricao: "",
        marca: "",
        categoria: "",
        codigo: "",
        preco: "",
        estoque: "",
        data_validade: ""
    });

    const [status, setStatus] = useState("");


    useEffect(() => {

        async function consultar() {

            try {

                const resposta = await axios.get(
                    `http://localhost:8000/api/produto/${id}`
                );

                setProduto({
                    ...resposta.data,
                    data_validade: resposta.data.data_validade
                        ? String(resposta.data.data_validade).substring(0, 10)
                        : ""
                });

            } catch (erro) {

                console.error(erro);
                setStatus("Erro ao consultar produto.");

            }
        }

        consultar();

    }, [id]);


    function alterarCampo(evento) {

        const { name, value } = evento.target;

        setProduto({
            ...produto,
            [name]: value
        });

    }


    async function gravar(evento) {

        evento.preventDefault();

        try {

            const dados = {
                ...produto,
                preco: parseFloat(produto.preco),
                estoque: parseInt(produto.estoque)
            };

            await axios.put(
                `http://localhost:8000/api/produto/${id}`,
                dados
            );

            setStatus("Produto alterado com sucesso!");

            setTimeout(() => {
                navigate("/produto");
            }, 800);

        } catch (erro) {

            console.error(erro);
            setStatus("Erro ao alterar produto.");

        }
    }


    return (

        <div className="cadastro-page">

            <div className="cadastro-container">

                <div className="cadastro-header">

                    <p className="cadastro-label">
                        PRODUTOS
                    </p>

                    <h1>
                        Alterar produto
                    </h1>

                    <p className="cadastro-subtitulo">
                        Altere as informações do produto selecionado.
                    </p>

                </div>


                <form onSubmit={gravar}>

                    <div className="form-grid">

                        <div className="campo">

                            <label>
                                Nome do produto
                            </label>

                            <input
                                type="text"
                                name="nome"
                                value={produto.nome}
                                onChange={alterarCampo}
                                maxLength="100"
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Código
                            </label>

                            <input
                                type="text"
                                name="codigo"
                                value={produto.codigo}
                                onChange={alterarCampo}
                                maxLength="20"
                                required
                            />

                        </div>


                        <div className="campo campo-largo">

                            <label>
                                Descrição
                            </label>

                            <textarea
                                name="descricao"
                                value={produto.descricao}
                                onChange={alterarCampo}
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Marca
                            </label>

                            <input
                                type="text"
                                name="marca"
                                value={produto.marca}
                                onChange={alterarCampo}
                                maxLength="100"
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Categoria
                            </label>

                            <input
                                type="text"
                                name="categoria"
                                value={produto.categoria}
                                onChange={alterarCampo}
                                maxLength="100"
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Preço
                            </label>

                            <input
                                type="number"
                                name="preco"
                                value={produto.preco}
                                onChange={alterarCampo}
                                step="0.01"
                                min="0"
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Estoque
                            </label>

                            <input
                                type="number"
                                name="estoque"
                                value={produto.estoque}
                                onChange={alterarCampo}
                                min="0"
                                required
                            />

                        </div>


                        <div className="campo campo-largo">

                            <label>
                                Data de validade
                            </label>

                            <input
                                type="date"
                                name="data_validade"
                                value={produto.data_validade}
                                onChange={alterarCampo}
                                required
                            />

                        </div>

                    </div>


                    <div className="formulario-acoes">

                        <button
                            type="button"
                            className="botao-cancelar"
                            onClick={() => navigate("/produto")}
                        >
                            Cancelar
                        </button>

                        <button
                            type="submit"
                            className="botao-cadastrar"
                        >
                            Salvar alterações
                        </button>

                    </div>

                </form>


                {status && (

                    <div className="formulario-status">
                        {status}
                    </div>

                )}

            </div>

        </div>

    );
}