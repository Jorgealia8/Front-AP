import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { Layout } from '../../core/layout/layout';
import { aMenuItems } from '../../models/menu.model';
import AllWorkoutsPage from '../../pages/workoutPage/allWorkoutsPage';
import { loadUsersAction } from '../../redurcers/user.reducer/user.action.creators';
import { loadWorkoutsAction } from '../../redurcers/workout.reducer/workout.action.creators';
import { HttpStoreUser } from '../../services/repository.users';

import { HttpStoreWorkouts } from '../../services/repository.workouts';
import './App.css';

function App() {
    const dispatcher = useDispatch();
    const apiWorkout = useMemo(() => new HttpStoreWorkouts(), []);
    const apiUser = useMemo(() => new HttpStoreUser(), []);

    useEffect(() => {
        apiWorkout
            .getWorkouts()
            .then((workouts) => dispatcher(loadWorkoutsAction(workouts)));
        const token = localStorage.getItem('token');
        if (token) {
            apiUser.getUserByToken().then((data) => {
                dispatcher(loadUsersAction(data));
            });
        }
    }, [apiWorkout, dispatcher, apiUser]);

    const HomePage = React.lazy(() => import('../../pages/homePage/homePage'));
    const DetailsPage = React.lazy(
        () => import('../../pages/detailsPage/detailsPage')
    );
    const FilterPage = React.lazy(
        () => import('../../pages/filterPage/filterPage')
    );
    const MySelectionPage = React.lazy(
        () => import('../../pages/mySelectionPage/mySelectionPage')
    );
    const AboutMePage = React.lazy(
        () => import('../../pages/aboutMePage/aboutMePage')
    );
    const ContactPage = React.lazy(
        () => import('../../pages/contactPage/contactPage')
    );
    const LoginPage = React.lazy(
        () => import('../../pages/loginPage/loginPage')
    );

    const options: aMenuItems = [
        {
            path: 'workouts',
            label: 'Workouts',
            page: <AllWorkoutsPage />,
        },
        { path: '', label: 'home', page: <HomePage />, title: 'Home' },
        {
            path: 'details/:id',
            label: '',
            page: <DetailsPage />,
            title: '',
        },
        {
            path: 'disena',
            label: 'Dise??a',
            page: <FilterPage />,
            title: 'Dise??a',
        },
        {
            path: 'entrena',
            label: 'Entrena',
            page: <MySelectionPage />,
            title: 'Entrena',
        },
        {
            path: 'sobremi',
            label: 'sobre m??',
            page: <AboutMePage />,
            title: 'Sobre m??',
        },
        {
            path: 'contacto',
            label: 'contacto',
            page: <ContactPage />,
            title: 'Contacto',
        },
        {
            path: 'Login',
            label: 'Login',
            page: <LoginPage />,
            title: 'Login',
        },
        {
            path: '*',
            label: '',
            page: <Navigate replace to="" />,
            title: '',
        },
    ];

    return (
        <Router>
            <Layout>
                <React.Suspense>
                    <React.StrictMode>
                        <Routes>
                            {options.map((item) => (
                                <Route
                                    key={item.label}
                                    path={item.path}
                                    element={item.page}
                                ></Route>
                            ))}
                        </Routes>
                    </React.StrictMode>
                </React.Suspense>
            </Layout>
        </Router>
    );
}

export default App;
