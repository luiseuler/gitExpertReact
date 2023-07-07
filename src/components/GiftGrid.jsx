import { useEffect } from "react";
import { getGifs } from "../helpers/getgifs";

export const GiftGrid = ({ category }) => {
  
  useEffect(() => {
    getGifs(category);
  }, []);

  return (
    <>
      <h3>{category}</h3>
    </>
  );
}