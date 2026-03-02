export default function Image({ imageName, imageCaption }) {
  const IMAGES = require.context("../img", false, /\.(png|jpe?g|svg)$/);

  let imgSrc = IMAGES(`./${imageName}`);

  return (
    <>
      <img src={imgSrc} alt={imageName} className="pageImg"/>
      <p className="caption">{imageCaption}</p>
    </>
  );
}
