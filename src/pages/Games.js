import { useState } from "react";
import Game from "../components/Game";
import Title from "../components/Title";
import { gamesTitle, games } from "../data/data";

export default function Games() {

  const [search, setSearch] = useState("");

  const filteredGames = games.filter(game =>
    game.name.toLowerCase().includes(search.toLowerCase()) ||
    game.plot.toLowerCase().includes(search.toLowerCase()) ||
    game.protagonistName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Title title={gamesTitle} />

      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="list-container">
        {filteredGames.map(game => (
          <Game key={game.id} game={game} />
        ))}
      </div>
    </>
  );
}