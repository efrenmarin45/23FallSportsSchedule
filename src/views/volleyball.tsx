import { VolleyballSchedule } from "../components/schedule";
import styles from "../styles/volleyball.module.css";

const Volleyball = () => {
	return (
		<div className={styles.volleyballContainer}>
			<VolleyballSchedule />
		</div>
	);
};

export default Volleyball;
