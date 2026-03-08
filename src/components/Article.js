import '../style/style.css';

export default function Article( {article} ) {
  return (
    <div className='article'>
      <h4>{article.name}</h4>
      <img alt={article.name} src={article.imgSrc} className="articleImg" />
    </div>
  );
}

