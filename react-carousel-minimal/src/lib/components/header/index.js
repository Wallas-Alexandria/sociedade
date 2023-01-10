import './main.css'
import { useState } from 'react';
import { act } from 'react-dom/cjs/react-dom-test-utils.production.min';

function Menu() {
    const [active, setMode] = useState(false);
    const ToggleMode = () => {
        setMode(!active)
    }


    return (
        <header className="header">
            <img className="logo" src="./imagens/logoMobile.png" alt="Logo do site" />
            <div className="menu__conteiner">
                <img className={active ? "menu__icon menu__icon--ative" : "menu__icon"} src="./imagens/menuIcon.svg" alt="Icone menu" onClick={ToggleMode} />
                <div className={active ? "menu__responsivo menu__responsivo--ative" : "menu__responsivo"}>
                    <nav>
                        <ul className={active ? "menu__links menu__links--active" : "menu__links"}>
                            <li><a href="" className="menu__link">Home</a></li>
                            <li><a href="" className="menu__link">Quem Somos</a></li>
                            <li><a href="" className="menu__link"> Projetos</a></li>
                            <li><a href="" className="menu__link">Galeria</a></li>
                            <li><a href="" className="menu__link">Contato</a></li>
                        </ul>
                    </nav>

                    <button className={active ? "botao botao--ative" : "botao"}>Doe Agora</button>
                </div>
            </div>

        </header>
    )
}

export default Menu