import { FootballSchedule } from "../components/schedule";
import styles from "../styles/football.module.css";

const Football = () => {
	return (
		<div className={styles.footballContainer}>
            <FootballSchedule />
		</div>
	);
};

export default Football;
