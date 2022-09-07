import { useSelector } from 'react-redux';
import { Menu } from './menu';
import { iState } from '../../store/store';
import './menuMovil.css';
export function MenuMovil({ clicked }: { clicked: boolean }) {
    const user = useSelector((store: iState) => store.user);
    function handleSubmit() {
        localStorage.clear();
        window.location.href = 'http://localhost:3000';
    }
    if (clicked === true) {
        if (user.name !== '') {
            return (
                <>
                    <div className="menuMovil">
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
                </>
            );
        } else {
            return (
                <>
                    <div className="menuMovil">
                        <Menu></Menu>
                        <div className="wrapper_buttonLogout"></div>
                    </div>
                </>
            );
        }
    } else {
        return <></>;
    }
}
