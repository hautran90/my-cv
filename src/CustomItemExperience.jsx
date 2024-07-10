import PropTypes from "prop-types";

function CustomItemExperience(props) {

  const containList = props.contains;
    const listContains = containList.map(item => <li key={item.id}>
        {item}</li>)
  return (
    <div>
      <p className="experience-title-style">{props.title}</p>
      <p className="experience-company-style">{props.company}</p>
      <p className="experience-company-style">{props.time}</p>
      <ul>{listContains}</ul>
      <hr className="project-divider" />
      </div>
  );
}

CustomItemExperience.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  contains: PropTypes.arrayOf(PropTypes.string).isRequired
};

CustomItemExperience.defaultProps = {
  name: "Guest",
}

export default CustomItemExperience;
