import PropTypes from "prop-types";
const header = (props) => {
    return(
        <header>
            <h1>Hello, {props.title}</h1>
        </header>
    );
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