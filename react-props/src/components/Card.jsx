import PropTypes from "prop-types";

/**
 * Component kita mestilah menerima parameter "props".
 * Untuk menggunakan Props, kita kena set key dalam Component.
 * Contohnya Name, Salary dan IsPermenant yang akan digunakan pada Parents Component
 * @rujuk App.jsx
 *
 * Bila kita menggunakan props, sangat digalakkan untuk menggunakan propsType juga.
 */

const Card = (props) => {
  return (
    <div className="card card-body bg-primary bg-gradient text-light rounded-3 shadow-sm mb-1">
      <h5>{props.name}</h5>
      <p className="mb-0">Annual Salary : {props.salary}</p>
      <p className="mb-0">
        Status : {props.isPermenant ? "Permenant" : "Contract"}
      </p>
    </div>
  );
};

Card.defaultProps = {
  name: "Abdullah",
  salary: 0,
  isPermenant: false,
};

Card.propTypes = {
  name: PropTypes.string,
  salary: PropTypes.number,
  isPermenant: PropTypes.bool,
};

export default Card;
