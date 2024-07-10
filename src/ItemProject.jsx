import PropTypes from "prop-types";

function ItemProject(props) {
  return (
    <div>
      <p className="experience-title-style">{props.name}</p>
      <h3>
        Google Play:{" "}
        <a className="email-link" href={props.url}>
          {props.url}
        </a>
      </h3>
      <img className="project-pic" src={props.image} alt={props.name} />
      <hr className="project-divider" />
    </div>
  );
}

ItemProject.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

ItemProject.defaultProps = {
  name: "Guest",
};

export default ItemProject;
