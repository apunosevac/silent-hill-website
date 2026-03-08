import Article from "../components/Article";
import Text from "../components/Text";
import Title from "../components/Title";
import { btsTitle, articles } from "../data/data";

export default function BehindScene() {
  return (
    <>
      <Title title={btsTitle} />
      <Text />
      <div className="article-container">
        {articles.map((article) => (
          <Article key={article.id} article={article}/>
        ))}
      </div>
    </>
  );
}
