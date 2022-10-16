import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { aMenuItems } from '../../models/menu.model';
import AboutMePage from '../../pages/aboutMePage/aboutMePage';
import ContactPage from '../../pages/contactPage/contactPage';
import LoginPage from '../../pages/loginPage/loginPage';
import MySelectionPage from '../../pages/mySelectionPage/mySelectionPage';
import FilterPage from '../../pages/filterPage/filterPage';
import { iState } from '../../store/store';
import './menu.css';
import AllWorkoutsPage from '../../pages/workoutPage/allWorkoutsPage';

const optionsMenu: aMenuItems = [
    {
        path: 'workouts',
        label: 'Workouts',
        page: <AllWorkoutsPage />,
    },
    {
        path: 'disena',
        label: 'Diseña',
        page: <FilterPage />,
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

export function Menu() {
    const user = useSelector((store: iState) => store.user);
    if (user.name !== '') {
        optionsMenu[4] = {
            path: 'login',
            label: 'Mi cuenta',
            page: <LoginPage />,
            title: 'Login',
        };
    }
    return (
        <nav>
            <ul className="menuList">
                {optionsMenu.map((item) => (
                    <li className="menu__item" key={item.label}>
                        <Link to={item.path} className="menu__link">
                            <h3 className="menu__title">{item.label}</h3>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
