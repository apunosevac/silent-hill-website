import '../style/style.css';

export default function Game( {game} ) {
  return (
    <div className='game'>
      <h1>{game.name}</h1>
      <h2>{game.releaseYear}</h2>
      <img alt={game.name} src={game.cover} className="coverArt" />
      <h4>Protagonist: {game.protagonistName}</h4>
      <p>Plot: {game.plot}</p>
    </div>
  );
}

