import React from "react";
import styles from "./ImageCard.module.css";

export const ImageCard = (props) => {
  const { user, urls, links } = props.image;
  console.log("url", urls);
  const [span, setSpan] = React.useState(0);
  const imageRef = React.useRef();
  const onImageLoaded = () => {
    const imageSpan = Math.ceil(imageRef.current.clientHeight / 10);
    setSpan(imageSpan);
  };
  const isImageLoaded = span !== 0;

  return (
    <div
      className={styles.imageContainer}
      style={{
        gridRowEnd: `span ${isImageLoaded ? span : 25}`,
      }}
    >
      <div className={styles.avatar}>
        <img src={user.profile_image.small} />
      </div>
      <a href={links.download} download="image">
        <button className={styles.buttonSave}>Save</button>
      </a>
      <img
        ref={imageRef}
        className={styles.image}
        src={urls.regular}
        onLoad={onImageLoaded}
      />

      <div className={styles.imageText}>
        <p>{user.name}</p>
      </div>
    </div>
  );
};
