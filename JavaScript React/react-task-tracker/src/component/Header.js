import PropTypes from "prop-types";
import "./Header.css";
const header = (props) => {
    return(
        <header>
            <h1 style={headingStyle}>Hello, {props.title}</h1>
            <h2 className="h2Head">H2 Heading</h2>
            <h3 id="h3Head">H3 Heading</h3>
            <button className="btn">Add</button>
        </header>
    );
};

const headingStyle ={
    color: "darkcyan",
    backgroundColor: "lightblue",
    textAlign: "center",
};

header.defaultProps = {
    title:"Task Tracker",
};

header.propTypes = {
    title:PropTypes.string.isRequired,
};
export default header;

//const header = ({ title }) =>
//<h1>hello, {title}</h1>   