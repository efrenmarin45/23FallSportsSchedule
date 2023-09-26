import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "../styles/schedule.module.css";

function createData(
	date: string,
	time: string,
	opponent: string,
	location: string
) {
	return { date, time, opponent, location };
}

const footballRows = [
	createData("Saturday 9/23", "1:00pm", "MR Maria Regina", "Verb Dei HS Fld"),
	createData("Saturday 9/30", "1:00pm", "MIKE St. Michael", "Verb Dei HS Fld"),
	createData("Sunday 10/1", "1:00pm", "MIG San Miguel", "Verb Dei HS Fld"),
	createData(
		"Saturday 10/7",
		"5:00pm",
		"ALG St. Albert the Great",
		"Verb Dei HS Fld"
	),
	createData(
		"Saturday 10/14",
		"12:00pm",
		"BRIN St. Lawrence Brindisi",
		"Verb Dei HS Fld"
	),
	createData(
		"Saturday 10/21",
		"1:00pm",
		"NTLA Nativity (LA)",
		"Verb Dei HS Fld"
	),
	createData(
		"Saturday 10/28",
		"5:00pm",
		"CRYS St. John Chrysostom",
		"Verb Dei HS Fld"
	),
];

const volleyballRows = [
	createData(
		"Saturday 9/23",
		"11:00am",
		"ALG St. Albert the Great",
		"St. Albert Gym"
	),
	createData("Saturday 9/30", "4:00pm", "VIS Visitation", "St. Mary’s Acad"),
	createData("Saturday 10/7", "9:00am", "ODI St. Odilla", "St. Albert Gym"),
	createData("Saturday 10/14", "10:00am", "MR Maria Regina", "St. Albert Gym"),
	createData("Sunday 10/15", "1:00pm", "JOEH St. Joseph(H)", "St. Albert Gym"),
	createData(
		"Saturday 10/21",
		"10:00am",
		"BRIN St. Lawrence Brindisi",
		"St. Albert Gym"
	),
	createData("Sunday 10/22", "2:00pm", "MIG San Miguel", "St. Albert Gym"),
];

export const FootballSchedule = () => {
	return (
		<>
			<TableContainer className={styles.tableContainer}>
				<Table
					className={styles.dateTable}
					size='small'
					aria-label='simple table'
					>
					<TableHead className={styles.tableHeader}>
						<TableRow>
							<TableCell
								sx={{
									backgroundColor: "rgb(18, 70, 154, .70)",
									color: "#ffffff",
									textShadow: "0px 1px 1px black",
									fontSize: "1.5rem",
									fontWeight: "bold"
								}}
								align='center'
								colSpan={4}>
								2023 OLV Flag Football Schedule
							</TableCell>
						</TableRow>
						<TableRow
							sx={{ backgroundColor: "rgb(18, 70, 154, .70)" }}
							className={styles.headerRow}>
							<TableCell
								sx={{ fontWeight: "bold", color: "white" }}
								className={styles.headerItem}>
								Date
							</TableCell>
							<TableCell
								sx={{ fontWeight: "bold", color: "white" }}
								align='center'>
								Time
							</TableCell>
							<TableCell
								sx={{ fontWeight: "bold", color: "white" }}
								align='center'>
								Versus
							</TableCell>
							<TableCell
								sx={{ fontWeight: "bold", color: "white" }}
								align='center'>
								Location
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{footballRows.map((row) => (
							<TableRow
								hover
								key={row.date}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{row.date}
								</TableCell>
								<TableCell align='center'>{row.time}</TableCell>
								<TableCell align='center'>{row.opponent}</TableCell>
								<TableCell align='center'>{row.location}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};

export const VolleyballSchedule = () => {
	return (
		<>
			<TableContainer className={styles.tableContainer}>
				<Table
					className={styles.dateTable}
					size='small'
					aria-label='simple table'>
					<TableHead className={styles.tableHeader}>
						<TableRow>
							<TableCell
								sx={{
									backgroundColor: "rgb(18, 70, 154, .70)",
									color: "#ffffff",
									textShadow: "0px 1px 1px black",
									fontSize: "1.5rem",
									fontWeight: "bold"
								}}
								align='center'
								colSpan={4}>
								2023 OLV Volleyball Schedule
							</TableCell>
						</TableRow>
						<TableRow
							sx={{ backgroundColor: "rgb(18, 70, 154, .70)" }}
							className={styles.headerRow}>
							<TableCell
								sx={{ fontWeight: "bold", color: "white" }}
								className={styles.headerItem}>
								Date
							</TableCell>
							<TableCell
								sx={{ fontWeight: "bold", color: "white" }}
								align='center'>
								Time
							</TableCell>
							<TableCell
								sx={{ fontWeight: "bold", color: "white" }}
								align='center'>
								Versus
							</TableCell>
							<TableCell
								sx={{ fontWeight: "bold", color: "white" }}
								align='center'>
								Location
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{volleyballRows.map((row) => (
							<TableRow
								hover
								key={row.date}
								sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
								<TableCell component='th' scope='row'>
									{row.date}
								</TableCell>
								<TableCell align='center'>{row.time}</TableCell>
								<TableCell align='center'>{row.opponent}</TableCell>
								<TableCell align='center'>{row.location}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</>
	);
};
