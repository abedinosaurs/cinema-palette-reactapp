export default {
	Navbar: {
		position: "absolute",
		zIndex: 20,
		width: "100vw",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		height: "35px",
		backgroundColor: "#eceff1",
		fontFamily: "Roboto,Helvetica, Arial, sans-serif",
		"& h1": {
			fontWeight: 400,
			"@media screen and (max-width: 600px)": {
				maxWidth: 400,
				textOverflow: "ellipsis",
				marginTop: 22,
				paddingLeft: 25,
			},
		},
	},
	logo: {
		fontSize: "21px",
		backgroundColor: "#eceff1",
		height: "95%",
		fontFamily: "Oswald, sans-serif",
		letterSpacing: "2px",
		"& a": {
			position: "absolute",
			top: 2,
			left: 15,
			textDecoration: "none",
			color: "black",
		},
		"& svg": {
			position: "fixed",
			paddingLeft: ".2rem",
			height: "2.3rem",
			marginBottom: 2,
		},
	},
	logoTitle: {
		"@media (max-width: 600px)": {
			display: "none",
		},
	},
	logoArrow: {
		display: "none",
		"@media (max-width: 800px)": {
			display: "inline",
		},
	},
};
