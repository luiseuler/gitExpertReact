import { GiftGridItem } from "./GiftGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  console.log(isLoading);
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