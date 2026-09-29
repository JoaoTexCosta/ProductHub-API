import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-page">

            <div className="home-conteudo">

                <p className="home-pequeno">
                    SISTEMA DE GERENCIAMENTO
                </p>

                <h1>
                    Bem-vindo ao
                    <span> Sistema de Produtos</span>
                </h1>

                <p className="home-descricao">
                    Gerencie seus produtos de forma simples,
                    organizada e eficiente.
                </p>

                <Link to="/produto" className="home-botao">
                    Ver produtos
                </Link>

            </div>

        </div>
    );
}