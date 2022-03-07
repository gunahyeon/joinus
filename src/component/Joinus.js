import React from 'react';
import {Grid, Typography, TextField, FormControlLabel, Checkbox, Container, Box, Button, Avatar, Link} from '@mui/material';
import styles from "./Joinus.module.css";
const Joinus = () =>{
    return (
        <div component="html" varient="html" className={styles.Main}>
        <div className={styles.Flex}>
            <Container>
                <Typography className={styles.SignUp} component="h1" variant="h5">
                Sign Up Now To Begin Your Journey
                </Typography>
                <Typography className={styles.Comment} component="h3">
                You are just one step away from a whole new career journey.
                </Typography>
                <img className={styles.Image} src="./image.png"/>
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
                <Button
                className={styles.Button}
                type="submit"
                fullWidth
                variant="contained"
                >
                RESISTER NOW
                </Button>
                <Grid container>
                <Grid item>
                </Grid>
                </Grid>
            </Box>
            </Container>
        </div>
        </div>
    );
}
export default Joinus;