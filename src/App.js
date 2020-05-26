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
		const sitePalettes = [
			{
				movieID: 62,
				title: "2001: A Space Odyssey",
				poster: "/zmmYdPa8Lxx999Af9vnVP4XQ1V6.jpg",
				backdrop: "/spoZUN4X1KiOc5S0plOyGAXLNtb.jpg",
				id: "2001-A-Space-Odyssey",
				release: "1968",
			},
			{
				movieID: 710,
				title: "GoldenEye",
				poster: "/z0ljRnNxIO7CRBhLEO0DvLgAFPR.jpg",
				backdrop: "/vm7yMg7YiYisMSeO3mUC5NUKbSB.jpg",
				id: "GoldenEye",
				release: "1995",
			},
			{
				movieID: 25623,
				title: "HOUSE",
				poster: "/a5MOHiQhuHTR4xn2GPo8awOj4dM.jpg",
				backdrop: "/gwH3ai9WPrD2RfIF6TaaR5ATWwp.jpg",
				id: "house1977",
				release: "1977",
			},
			{
				movieID: 313369,
				title: "La La Land",
				poster: "/q0dsNZOuSKzAdZod9ohPXJ4GQUs.jpg",
				backdrop: "/qJeU7KM4nT2C1WpOrwPcSDGFUWE.jpg",
				id: "la-la-land",
				release: "2016",
			},
			{
				movieID: 530385,
				title: "Midsommar",
				poster: "/7LEI8ulZzO5gy9Ww2NVCrKmHeDZ.jpg",
				backdrop: "/g6GtOfXtzDpY73ef7wludoorTti.jpg",
				id: "midsommar",
				release: "2019",
			},
			{
				movieID: 83666,
				title: "Moonrise Kingdom",
				poster: "/wOgmhrSUwOuZJsQXf2GsI923N0f.jpg",
				backdrop: "/bsYv9IFIGfpAV0oUbe7YTiyxhox.jpg",
				id: "moonrise-kingdom",
				release: "2012",
			},
			{
				movieID: 26679,
				title: "Blade Runner 2049",
				poster: "/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
				backdrop: "/sAtoMqDVhNDQBc3QJL3RF6hlhGq.jpg",
				id: "blade-runner-2049",
				release: "2017",
			},
			{
				movieID: 26679,
				title: "Spookies",
				poster: "/mmJN1NvMIVQaWvO3iWvdSppfFy3.jpg",
				backdrop: "/9QVYbdRUPJFFlK2b3rnzjU9JM2D.jpg",
				id: "spookies",
				release: "1986",
			},
			{
				movieID: 548473,
				title: "Color Out of Space",
				poster: "/vkwgzCBBiY3C1XEy0WakYfMOvnG.jpg",
				backdrop: "/iyn2JQsftaqhQlXYaCCvn8udM5i.jpg",
				id: "color-out-of-space",
				release: "2019",
			},
		];

		this.state = {
			sitePalettes: sitePalettes,
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
