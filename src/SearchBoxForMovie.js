import React, { Component } from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

class SearchBoxForMovie extends Component {
	constructor(props) {
		super(props);

		this.state = {
			movieSearch: "",
			searchGenerate: "",
			movieOptions: [],
		};
		this.handleValue = this.handleValue.bind(this);
	}

	async handleValue(evt) {
		this.setState({
			searchGenerate: evt.target.value.toLowerCase().replace(/ /g, "+"),
		});
		let response = await axios.get(
			`https://api.themoviedb.org/3/search/movie?api_key=d5c94178df3eba5299cbb75cffff17b3&query=${this.state.searchGenerate}`
		);
		this.setState({ movieOptions: response.data.results });
	}

	render() {
		const { movieOptions, movieSearch } = this.state;
		return (
			<Autocomplete
				options={movieOptions}
				getOptionLabel={(option) => option.title}
				id="controlled-demo"
				onChange={(event, value) => this.props.handleChange(value)}
				renderInput={(params) => (
					<TextField
						{...params}
						label="Movie Search"
						margin="normal"
						value={movieSearch ? movieSearch : ""}
						onChange={this.handleValue}
					/>
				)}
			/>
		);
	}
}

export default SearchBoxForMovie;
