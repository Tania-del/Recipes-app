import React, { useEffect } from "react";
import { ICategory } from "../store/types";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../store/store";
import { setSelectedCategory } from "../store/categoriesSlice";

export const Category = ({ id, category, img }: ICategory) => {
  const dispatch = useAppDispatch();

  const handleCategoryClick = () => {
    dispatch(setSelectedCategory(category));
  };

  return (
    <>
      <div className="rounded-t bg-violet bg-opacity-15 mb-[-5px] ">
        <Link
          to={`/category/${category}`}
          className="transform scale-99 translate-z-0 rounded-tl-4 rounded-tr-4"
          onClick={handleCategoryClick}
        >
          <img src={img} alt="" className="h-[100%] w-[100%] block" />
        </Link>
      </div>
      <h4 className="text-lg font-bold text-white p-1 bg-violet rounded-b text-center">
        {category}
      </h4>
    </>
  );
};

export default Category;
