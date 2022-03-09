/**
 * 
 * body{
    background-color:"#F2F3F7" !important;
}


}
.Comment{
    color: #9E9E9E ;
    float:left;
}
.SignUp{
    float:left;
}
.Image{
    float: left;
    width: 80%;
    height: 80%;
}
.Form{
    border: 2px solid black !important;
    border-radius: 1%;
    padding: 15px;
}
.Button{
    background-color: #6C7AF5 !important;
    margin-top: 24px;
    margin-bottom: 16px;
}
.Button:hover{
    opacity: 0.9;

    background-color: #6C7AF5;
}
.Link{
    color:#9437AC !important;
    text-decoration: none !important;
}
.CheckBoxLabel{
    margin-right: 5px !important;
}
/*
버튼 : #6C7AF5
링크 : #9437AC
폰트 : #9E9E9E
바탕 : #F2F3F7
*/

const joinusPageStyle = {
	body: {
		backgroundColor: "#F2F3F7 !important",
	},
	bodyDiv: {
		display: "flex",
		justifyContent: "space-between",
		width: "100vw",
		minHeight: "100vh",
		margin: "auto",
		alignItems: "center",
		height: "auto",
		backgroundColor: "#F2F3F7 !important",
		"@media (max-width: 992px)": {
			flexDirection:"column",
			justifyContent:"center"
		},
	},
	firstContainer: {
		"& img": {
			"@media (max-width: 992px)": {
				display: "none",
			},
		},
	},
	Comment: {
		color: "#9E9E9E",
		fontSize: "25px",
		"@media (max-width: 992px)": {
			fontSize:"15px",
		},
	},
	SignUp: {
		fontSize: "45px",
		fontWeight: "700",
		"@media (max-width: 992px)": {
			fontSize:"35px",
		},
		"@media (max-width: 672px)": {
			fontSize:"25px",
		},
	},
	Image: {
		float: "left",
		width: "80%",
		height: "80%",
	},
	Form: {
		border: "2px solid black !important",
		borderRadius: "1%",
		padding: "15px",
	},
	signUpButton: {
		backgroundColor: "#6C7AF5",
		marginTop:"15px",
		"&:hover": {
			opacity: "0.9",
			backgroundColor: "#6C7AF5",
		},
		"@media (max-width: 992px)": {
			marginTop:"24px",
		},
		color: "#ffffff",
		fontSize: "16px",
	},
	Link: {
		color: "#9437AC",
		textDecoration: "none !important",
		float:"left",
		marginTop:"7px",
		height:"42px",
	},
	CheckBoxLabel: {
		marginRight: "5px !important",
		float:"left",
	},
	Errors:{
		color:"red",
		fontSize:"12px",
		textAlign:"left",
		position:"absolute",
		top:"70px",
	},
	Grid:{
		height:"85px",
		position:"relative",
	}
};

export default joinusPageStyle;

/**
 * 
 * "@media (min-width: 576px)": {
			maxWidth: "576px",
		},
		"@media (min-width: 768px)": {
			maxWidth: "768px",
		},
		"@media (min-width: 992px)": {
			maxWidth: "992px",
		},
		"@media (min-width: 960px)": {
			maxWidth: "90vw",
		},
		"@media (min-width: 992px)": {
			maxWidth: "90vw",
		},
		"@media (min-width: 1200px)": {
			maxWidth: "90vw",
		},
 */
