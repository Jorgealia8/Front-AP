import './menuMovil.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { aMenuItems } from '../../models/menu.model';
import AboutMePage from '../../pages/aboutMePage/aboutMePage';
import ContactPage from '../../pages/contactPage/contactPage';
import LoginPage from '../../pages/loginPage/loginPage';
import MySelectionPage from '../../pages/mySelectionPage/mySelectionPage';
import WorkoutsPage from '../../pages/workoutsPage/workoutsPage';
import { iState } from '../../store/store';
import './menu.css';
export function MenuMovil() {
    const optionsMenu: aMenuItems = [
        {
            path: 'disena',
            label: 'Diseña',
            page: <WorkoutsPage />,
            title: 'Diseña',
        },
        {
            path: 'entrena',
            label: 'Entrena',
            page: <MySelectionPage />,
            title: 'Entrena',
        },
        {
            path: 'sobremi',
            label: 'Sobre mí',
            page: <AboutMePage />,
            title: 'Sobre mí',
        },
        {
            path: 'contacto',
            label: 'Contacto',
            page: <ContactPage />,
            title: 'Contacto',
        },

        {
            path: 'login',
            label: 'Login',
            page: <LoginPage />,
            title: 'Login',
        },
    ];

    const [clicked, setClicked] = useState(false);
    function handleClick() {
        setClicked(!clicked);
    }
    const user = useSelector((store: iState) => store.user);
    function handleSubmit() {
        localStorage.clear();
        window.location.href = 'http://localhost:3000';
    }
    if (user.name !== '') {
        optionsMenu[4] = {
            path: 'login',
            label: 'Mi cuenta',
            page: <LoginPage />,
            title: 'Login',
        };
    }
    if (clicked === true) {
        if (user.name !== '') {
            return (
                <>
                    <img
                        role="button"
                        className="buttonMenu"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Fx.png?alt=media&token=d6669362-6cc9-4c90-9c05-eb7b7c9aadcf"
                        alt="Button menu"
                        onClick={handleClick}
                    />
                    <div className="menuMovil">
                        <nav>
                            <ul className="menuList">
                                {optionsMenu.map((item) => (
                                    <li className="menu__item" key={item.label}>
                                        <Link
                                            to={item.path}
                                            className="menu__link"
                                            onClick={handleClick}
                                        >
                                            <h3 className="menu__title">
                                                {item.label}
                                            </h3>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div className="wrapper_buttonLogout">
                            <button
                                className="buttonLogout"
                                onClick={() => handleSubmit()}
                            >
                                Salir
                            </button>
                        </div>
                        <a
                            className="wrapper_iconInstagram"
                            href="https://www.instagram.com/aguado.pilates/?hl=es"
                        >
                            <img
                                className="iconInstagram"
                                src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Finstagram.png?alt=media&token=7a84b08c-482c-4352-8331-b5855b9bdc17"
                                alt="Instagram"
                            />
                        </a>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <img
                        role="button"
                        className="buttonMenu"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Fx.png?alt=media&token=d6669362-6cc9-4c90-9c05-eb7b7c9aadcf"
                        alt="Button menu"
                        onClick={handleClick}
                    />
                    <div className="menuMovil">
                        <nav>
                            <ul className="menuList">
                                {optionsMenu.map((item) => (
                                    <li className="menu__item" key={item.label}>
                                        <Link
                                            to={item.path}
                                            className="menu__link"
                                            onClick={handleClick}
                                        >
                                            <h3 className="menu__title">
                                                {item.label}
                                            </h3>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <a
                            className="wrapper_iconInstagram"
                            href="https://www.instagram.com/aguado.pilates/?hl=es"
                        >
                            <img
                                className="iconInstagram"
                                src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Finstagram.png?alt=media&token=7a84b08c-482c-4352-8331-b5855b9bdc17"
                                alt="Instagram"
                            />
                        </a>
                    </div>
                </>
            );
        }
    } else {
        if (user.name !== '') {
            return (
                <>
                    <img
                        role="button"
                        className="buttonMenu"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Fbotonmenu.png?alt=media&token=705e2733-641e-4907-891b-33afd4606f7f"
                        alt="Button menu"
                        onClick={handleClick}
                    />
                </>
            );
        } else {
            return (
                <>
                    <img
                        role="button"
                        className="buttonMenu"
                        src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Fbotonmenu.png?alt=media&token=705e2733-641e-4907-891b-33afd4606f7f"
                        alt="Button menu"
                        onClick={handleClick}
                    />
                </>
            );
        }
    }
}
