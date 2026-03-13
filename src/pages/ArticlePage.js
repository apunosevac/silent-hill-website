import { useParams } from "react-router-dom";
import { articles } from "../data/data";
import Title from "../components/Title";
import Text from "../components/Text";

export default function ArticlePage() {
  const { id } = useParams();

  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <h2>Article not found</h2>;
  }

  return (
    <>
      <Title title={article.name} />
      <div className="text-container">
        <img src={article.imgSrc} alt={article.name} />
        <Text text={article.articleText}/>
      </div>
    </>
  );
}
