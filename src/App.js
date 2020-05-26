import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";
import { generatePalette } from "./ColorHelpers";
import { Component } from "react";

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
		this.state = {
			sitePalettes: seedColors,
			newPalettes: savedPalettes || [],
		};
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.syncLocalStorage = this.syncLocalStorage.bind(this);
	}

	findPalette(id) {
		const allPalettes = [...this.state.sitePalettes, ...this.state.newPalettes];
		return allPalettes.find(function (palette) {
			return palette.id === id;
		});
	}

	savePalette(newPalette) {
		this.setState(
			{ newPalettes: [newPalette, ...this.state.newPalettes] },
			this.syncLocalStorage
		);
	}

	syncLocalStorage() {
		window.localStorage.setItem(
			"palettes",
			JSON.stringify(this.state.newPalettes)
		);
	}

	render() {
		return (
			<Switch>
				<Route
					exact
					path="/palette/new"
					render={(routeProps) => (
						<NewPaletteForm
							savePalette={this.savePalette}
							{...routeProps}
							palettes={this.state.palettes}
						/>
					)}
				/>
				<Route
					exact
					path="/palette/:paletteId/:colorId"
					render={(routeProps) => (
						<SingleColorPalette
							colorId={routeProps.match.params.colorId}
							palette={generatePalette(
								this.findPalette(routeProps.match.params.paletteId)
							)}
						/>
					)}
				/>
				<Route
					exact
					path="/"
					render={(routeProps) => (
						<PaletteList
							sitePalettes={this.state.sitePalettes}
							newPalettes={this.state.newPalettes}
							{...routeProps}
						/>
					)}
				/>
				<Route
					exact
					path="/palette/:id"
					render={(routeProps) => (
						<Palette
							palette={this.findPalette(routeProps.match.params.id)}
							{...routeProps}
							// palette={generatePalette(
							// 	this.findPalette(routeProps.match.params.id)
							// )}
						/>
					)}
				/>
			</Switch>
		);
	}
}
export default App;
