import { getGifs } from "../helpers/getgifs";

export const GiftGrid = ({ category }) => {
  getGifs(category);

  return (
    <>
      <h3>{category}</h3>
      <p>Hola mundo</p>
    </>
  );
}