import styles from "../styles/toggle.module.css";

interface ToggleProps {
	onToggle: () => null,
	isFootball: boolean
}

const Toggle = ({ onToggle, isFootball }: ToggleProps) => {
	return (
		<>
			<div className={styles.toggleContainer} onClick={onToggle}>
				<div
					className={
						isFootball ? styles.togglePillFootball : styles.togglePillVolleyball
					}>
					{isFootball ? "Football" : "Volleyball"}
				</div>
				<div className={styles.toggleText}>
					<p>Football</p>
					<p>Volleyball</p>
				</div>
			</div>
		</>
	);
};

export default Toggle;
