import { Link, Outlet } from 'react-router-dom';

import './Layout.scss';

export default function Layout() {
    return (
        <div className="layout">

            <nav className="sidebar">

                <div className="sidebar-logo">
                    📦
                </div>

                <ul className="sidebar-menu">

                    <li>
                        <Link to="/" className="sidebar-link">
                            <span className="icone">
                                <svg viewBox="0 0 24 24">
                                    <path d="M3 10.5L12 3l9 7.5" />
                                    <path d="M5 9.5V21h14V9.5" />
                                    <path d="M9 21v-7h6v7" />
                                </svg>
                            </span>

                            <span className="tooltip">
                                Home
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/sobre" className="sidebar-link">
                            <span className="icone">
                                <svg viewBox="0 0 24 24">
                                    <circle cx="12" cy="12" r="9" />
                                    <path d="M12 10v6" />
                                    <circle
                                        cx="12"
                                        cy="7"
                                        r="0.5"
                                        fill="currentColor"
                                    />
                                </svg>
                            </span>

                            <span className="tooltip">
                                Sobre
                            </span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/produto" className="sidebar-link">
                            <span className="icone">
                                <svg viewBox="0 0 24 24">
                                    <path d="M3 7l9-4 9 4-9 4-9-4z" />
                                    <path d="M3 7v10l9 4 9-4V7" />
                                    <path d="M12 11v10" />
                                </svg>
                            </span>

                            <span className="tooltip">
                                Produtos
                            </span>
                        </Link>
                    </li>

                </ul>

            </nav>

            <main className="conteudo">
                <Outlet />
            </main>

        </div>
    );
}