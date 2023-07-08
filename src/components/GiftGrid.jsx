import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getgifs";
import { GiftGridItem } from "./GiftGridItem";

export const GiftGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
  }

  useEffect(() => {
    getImages();
  }, []);

  return (
    <>
      <h3>{category}</h3>

      <div className="card-grid">
        {
          images.map((image) => (
            <GiftGridItem
              key={image.id}
              {...image} />
          ))
        }
      </div>
    </>
  );
}