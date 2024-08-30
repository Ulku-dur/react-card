import PropTypes from "prop-types";
import "./Card.css";

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  link,
}) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonText && link && (
        <a href={link} className="card-btn">
          {buttonText}
        </a>
      )}
    </div>
  );
};

// Define prop types for the Card component
Card.propTypes = {
  imgSrc: PropTypes.string,        // Optional string for the image source
  imgAlt: PropTypes.string,        // Optional string for the image alt text
  title: PropTypes.string,         // Optional string for the title
  description: PropTypes.string,   // Optional string for the description
  buttonText: PropTypes.string,    // Optional string for the button text
  link: PropTypes.string,          // Optional string for the link
};

// Define default props if necessary (optional)
Card.defaultProps = {
  imgSrc: "",
  imgAlt: "",
  title: "",
  description: "",
  buttonText: "",
  link: "#",
};
