import Image from "../components/Image";
import Text from "../components/Text";
import Title from "../components/Title";
import { teamTitle, teamSilentText } from "../data/data";

export default function Team() {
  return (
    <>
      <Title title={teamTitle} />
      <div className="text-container">
        <Text text={teamSilentText} />
        <Image imageName={"teamSilent1998.jpg"} imageCaption={"Team Silent, 1998"}/>
        <Image imageName={"ts1999.jpg"} imageCaption={"Akira Yamaoka, Keiichiro Toyama, Takayoshi Sato (1999)"}/>
        <Image imageName={"ts2003.jpg"} imageCaption={"Team Silent during the development of Silent Hill 3, 2003"}/>
      </div>
    </>
  );
}
