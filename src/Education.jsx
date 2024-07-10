import PropTypes from "prop-types";

function Education(props) {
  return (
    <div>
      <p className="education-major-style">{props.major}</p>
      <p className="education-style">{props.school}</p>
      <p className="education-style">{props.year}</p>
      <p className="education-style">{props.degree}</p>
    </div>
  );
}

Education.propTypes = {
  major: PropTypes.string.isRequired,
  school: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
};

Education.defaultProps = {
  name: "Guest",
}

export default Education;
