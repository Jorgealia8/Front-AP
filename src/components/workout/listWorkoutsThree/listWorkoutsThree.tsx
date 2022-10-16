import { iWorkout } from '../../../models/workout.model';
import { WorkoutHome } from '../workoutHome/workouthome';
import './listWorkoutsThree.css';

export function WorkoutListThree({ workouts }: { workouts: Array<iWorkout> }) {
    return (
        <>
            <section className="paginationWorkout">
                <ul className="workoutsList">
                    {workouts
                        .filter((workout) => workout.favorite === true)
                        .map((workout) => (
                            <li
                                className="workoutsList__workout"
                                key={workout._id}
                            >
                                <WorkoutHome workout={workout}></WorkoutHome>
                            </li>
                        ))}
                </ul>
            </section>
        </>
    );
}
