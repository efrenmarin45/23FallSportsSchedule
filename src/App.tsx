import { useState } from "react";
import "./App.css";
import Football from "./views/football";
import Volleyball from "./views/volleyball";
import Toggle from "./components/toggle";
import Logo from "./components/logo";
import styles from "./styles/app.module.css";

function App() {
	const [isFootball, setIsFootball] = useState(true);

	const checkSport = () => {
		setIsFootball((prev) => !prev);
	};

	return (
		<div className={styles.container}>
			<Logo />
			<Toggle onToggle={checkSport} isFootball={isFootball} />
			{isFootball ? <Football /> : <Volleyball />}
		</div>
	);
}

export default App;
