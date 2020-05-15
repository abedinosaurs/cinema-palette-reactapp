import React, { Component } from "react";
import DraggableColorList from "./DraggableColorList";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { arrayMove } from "react-sortable-hoc";
import { ChromePicker } from "react-color";

const drawerWidth = 400;

const styles = (theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
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
	hide: {
		display: "none",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: "0 8px",
		...theme.mixins.toolbar,
		justifyContent: "flex-end",
	},
	content: {
		height: "calc(100vh - 64px)",
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginLeft: 0,
	},
});

class NewPaletteForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			open: false,
			currentColor: "teal",
			colors: [],
			newColorName: "",
			newPaletteName: "",
		};
		this.updateCurrentColor = this.updateCurrentColor.bind(this);
		this.addNewColor = this.addNewColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.savePalette = this.savePalette.bind(this);
		this.removeColor = this.removeColor.bind(this);
	}

	componentDidMount() {
		ValidatorForm.addValidationRule("isColorNameUnique", (value) =>
			this.state.colors.every(
				({ name }) => name.toLowerCase() !== value.toLowerCase()
			)
		);
		ValidatorForm.addValidationRule("isColorUnique", (value) =>
			this.state.colors.every(({ color }) => color !== this.state.currentColor)
		);
		ValidatorForm.addValidationRule("isPaletteNameUnique", (value) =>
			this.props.palettes.every(
				({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
			)
		);
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	updateCurrentColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}

	addNewColor() {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName,
		};
		this.setState({
			colors: [...this.state.colors, newColor],
			newColorName: "",
		});
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	savePalette() {
		let newPaletteName = this.state.newPaletteName;
		const newPalette = {
			paletteName: newPaletteName,
			colors: this.state.colors,
			id: newPaletteName.toLowerCase().replace(/ /g, "-"),
		};
		this.props.savePalette(newPalette);
		this.props.history.push("/");
	}

	removeColor(colorName) {
		this.setState({
			colors: this.state.colors.filter((color) => color.name !== colorName),
		});
	}

	onSortEnd = ({ oldIndex, newIndex }) => {
		this.setState(({ colors }) => ({
			colors: arrayMove(colors, oldIndex, newIndex),
		}));
	};

	render() {
		const { classes } = this.props;
		const { open, currentColor, newColorName } = this.state;

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
						<IconButton
							color="inherit"
							aria-label="Open drawer"
							onClick={this.handleDrawerOpen}
							className={classNames(classes.menuButton, open && classes.hide)}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" color="inherit" noWrap>
							Persistent drawer
						</Typography>
						<ValidatorForm onSubmit={this.savePalette}>
							<TextValidator
								label="Palette Name"
								onChange={this.handleChange}
								value={this.state.newPaletteName}
								name="newPaletteName"
								validators={["required", "isPaletteNameUnique"]}
								errorMessages={[
									"Name your new palette name",
									"Palette name is already used",
								]}
							/>
						</ValidatorForm>
						<Button variant="contained" color="primary" type="submit">
							Save Palette
						</Button>
					</Toolbar>
				</AppBar>
				<Drawer
					className={classes.drawer}
					variant="persistent"
					anchor="left"
					open={open}
					classes={{
						paper: classes.drawerPaper,
					}}
				>
					<div className={classes.drawerHeader}>
						<IconButton onClick={this.handleDrawerClose}>
							<ChevronLeftIcon />
						</IconButton>
					</div>
					<Divider />
					<Typography variant="h4">Design Your Palette</Typography>
					<div>
						<Button variant="contained" color="secondary">
							{"Clear Palette"}
						</Button>
						<Button variant="contained" color="primary">
							{"Random Color"}
						</Button>
					</div>
					<ChromePicker
						color={currentColor}
						onChangeComplete={(newColor) => this.updateCurrentColor(newColor)}
					/>
					<ValidatorForm onSubmit={this.addNewColor}>
						<TextValidator
							value={newColorName}
							name="newColorName"
							onChange={this.handleChange}
							validators={["required", "isColorNameUnique", "isColorUnique"]}
							errorMessages={[
								"Name your color.",
								"Color name must be unique.",
								"Color is already being used.",
							]}
						/>
						<Button
							variant="contained"
							color="primary"
							style={{ backgroundColor: currentColor }}
							type="submit"
						>
							{"ADD COLOR"}
						</Button>
					</ValidatorForm>
				</Drawer>
				<main
					className={classNames(classes.content, {
						[classes.contentShift]: open,
					})}
				>
					<div className={classes.drawerHeader} />
					<DraggableColorList
						colors={this.state.colors}
						removeColor={this.removeColor}
						axis="xy"
						onSortEnd={this.onSortEnd}
					/>
				</main>
			</div>
		);
	}
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
