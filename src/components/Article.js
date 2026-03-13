import '../style/style.css';
import { Link } from "react-router-dom";

export default function Article({ article }) {
  return (
    <Link to={`/bts/${article.id}`}>
      <div className="article">
        <h4>{article.name}</h4>
        <img alt={article.name} src={article.imgSrc} className="articleImg" />
      </div>
    </Link>
  );
}