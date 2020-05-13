import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./ColorHelpers";
import { Component } from "react";

class App extends Component {
	render() {
		console.log(generatePalette(seedColors[3]));
		return (
			<div>
				<Palette palette={generatePalette(seedColors[2])} />
			</div>
		);
	}
}
export default App;
