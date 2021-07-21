//import s from "./Button.module.css";
import PropTypes from "prop-types";
function Button({ buttonName }) {
  return (
    <button className="SearchForm-button" type="submit">
      <span className="SearchForm-button-label">{buttonName}</span>
    </button>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};

export default Button;
