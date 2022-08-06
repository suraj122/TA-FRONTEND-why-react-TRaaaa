function Article(props) {
  return (
    <article>
      <img className="blog-img" src={props.urlToImage} alt="" />
      <h3>{props.title}</h3>
    </article>
  );
}

export default Article;
