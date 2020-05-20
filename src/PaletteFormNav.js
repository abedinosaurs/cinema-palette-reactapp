import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import SearchBoxForMovie from "./SearchBoxForMovie";

const drawerWidth = 400;
const styles = (theme) => ({
	root: {
		display: "flex",
	},
	hide: {
		display: "none",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		height: "64px",
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	navControls: {
		marginRight: "1rem",
		display: "flex",
		justifyContent: "flex-end",
		alignItems: "center",
		"& a": {
			textDecoration: "none",
		},
	},
	button: {
		display: "inlineBlock",
		margin: "0 0.5rem",
	},
	searchBox: {
		alignItems: "center",
		width: "400px",
		marginBottom: "1.6rem",
		marginRight: "1rem",
	},
	titleText: {
		alignSelf: "center",
		marginLeft: "1rem",
	},
});

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = { newPaletteName: "" };
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
			this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}
	handleChange(evt) {
		this.setState({
			[evt.target.name]: evt.target.value,
		});
	}

	render() {
		const { classes, open } = this.props;
		const { newPaletteName } = this.state;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open,
					})}
				>
					<Toolbar disableGutters={!open}>
						{/* <IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.props.handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton> */}
						<Typography
							className={classes.titleText}
							variant={this.props.title.length > 30 ? "h6" : "h4"}
							color="inherit"
							noWrap
						>
							{this.props.title}

							{` (${this.props.year.substring(0, 4)})`}
						</Typography>
					</Toolbar>

					<div className={classes.navControls}>
						<div className={classes.searchBox}>
							<SearchBoxForMovie
								value={this.state.newPaletteName}
								handleChange={this.props.handleInput}
							/>
						</div>
						<ValidatorForm
							onSubmit={() => this.props.handleSubmit(this.props.title)}
						>
							<ButtonGroup variant="outlined" size="small">
								<Button onClick={this.props.randomMovie}>Random Movie</Button>
								<Button type="submit" size="small">
									Save Palette
								</Button>
								<Link to="/">
									<Button variant="outlined">Go Back</Button>
								</Link>
							</ButtonGroup>
						</ValidatorForm>
					</div>
				</AppBar>
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
