import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { iState } from '../../store/store';
import { Menu } from '../menu/menu';
import { MenuMovil } from '../menu/menuMovil';
import './header.css';

export function Header() {
    const user = useSelector((store: iState) => store.user);
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked(!clicked);
    }

    function handleSubmit() {
        localStorage.clear();
        window.location.href = 'http://localhost:3000';
    }
    if (user.name !== '') {
        if (clicked === false) {
            return (
                <>
                    <div className="header">
                        <Link to="">
                            <img
                                className="logo"
                                src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/home%2Flogo.png?alt=media&token=580386eb-e5e2-4172-8bfa-26984e46905e"
                                alt="Logo Aguado Pilates"
                            />
                        </Link>
                        <img
                            role="button"
                            className="buttonMenu"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Fbotonmenu.png?alt=media&token=705e2733-641e-4907-891b-33afd4606f7f"
                            alt="Button menu"
                            onClick={handleClick}
                        />

                        <MenuMovil clicked={clicked}></MenuMovil>
                        <div className="menu">
                            <Menu></Menu>
                            <div className="wrapper_buttonLogout">
                                <button
                                    className="buttonLogout"
                                    onClick={() => handleSubmit()}
                                >
                                    Salir
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="header">
                        <Link to="">
                            <img
                                className="logo"
                                src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/home%2Flogo.png?alt=media&token=580386eb-e5e2-4172-8bfa-26984e46905e"
                                alt="Logo Aguado Pilates"
                            />
                        </Link>
                        <img
                            role="button"
                            className="buttonMenu"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Fx.png?alt=media&token=d6669362-6cc9-4c90-9c05-eb7b7c9aadcf"
                            alt="Button menu"
                            onClick={handleClick}
                        />

                        <MenuMovil clicked={clicked}></MenuMovil>
                        <div className="menu">
                            <Menu></Menu>
                            <div className="wrapper_buttonLogout">
                                <button
                                    className="buttonLogout"
                                    onClick={() => handleSubmit()}
                                >
                                    Salir
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            );
        }
    } else {
        if (clicked === false) {
            return (
                <>
                    <div className="header">
                        <Link to="">
                            <img
                                className="logo"
                                src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/home%2Flogo.png?alt=media&token=580386eb-e5e2-4172-8bfa-26984e46905e"
                                alt="Logo Aguado Pilates"
                            />
                        </Link>
                        <img
                            role="button"
                            className="buttonMenu"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Fbotonmenu.png?alt=media&token=705e2733-641e-4907-891b-33afd4606f7f"
                            alt="Button menu"
                            onClick={handleClick}
                        />
                        <MenuMovil clicked={clicked}></MenuMovil>
                        <div className="menu">
                            <Menu></Menu>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div className="header">
                        <Link to="">
                            <img
                                className="logo"
                                src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/home%2Flogo.png?alt=media&token=580386eb-e5e2-4172-8bfa-26984e46905e"
                                alt="Logo Aguado Pilates"
                            />
                        </Link>
                        <img
                            role="button"
                            className="buttonMenu"
                            src="https://firebasestorage.googleapis.com/v0/b/aguado-pilates.appspot.com/o/iconos%2Fx.png?alt=media&token=d6669362-6cc9-4c90-9c05-eb7b7c9aadcf"
                            alt="Button menu"
                            onClick={handleClick}
                        />
                        <MenuMovil clicked={clicked}></MenuMovil>
                        <div className="menu">
                            <Menu></Menu>
                        </div>
                    </div>
                </>
            );
        }
    }
}
