import Game from "../components/Game";
import Title from "../components/Title";
import { gamesTitle } from "../data/data";

export default function Games() {
    return (
    <>
        <Title title={gamesTitle}/>
        <Game/>
    </>
    );
}