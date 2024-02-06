import React, { FC } from "react";
import { ICategory, IMeal, ISingleMeal } from "../store/types";
import { motion } from "framer-motion";
interface ITitle {
  categoryId?: string | undefined;
  categories?: ICategory[];
  searchedRecipes?: ISingleMeal[];
  favorites?: IMeal[];
}

const Title: FC<ITitle> = ({
  categoryId,
  categories,
  searchedRecipes,
  favorites,
}) => {
  return (
    <div className="bg-violet p-2">
      {categoryId && (
        <motion.h1
          className="text-center text-white text-[18px] font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Choose a recipe from&nbsp;
          {<span className="text-green">{categoryId}</span>}&nbsp;category!
        </motion.h1>
      )}

      {categories && (
        <motion.h1
          className="text-center text-white text-[18px] font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Choose your favourite&nbsp;
          <span className="text-green">category!</span>
        </motion.h1>
      )}
      {searchedRecipes && (
        <motion.h1
          className="text-center text-white text-[18px] font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Your search results&nbsp;
          <span className="text-green">{`(${searchedRecipes.length})`}</span>:
        </motion.h1>
      )}

      {favorites && (
        <motion.h1
          className="text-center text-white text-[18px] font-bold"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          Your favorite&nbsp;
          {<span className="text-green">recipes</span>}:
        </motion.h1>
      )}
    </div>
  );
};

export default Title;
