import React, { FC } from "react";
import { IIngredient } from "../store/types";
import { motion } from "framer-motion";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import { selectIsLoadingRecipes } from "../store/recipesSlice";

export interface Ingredient extends IIngredient {
  index: number;
}
// eslint-disable-next-line @typescript-eslint/no-redeclare
const Ingredient: FC<Ingredient> = ({ ingredient, measure, index }) => {
  const loading = useSelector(selectIsLoadingRecipes);

  return loading ? (
    <Skeleton variant="rectangular" width="full" max-height={200} />
  ) : (
    <motion.li
      className="opacity-1 transform-none"
      initial={{ x: 100, y: 100, opacity: 0 }}
      animate={{ x: 0, y: 0, opacity: 1 }}
      exit={{ x: -100, y: -100, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <figure className="border-[1px] border-violet rounded bg-grayRgba max-w-[176px] mx-auto my-0 flex flex-col items-center h-full">
        <img
          className="object-cover w-full h-full block"
          src={`https://www.themealdb.com/images/ingredients/${ingredient}.png`}
          alt={ingredient}
        />
        <figcaption className="flex flex-nowrap items-center justify-center bg-violet text-white px-[0.3em] py-[0.25em] min-h-[44.88px] overflow-hidden w-full text-center font-bold capitalize tracking-tighttest text-925">
          {measure} &nbsp; {ingredient}
        </figcaption>
      </figure>
    </motion.li>
  );
};

export default Ingredient;
