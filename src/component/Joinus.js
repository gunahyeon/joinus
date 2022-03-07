import React from "react";
import {
	Grid,
	Typography,
	TextField,
	FormControlLabel,
	Checkbox,
	Container,
	Box,
	Button,
	Avatar,
	Link,
} from "@mui/material";
import styles from "./Joinus.module.css";
import classes from "./joinusPageStyle.js";

const Joinus = () => {
	// const bodyStyle = makeStyles({
	//     body:{
	//         backgroundColor:"#F2F3F7",
	//     }
	// });
	return (
		<Box sx={classes.bodyDiv}>
			<Container sx={classes.firstContainer}>
				<Typography sx={classes.SignUp} component="div" gutterBottom>
					Sign Up Now To Begin Your Journey
				</Typography>
				<Typography sx={classes.Comment} component="div" gutterBottom>
					You are just one step away from a whole new career journey.
				</Typography>
				<Box component="img" src={"./image.png"} sx={classes.Image} />
			</Container>
			<Container>
				<Box component="form" className={styles.Form} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextField
								name="firstName"
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								id="middleName"
								label="Middle Name"
								name="middleName"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								id="surname"
								label="Surname/Family Name"
								name="surname"
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextField
								fullWidth
								name="confirmPassword"
								label="Confirm Password"
								type="password"
								id="confirmPassword"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								className={styles.CheckBoxLabel}
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I have read and agreed to the"
							/>
							<Link className={styles.Link}>terms and conditions.</Link>
						</Grid>
					</Grid>
					<Button sx={classes.signUpButton} type="submit" fullWidth>
						RESISTER NOW
					</Button>
					<Grid container>
						<Grid item></Grid>
					</Grid>
				</Box>
			</Container>
		</Box>
	);
};
export default Joinus;
