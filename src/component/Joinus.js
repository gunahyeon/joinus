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
	Link,
    InputAdornment,
    Alert
} from "@mui/material";
import classes from "./joinusPageStyle.js";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {useFormik} from "formik";
import * as yup from 'yup'; //왜 * as을 해야하는거지..
import { joinus } from "../store/joinus";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const Joinus = () => {
        const join = useSelector((state)=>state.user);
        console.log(join);
        const dispatch = useDispatch(); 

        const [passwordType, setPasswordType] = React.useState({
            type:'password',
            visible:false,
        });
        const [confirmPasswordType, setConfirmPasswordType] = React.useState({
            type:'password',
            visible:false,
        });

        const handlePasswordType = (e) => {
            setPasswordType(()=>{
                if (!passwordType.visible) {
                    return { type: 'text', visible: true };
                }
                return { type: 'password', visible: false };
            })
        }
        const handleConfirmPasswordType = (e) => {
            setConfirmPasswordType(()=>{
                if (!confirmPasswordType.visible) {
                    return { type: 'text', visible: true };
                }
                return { type: 'password', visible: false };
            })
        } //한개로 합치고 싶다..
        // const [passwordType1, setPasswordType1] = React.useState({
        //     type:'password',
        //     visible:false,
        // });
        // const handlePasswordType1 = (e) => {
        //     setPasswordType1(()=>{
        //         if (!passwordType1.visible) {
        //             return { type: 'text', visible: true };
        //         }
        //         return { type: 'password', visible: false };
        //     })
        // }
            
        const formik = useFormik({
        initialValues: {
            firstName: '',
            middleName: '',
            surname:'',
            email: '',
            password:'',
            confirmPassword:'',
            checkTerms:false,
        },
        validationSchema: yup.object({
            firstName: yup.string()
            .max(100, '* Must be 100 characters or less')
            .required('* Please enter your first name'),
            middleName: yup.string()
            .max(100, '* Must be 100 characters or less')
            .required('* Please enter your middle name'),
            surname: yup.string()
            .max(100, '* Must be 100 characters or less')
            .required('* Please enter your last name'),
            email: yup.string().email('* Invalid email address').required('* Please enter your email address'),
            password: yup.string().min(10,'* Must be 10 characters or more').required('* Password is required')            
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
                "* Must Contain 1 Uppercase, 1 Lowercase, 1 Number and 1 special case Character"
            ),
            confirmPassword: yup.string().required('* Please confirm your password').oneOf([yup.ref('password'), null],'* password is not matched'),
            checkTerms: yup.boolean()
            .required("* The terms and conditions must be accepted.")
            .oneOf([true], "* The terms and conditions must be accepted.")
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            // successAlert(values);
            dispatch(joinus(values));
            // joinWelcome(values);
            // return(<div>{values}</div>)
            // JSON.stringify(values, null, 2)
            // console.log(alert);
        },
        });
        // const joinWelcome = (values) => {
        //     // alert(JSON.stringify(values, null, 2));
        //     return (<div>
        //     <Alert
        //       action={
        //         <Button color="inherit" size="small">
        //           UNDO
        //         </Button>
        //       }
        //     >
        //       {JSON.stringify(values, null, 2)}
        //     </Alert>
        //     </div>);
        // }
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
			<Container sx={classes.secondContainer}>
				<Box component="form" onSubmit={formik.handleSubmit} sx={classes.Form} sx={{ mt: 3 }}>
					<Grid container spacing={2}>
						<Grid sx={classes.Grid} item xs={6} sm={6}>
							<TextField
								name="firstName"
								fullWidth
								id="firstName"
								label="First Name"
								autoFocus
                                {...formik.getFieldProps('firstName')}
							/>
                            {formik.touched.firstName && formik.errors.firstName ? (
                            <Box sx={classes.Errors}>{formik.errors.firstName}</Box>
                            ) : null}
						</Grid>
						<Grid sx={classes.Grid} item xs={6} sm={6}>
							<TextField
								fullWidth
								id="middleName"
								label="Middle Name"
								name="middleName"
                                {...formik.getFieldProps('middleName')}
							/>
                            {formik.touched.middleName && formik.errors.middleName ? (
                            <Box sx={classes.Errors}>{formik.errors.middleName}</Box>
                            ) : null}                            
						</Grid>
						<Grid sx={classes.Grid} item xs={12}>
							<TextField
								fullWidth
								id="surname"
								label="Surname/Family Name"
								name="surname"
                                {...formik.getFieldProps('surname')}
							/>
                            {formik.touched.surname && formik.errors.surname ? (
                            <Box sx={classes.Errors}>{formik.errors.surname}</Box>
                            ) : null}                            
						</Grid>
						<Grid sx={classes.Grid} item xs={12}>
							<TextField
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
                                {...formik.getFieldProps('email')}
							/>
                            {formik.touched.email && formik.errors.email ? (
                            <Box sx={classes.Errors}>{formik.errors.email}</Box>
                            ) : null}
						</Grid>
						<Grid sx={classes.Grid} item xs={6} sm={6}>
							<TextField
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end" onClick={handlePasswordType}>
                                        {passwordType.visible? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </InputAdornment>
                                    ),
                                }}
								fullWidth
								name="password"
								label="Password"
								type={passwordType.type}
								id="password"
                                autoComplete='new-password'
                                {...formik.getFieldProps('password')}
							/>
                            {formik.touched.password && formik.errors.password ? (
                            <Box sx={classes.Errors}>{formik.errors.password}</Box>
                            ) : null}
						</Grid>
						<Grid sx={classes.Grid} item xs={6} sm={6}>
							<TextField
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="end" onClick={handleConfirmPasswordType}>
                                        {confirmPasswordType.visible? <VisibilityIcon /> : <VisibilityOffIcon />}
                                    </InputAdornment>
                                    ),
                                }}                            
								fullWidth
								name="confirmPassword"
								label="Confirm Password"
								type={confirmPasswordType.type}
								id="confirmPassword"
                                autoComplete='confirm-password'
                                {...formik.getFieldProps('confirmPassword')}
							/>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <Box sx={classes.Errors}>{formik.errors.confirmPassword}</Box>
                            ) : null}
						</Grid>
						<Grid sx={classes.Grid} item xs={12}>
							<FormControlLabel
								sx={classes.CheckBoxLabel}
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I have read and agreed to the"
                                {...formik.getFieldProps('checkTerms')}
							/>
							<Link sx={classes.Link}>terms and conditions.</Link>
                            {formik.touched.checkTerms && formik.errors.checkTerms ? (
                            <Box sx={classes.Errors}>{formik.errors.checkTerms}</Box>
                            ) : null}        
						</Grid>
					</Grid>
					<Button sx={classes.signUpButton} type="submit" fullWidth>
						RESISTER NOW
					</Button>
				</Box>
			</Container>
		</Box>
	);
};
export default Joinus;
