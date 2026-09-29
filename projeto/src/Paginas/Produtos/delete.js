import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./estilodlt.scss";

export default function ProdutoDelete() {

    const { id } = useParams();
    const navigate = useNavigate();

    const [produto, setProduto] = useState(null);
    const [status, setStatus] = useState("");


    useEffect(() => {

        async function consultar() {

            try {

                const resposta = await axios.get(
                    `http://localhost:8000/api/produto/${id}`
                );

                setProduto(resposta.data);

            } catch (erro) {

                console.error(erro);

                setStatus("Erro ao consultar produto.");

            }
        }

        consultar();

    }, [id]);


    async function excluir() {

        try {

            await axios.delete(
                `http://localhost:8000/api/produto/${id}`
            );

            navigate("/produto");

        } catch (erro) {

            console.error(erro);

            setStatus("Erro ao excluir produto.");

        }
    }


    if (!produto) {

        return (
            <div className="exclusao-page">

                <div className="exclusao-container">

                    <p>Carregando produto...</p>

                </div>

            </div>
        );

    }


    return (

        <div className="exclusao-page">

            <div className="exclusao-container">

                <div className="exclusao-header">

                    <p className="exclusao-label">
                        PRODUTOS
                    </p>

                    <h1>
                        Excluir produto
                    </h1>

                    <p className="exclusao-subtitulo">
                        Confirme a exclusão do produto selecionado.
                    </p>

                </div>


                <div className="produto-info">

                    <div>
                        <span>Nome</span>
                        <strong>{produto.nome}</strong>
                    </div>

                    <div>
                        <span>Código</span>
                        <strong>{produto.codigo}</strong>
                    </div>

                    <div>
                        <span>Marca</span>
                        <strong>{produto.marca}</strong>
                    </div>

                </div>


                <div className="exclusao-aviso">

                    <strong>
                        Atenção
                    </strong>

                    <p>
                        Esta ação irá remover o produto do sistema e não poderá
                        ser desfeita.
                    </p>

                </div>


                <div className="exclusao-acoes">

                    <button
                        className="botao-cancelar"
                        onClick={() => navigate("/produto")}
                    >
                        Cancelar
                    </button>

                    <button
                        className="botao-excluir"
                        onClick={excluir}
                    >
                        Excluir produto
                    </button>

                </div>


                {status && (

                    <div className="exclusao-status">
                        {status}
                    </div>

                )}

            </div>

        </div>

    );
}