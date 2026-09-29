import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";

export default function Produto() {
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        async function consultar() {
            try {
                const resposta = await axios.get(
                    "http://localhost:8000/api/produto"
                );

                setProdutos(resposta.data);
            } catch (erro) {
                console.error("Erro ao consultar produtos:", erro);
            }
        }

        consultar();
    }, []);

   return (
    <div className="produtos-page">

        <div className="produtos-conteudo">

            <div className="produtos-header">

                <div>
                    <p className="produtos-pequeno">
                        GERENCIAMENTO
                    </p>

                    <h1 className="produtos-titulo">
                        Produtos
                    </h1>

                    <p className="produtos-subtitulo">
                        Consulte e gerencie os produtos cadastrados no sistema.
                    </p>
                </div>

                <button
                    className="botao-novo"
                    onClick={() => navigate("/produto/create")}
                >
                    + Novo Produto
                </button>

            </div>


            <div className="produtos-resumo">

                <div className="resumo-card">
                    <span className="resumo-icone">📦</span>

                    <div>
                        <span className="resumo-label">
                            Produtos cadastrados
                        </span>

                        <strong>
                            {produtos.length}
                        </strong>
                    </div>
                </div>

                <div className="resumo-card">
                    <span className="resumo-icone">📊</span>

                    <div>
                        <span className="resumo-label">
                            Itens em estoque
                        </span>

                        <strong>
                            {produtos.reduce(
                                (total, produto) =>
                                    total + Number(produto.estoque),
                                0
                            )}
                        </strong>
                    </div>
                </div>

            </div>


            <div className="produtos-tabela-container">

                <div className="tabela-header">

                    <div>
                        <h2>Lista de produtos</h2>

                        <p>
                            Produtos disponíveis no sistema
                        </p>
                    </div>

                </div>


                <div className="tabela-scroll">

                    <table className="produtos-tabela">

                        <thead>
                            <tr>
                                <th>Código</th>
                                <th>Produto</th>
                                <th>Marca</th>
                                <th>Categoria</th>
                                <th>Preço</th>
                                <th>Estoque</th>
                                <th>Validade</th>
                                <th>Ações</th>
                            </tr>
                        </thead>

                        <tbody>

                            {produtos.map((produto) => (

                                <tr key={produto.id}>

                                    <td>
                                        <span className="codigo">
                                            {produto.codigo}
                                        </span>
                                    </td>

                                    <td>
                                        <div className="produto-nome">
                                            <strong>
                                                {produto.nome}
                                            </strong>

                                            <span>
                                                {produto.descricao}
                                            </span>
                                        </div>
                                    </td>

                                    <td>
                                        {produto.marca}
                                    </td>

                                    <td>
                                        <span className="categoria">
                                            {produto.categoria}
                                        </span>
                                    </td>

                                    <td>
                                        <strong className="preco">
                                            R$ {Number(produto.preco).toFixed(2)}
                                        </strong>
                                    </td>

                                    <td>
                                        <span className="estoque">
                                            {produto.estoque}
                                        </span>
                                    </td>

                                    <td>
                                        {String(produto.data_validade).substring(0, 10)}
                                    </td>

                                    <td>
                                        <div className="acoes">

                                            <button
                                                className="botao-alterar"
                                                onClick={() =>
                                                    navigate(
                                                        `/produto/update/${produto.id}`
                                                    )
                                                }
                                            >
                                                Alterar
                                            </button>

                                            <button
                                                className="botao-excluir"
                                                onClick={() =>
                                                    navigate(
                                                        `/produto/delete/${produto.id}`
                                                    )
                                                }
                                            >
                                                Excluir
                                            </button>

                                        </div>
                                    </td>

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    </div>
);
}