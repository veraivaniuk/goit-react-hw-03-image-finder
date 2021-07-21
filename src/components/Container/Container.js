import s from "./Container.module.css";
import PropTypes from "prop-types";
const Container = ({ children }) => {
  return <div className="App">{children}</div>;
};
Container.propTypes = {
  children: PropTypes.node,
};
export default Container;
