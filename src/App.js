import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import NewPaletteForm from "./NewPaletteForm";
import { Component } from "react";
import { sitePalettes } from "./MovieSeedData";

class App extends Component {
	constructor(props) {
		super(props);
		//Find Locally saved palettes.
		const savedPalettes = JSON.parse(window.localStorage.getItem("palettes"));
		this.state = {
			sitePalettes: sitePalettes,
			newPalettes: savedPalettes || [],
		};
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.syncLocalStorage = this.syncLocalStorage.bind(this);
	}
	// combine all the saved and seeded palettes.
	findPalette(id) {
		const allPalettes = [...this.state.sitePalettes, ...this.state.newPalettes];
		return allPalettes.find(function (palette) {
			return palette.id === id;
		});
	}
	//Add saved palette to array
	savePalette(newPalette) {
		this.setState(
			{ newPalettes: [newPalette, ...this.state.newPalettes] },
			this.syncLocalStorage
		);
	}
	//Add saved palette to array local storage.
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
						/>
					)}
				/>
			</Switch>
		);
	}
}
export default App;
