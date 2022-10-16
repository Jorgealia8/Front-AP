import { useSelector } from 'react-redux';
import { iState } from '../../store/store';
import { Link } from 'react-router-dom';
import './allWorkoutsPage.css';

export function AllWorkoutsPage() {
    const workouts = useSelector((store: iState) => store.workouts);
    return (
        <>
            <h3 className="allWorkoutsTitle">Workouts</h3>
            <section className="ListAllWorkouts">
                {workouts.map((item) => (
                    <Link to={'/details/' + item._id}>
                        <img
                            className="AllImage"
                            src={item.image}
                            alt="imagen entrenamiento"
                        />
                    </Link>
                ))}
            </section>
        </>
    );
}
export default AllWorkoutsPage;
