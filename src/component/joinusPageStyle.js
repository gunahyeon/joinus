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
		position: "relative",
		height: "auto",
		backgroundColor: "#F2F3F7 !important",
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
	},
	SignUp: {
		fontSize: "45px",
		fontWeight: "700",
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
		marginTop: "24px",
		marginBottom: "16px",
		"&:hover": {
			opacity: "0.9",
			backgroundColor: "#6C7AF5",
		},
		color: "#ffffff",
		fontSize: "16px",
	},
	Link: {
		color: "#9437AC",
		textDecoration: "none !important",
	},
	CheckBoxLabel: {
		marginRight: "5px !important",
	},
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
