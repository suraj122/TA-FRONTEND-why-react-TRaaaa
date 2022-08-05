import PropTypes from "prop-types";

function Article(props) {
  return (
    <article>
      <img className="blog-img" src={props.urlToImage} alt="" />
      <h3>{props.title.toUpperCase()}</h3>
    </article>
  );
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Article;
