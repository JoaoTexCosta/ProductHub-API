import "./Sobre.css";

export default function Sobre() {
    return (
        <div className="sobre">

            <div className="sobre-conteudo">

                <p className="sobre-pequeno">
                    SOBRE O PROJETO
                </p>

                <h1>
                    Sistema de
                    <span> Produtos</span>
                </h1>

                <p className="sobre-descricao">
                    Este sistema foi desenvolvido para realizar o
                    gerenciamento de produtos de forma simples,
                    organizada e eficiente.
                </p>

                <div className="sobre-cards">

                    <div className="sobre-card">
                        <div className="sobre-card-icone">
                            ✓
                        </div>

                        <h2>CRUD completo</h2>

                        <p>
                            Permite cadastrar, consultar, alterar
                            e excluir produtos.
                        </p>
                    </div>

                    <div className="sobre-card">
                        <div className="sobre-card-icone">
                            &lt;/&gt;
                        </div>

                        <h2>API REST</h2>

                        <p>
                            O sistema utiliza uma API para
                            comunicação entre frontend e backend.
                        </p>
                    </div>

                    <div className="sobre-card">
                        <div className="sobre-card-icone">
                            ◈
                        </div>

                        <h2>Organização</h2>

                        <p>
                            Os produtos possuem informações como
                            preço, estoque, marca e validade.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    );
}