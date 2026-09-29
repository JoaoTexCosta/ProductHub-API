import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./estilocrt.scss";

export default function ProdutoCreate() {

    const navigate = useNavigate();
    const [status, setStatus] = useState("");

    const nome = useRef();
    const descricao = useRef();
    const marca = useRef();
    const categoria = useRef();
    const codigo = useRef();
    const preco = useRef();
    const estoque = useRef();
    const data_validade = useRef();

    async function gravar(evento) {

        evento.preventDefault();

        const produto = {
            nome: nome.current.value,
            descricao: descricao.current.value,
            marca: marca.current.value,
            categoria: categoria.current.value,
            codigo: codigo.current.value,
            preco: parseFloat(preco.current.value),
            estoque: parseInt(estoque.current.value),
            data_validade: data_validade.current.value
        };

        try {

            await axios.post(
                "http://localhost:8000/api/produto",
                produto
            );

            setStatus("Produto cadastrado com sucesso!");

            setTimeout(() => {
                navigate("/produto");
            }, 800);

        } catch (erro) {

            console.error(erro);
            setStatus("Erro ao cadastrar produto.");

        }
    }

    return (

        <div className="cadastro-page">

            <div className="cadastro-container">

                <div className="cadastro-header">

                    <div>
                        <p className="cadastro-label">
                            PRODUTOS
                        </p>

                        <h1>
                            Novo produto
                        </h1>

                        <p className="cadastro-subtitulo">
                            Preencha as informações abaixo para cadastrar um produto.
                        </p>
                    </div>

                </div>


                <form onSubmit={gravar}>

                    <div className="form-grid">

                        <div className="campo">

                            <label>
                                Nome do produto
                            </label>

                            <input
                                type="text"
                                ref={nome}
                                maxLength="100"
                                placeholder="Nome do produto"
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Código
                            </label>

                            <input
                                type="text"
                                ref={codigo}
                                maxLength="20"
                                placeholder="Ex: PROD001"
                                required
                            />

                        </div>


                        <div className="campo campo-largo">

                            <label>
                                Descrição
                            </label>

                            <textarea
                                ref={descricao}
                                placeholder="Descrição do produto"
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Marca
                            </label>

                            <input
                                type="text"
                                ref={marca}
                                maxLength="100"
                                placeholder="Marca"
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Categoria
                            </label>

                            <input
                                type="text"
                                ref={categoria}
                                maxLength="100"
                                placeholder="Categoria"
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Preço
                            </label>

                            <input
                                type="number"
                                ref={preco}
                                step="0.01"
                                min="0"
                                placeholder="0.00"
                                required
                            />

                        </div>


                        <div className="campo">

                            <label>
                                Estoque
                            </label>

                            <input
                                type="number"
                                ref={estoque}
                                min="0"
                                placeholder="Quantidade"
                                required
                            />

                        </div>


                        <div className="campo campo-largo">

                            <label>
                                Data de validade
                            </label>

                            <input
                                type="date"
                                ref={data_validade}
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
                            Cadastrar produto
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