import PropTypes from "prop-types";
import "./Header.css";
import Button from "./Button/Button";
const header = ({title}) => {
    const onClick = (e) => {
        console.log('Click', e);
    }
    return(
        <header>
            {/* <h1 style={headingStyle}>Hello, {props.title}</h1> */}
            <h1>Hello,{title}</h1>
            {/* <h2 className="h2Head">H2 Heading</h2>
            <h3 id="h3Head">H3 Heading</h3> */}
            <Button onClick={onClick} color="green" text="Hello"/>
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