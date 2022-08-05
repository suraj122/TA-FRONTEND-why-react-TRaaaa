import articles from "../data/article";
import Article from "./Article";

function Articles() {
  return (
    <section className="padding-y">
      <h2 className="text-center">Articles</h2>
      <div className="container article-wrapper">
        {articles.map((article) => (
          <Article {...article} key={article.publishedAt} />
        ))}
      </div>
    </section>
  );
}

export default Articles;
