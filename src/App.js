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
				<Palette {...seedColors[3]} />
			</div>
		);
	}
}
export default App;
