import React, { FC } from "react";
import { ICategory, ISingleMeal } from "../store/types";

interface ITitle {
  categoryId?: string | undefined;
  categories?: ICategory[];
  searchedRecipes?: ISingleMeal[];
}

const Title: FC<ITitle> = ({ categoryId, categories, searchedRecipes }) => {
  return (
    <div className="bg-violet p-2">
      {categoryId &&
        <h1 className="text-center text-white text-[18px] font-bold">
          Choose a recipe from&nbsp;
          {<span className="text-green">{categoryId}</span>}&nbsp;category!
        </h1>}
      
      {categories && 
        <h1 className="text-center text-white text-[18px] font-bold">
          Choose your favourite&nbsp;
          <span className="text-green">category!</span>
        </h1>
        }
      {searchedRecipes && 
         <h1 className="text-center text-white text-[18px] font-bold">
          Your search results&nbsp;
          <span className="text-green">{`(${searchedRecipes.length})`}</span>
          :
        </h1>
         }
          </div>
  );
};

export default Title;
