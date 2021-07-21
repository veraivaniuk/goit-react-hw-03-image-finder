import Button from "../Button/Button";
//import s from "./SubmitForm.module.css";
//import PropTypes from 'prop-types';
import { Component } from "react";

class Searchbar extends Component {
  state = {
    query: "",
  };

  handleChangeName = (e) => {
    this.setState({ query: e.target.value });
    //console.log(e.target.value);
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset() {
    this.setState({
      query: "",
    });
  }

  render() {
    const { query } = this.state;

    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={query}
            onChange={this.handleChangeName}
          />
          <Button buttonName="Search" />
        </form>
      </header>
    );
  }
}

export default Searchbar;
