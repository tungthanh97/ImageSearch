import { ImageCard } from "../ImageCard";
import styles from "./ImageList.module.css";

export const ImageList = (props) => {
  const listImages = props.images.map((image) => (
    <ImageCard key={image.id} image={image} />
  ));
  return <div className={`${styles.container}`}>{listImages}</div>;
};
