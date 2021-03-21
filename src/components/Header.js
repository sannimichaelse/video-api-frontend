import PropTypes from "prop-types";
import Button from "../components/Button";

const Header = ({ title, onAdd, showAddVideo }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddVideo ? "red" : "green"}
        text={showAddVideo ? "Close " : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Video API",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
