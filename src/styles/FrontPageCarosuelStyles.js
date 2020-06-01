export default {
	root: {
		background:
			"linear-gradient(90deg, rgba(3,2,3,1) 8%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 77%, rgba(0,0,0,1) 100%)",
	},
	movieImage: {
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",

		"& img": {
			zIndex: -1,
			position: "relative",
			right: 0,
			top: 0,
			paddingTop: "",
			width: "75%",
			height: "90%",
		},
		"& h1": {
			position: "absolute",
			right: "10vw",
			top: "60vh",
			color: "white",
			textShadow: "-2px 2px 2px #000000",
			zIndex: 20,
			fontFamily: "Notable, sans-serif",
			letterSpacing: "4px",
			cursor: "pointer",
		},
	},
	swatchContainer: {
		zIndex: 20,
		border: "5px solid white",
		backgroundColor: "white",
		position: "absolute",
		bottom: "27px",
		display: "flex",
		justifyContent: "space-between",
		width: "100%",
		height: 100,
	},
	paletteSwatches: {
		height: "100%",
		width: "calc(98%/6)",
		justifyContent: "center",
	},
	overlay: {
		position: "absolute",
		zIndex: 100,
		top: 40,
		background: " rgba(0, 0, 0, 0.5)",
		color: "#f1f1f1",
		width: "100%",
	},
	posterImage: {
		position: "absolute",
		zIndex: -1,
		left: 150,
		top: 0,
		height: "80%",
	},
	cinemaPalette: {
		position: "absolute",
		color: "white",
		top: 310,
		left: 20,
		zIndex: 20,
		textShadow: "-3px 3px 3px #000000",
		width: "30%",

		"& h1": {
			marginBottom: 0,
			fontFamily: "Oswald, sans-serif",
			letterSpacing: "2px",
		},
		"& h4": {
			marginTop: ".33rem",
			marginLeft: ".25rem",
			width: "90%",
		},
		"& svg": {
			position: "relative",
			paddingLeft: ".25rem",
			top: 12,
			fill: "white",
			height: "3rem",
			margin: "none",
		},
		"& a": {
			color: "white",
		},
	},
};
